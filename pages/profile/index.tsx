import { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Brush } from 'recharts'
import Cookies from 'js-cookie'
import classes from '../../styles/Profile.module.css'

const Profile: NextPage = () => {
  const [username, setUsername] = useState('')
  const [data, setData] = useState([])

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
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div className={classes.profile}>
      <div className={classes.profile__graph}>
        <div className={classes.profile__graph__head}>{username}</div>
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
          </LineChart>
        </div>
      </div>
    </div>
  )
}

export default Profile
