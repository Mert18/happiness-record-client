import { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Brush } from 'recharts'
import Cookies from 'js-cookie'
import classes from '../../styles/Profile.module.css'
import { isAuth } from '../../app/utils/helpers'
import { useRouter } from 'next/router'
import moment from 'moment'

const Profile: NextPage = () => {
  const [username, setUsername] = useState<string>('')
  const [data, setData] = useState([])
  const [hidden, setHidden] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  const router = useRouter()

  const [work, setWork] = useState<any>(0)
  const [leisure, setLeisure] = useState<any>(0)
  const [game, setGame] = useState<any>(0)
  const [happiness, setHappiness] = useState<any>(0)
  const [requirements, setRequirements] = useState([
    {
      req: 'Values cannot be greater than 100.',
      satisfied: false,
    },
    {
      req: 'Values cannot be less than 0.',
      satisfied: false,
    },
    {
      req: '(Work + Game + Leisure) must be equal to 100.',
      satisfied: false,
    },
  ])

  const getProfile = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/profile`,
        {
          method: 'GET',
          headers: { token: Cookies.get('token') },
        }
      )
      const parsedData = await res.json()
      setUsername(parsedData[0].username)
      getMyData(parsedData[0]._id)
    } catch (err) {
      console.error(err.message)
    }
  }

  const getMyData = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/userdata/${id}`,
        {
          method: 'GET',
        }
      )
      const parsedData = await res.json()
      setData(parsedData)
      if (
        parsedData[parsedData.length - 1].date == moment().format('MMM Do YY')
      ) {
        console.log('Equal!')
        setHidden(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (!isAuth()) {
      router.push('/')
    }
    if (
      parseInt(work, 10) < 100 &&
      parseInt(game, 10) < 100 &&
      parseInt(leisure, 10) < 100 &&
      parseInt(happiness, 10) < 100
    ) {
      requirements[0].satisfied = true
    } else {
      requirements[0].satisfied = false
    }
    if (
      parseInt(work, 10) >= 0 &&
      parseInt(game, 10) >= 0 &&
      parseInt(leisure, 10) >= 0 &&
      parseInt(happiness, 10) >= 0
    ) {
      requirements[1].satisfied = true
    } else {
      requirements[1].satisfied = false
    }

    if (
      parseInt(work, 10) + parseInt(game, 10) + parseInt(leisure, 10) ==
      100
    ) {
      requirements[2].satisfied = true
      console.log('satisfies!', work, game, leisure)
    } else {
      requirements[2].satisfied = false
    }

    getProfile()
  }, [work, game, leisure, happiness, requirements[2].satisfied])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      console.log(Cookies.get('token'))
      if (
        parseInt(work, 10) > 100 ||
        parseInt(game, 10) > 199 ||
        parseInt(leisure, 10) > 100 ||
        parseInt(happiness, 10) > 100
      ) {
        setMessage('Values cannot be greater than 100.')
      } else if (
        parseInt(work, 10) < 0 ||
        parseInt(game, 10) < 0 ||
        parseInt(leisure, 10) < 0 ||
        parseInt(happiness, 10) < 0
      ) {
        setMessage('Values cannot be less than 0.')
      } else if (
        parseInt(work, 10) + parseInt(game, 10) + parseInt(leisure, 10) !==
        100
      ) {
        setMessage('(Work + Game + Leisure) must be equal to 100.')
      } else {
        await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/postmydata`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            token: Cookies.get('token'),
          },
          body: JSON.stringify({ work, leisure, game, happiness }),
        })
          .then((res) => {
            console.log('success sending values', res)
            router.reload()
          })
          .catch((err) => {
            console.log('error sending values', err)
          })
      }
    } catch (error) {
      console.log('error submitting values', error)
    }
  }
  return (
    <div className={classes.profile}>
      {message ? (
        <div className={classes.messagebox}>
          <p>{message}</p>
        </div>
      ) : (
        ''
      )}
      <section className={classes.profile__graph}>
        <div className={classes.profile__graph__head}>
          <p>{username}</p>
        </div>
        <div className={classes.profile__graph__graph}>
          <LineChart width={1100} height={400} data={data}>
            <Line
              type="monotone"
              dataKey="happiness"
              activeDot={{ r: 8 }}
              fill="var(--color-purple)"
              stroke="var(--color-purple)"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="work"
              activeDot={{ r: 8 }}
              dot={false}
              stroke="#07596D"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="leisure"
              activeDot={{ r: 8 }}
              stroke="#8884d8"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="game"
              activeDot={{ r: 8 }}
              stroke="#39D310"
              strokeDasharray="3 4 5 2"
              dot={false}
            />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" tickCount={50} minTickGap={15} />
            <Brush />
          </LineChart>
        </div>
      </section>

      {hidden ? (
        ''
      ) : (
        <div className={classes.requirements}>
          <ul>
            {requirements.map((el: any) => {
              return (
                <li key={el.req}>
                  {el.satisfied ? (
                    <span className={classes.satisfies}>&#10004;</span>
                  ) : (
                    <span className={classes.doesnotsatisfy}>&#10008;</span>
                  )}
                  {el.satisfied ? (
                    <p className={classes.satisfies}>{el.req}</p>
                  ) : (
                    <p className={classes.doesnotsatisfy}>{el.req}</p>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      )}
      {hidden ? (
        <div className={classes.profile__form}>
          <p>You already entered today's values.</p>
        </div>
      ) : (
        <section className={classes.profile__form}>
          <form>
            <div className={classes.inputgroup}>
              <label htmlFor="work">Work</label>
              <input
                type="number"
                id="work"
                min={0}
                max={100}
                onChange={(e: any) => setWork(e.target.value)}
              />
            </div>
            <div className={classes.inputgroup}>
              <label htmlFor="leisure">Leisure</label>
              <input
                type="number"
                id="leisure"
                min={0}
                max={100}
                onChange={(e: any) => setLeisure(e.target.value)}
              />
            </div>
            <div className={classes.inputgroup}>
              <label htmlFor="game">Game</label>
              <input
                type="number"
                id="game"
                min={0}
                max={100}
                onChange={(e: any) => setGame(e.target.value)}
              />
            </div>
            <div className={classes.inputgroup}>
              <label htmlFor="happiness">Happiness</label>
              <input
                type="number"
                id="happiness"
                min={0}
                max={100}
                onChange={(e: any) => setHappiness(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}></button>
          </form>
        </section>
      )}
    </div>
  )
}

export default Profile
