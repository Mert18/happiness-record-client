import { NextPage } from 'next'
import { isAuth } from '../../app/utils/helpers'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import classes from '../../styles/Feed.module.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Brush } from 'recharts'
import Loader from '../../app/components/modules/loader'

const Feed: NextPage = () => {
  const [data, setData] = useState([])
  const [username, setUsername] = useState<string>('')
  const [loader, setLoader] = useState<boolean>(false)

  const router = useRouter()

  const getProfile = async () => {
    try {
      setLoader(true)
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/randomuser`,
        {
          method: 'GET',
        }
      )
      const parseData = await res.json()
      setUsername(parseData[0].username)
      getUserDataById(parseData[0]._id)
    } catch (err) {
      console.error(err.message)
    }
  }

  const getUserDataById = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/userdata/${id}`,
        {
          method: 'GET',
        }
      )
      const parseData = await res.json()
      setData(parseData)
      setLoader(false)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    if (!isAuth()) {
      router.push('/')
    }

    getProfile()
  }, [])

  return (
    <div className={classes.feed}>
      <section className={classes.graph}>
        <div className={classes.graph__head}>{username}</div>
        <div className={classes.graph__graph}>
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
          </LineChart>
        </div>
        {loader ? (
          <Loader />
        ) : (
          <button className={classes.nextbutton} onClick={getProfile}></button>
        )}
      </section>
    </div>
  )
}

export default Feed
