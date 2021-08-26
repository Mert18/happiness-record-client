import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Layout from '../core/Layout'
import '../styles/dashboard.css'

import Graph from '../components/Graph'

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState('')

  const [work, setWork] = useState(0)
  const [game, setGame] = useState(0)
  const [leisure, setLeisure] = useState(0)
  const [happiness, setHappiness] = useState(0)
  const [message, setMessage] = useState('')

  const [data, setData] = useState([])

  const today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  const yyyy = today.getFullYear()

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      if (parseInt(work) + parseInt(game) + parseInt(leisure) !== 100) {
        setMessage('Work + Game + Leisure must be equal to 100.')
      } else {
        const body = { work, game, leisure, happiness }
        const response = await fetch(`${process.env.REACT_APP_API_URL}/data`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            jwt_token: localStorage.token,
          },
          body: JSON.stringify(body),
        })
        setMessage('Sent successfully.')
        setWork(0)
        setGame(0)
        setLeisure(0)
        setHappiness(0)
      }
    } catch (err) {
      console.error(err.message)
    }
  }

  const getProfile = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/dashboard`, {
        method: 'POST',
        headers: { jwt_token: localStorage.token },
      })
      const parseData = await res.json()
      setName(parseData.user_name)
    } catch (err) {
      console.error(err.message)
    }
  }

  const getData = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/data`, {
        method: 'GET',
        headers: { jwt_token: localStorage.token },
      })
      const parsedData = await res.json()
      setData(parsedData.rows)
    } catch (error) {
      console.error(error)
    }
  }

  const logout = async (e) => {
    e.preventDefault()
    try {
      localStorage.removeItem('token')
      setAuth(false)
      toast.success('Logout successfully')
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getProfile()
    getData()
    setTimeout(() => {
      setMessage('')
    }, 3000)
  }, [])
  return (
    <Layout>
      <div className="dashboard">
        <div className="dashboard-hero">
          <h1>{name}</h1>
          <button onClick={(e) => logout(e)}>Logout 🔴</button>
        </div>

        {message ? <div className="message">{message}</div> : ''}

        <div className="dashboard-graph">
          <Graph data={data} />
        </div>

        <div className="dashboard-info">
          <p>
            We encourage you to set an alarm at 23:00PM every day, come and
            enter values for the day.
          </p>
        </div>
        <div className="dashboard-data">
          <div className="dashboard-data-today">
            <h2>
              {mm}/{dd}/{yyyy}
            </h2>
          </div>
          <form className="dashboard-data-inp" onSubmit={onSubmitForm}>
            <div className="inp-group">
              <label>Work</label>
              <input
                id="work"
                type="number"
                step="5"
                min="0"
                max="100"
                value={work}
                onChange={(e) => {
                  setWork(e.target.value)
                }}
              />
            </div>
            <div className="inp-group">
              <label>Game</label>
              <input
                id="game"
                type="number"
                min="0"
                step="5"
                max="100"
                value={game}
                onChange={(e) => {
                  setGame(e.target.value)
                }}
              />
            </div>
            <div className="inp-group">
              <label>Leisure</label>
              <input
                id="leisure"
                type="number"
                min="0"
                step="5"
                max="100"
                value={leisure}
                onChange={(e) => {
                  setLeisure(e.target.value)
                }}
              />
            </div>
            <div className="inp-group">
              <label>Happiness</label>
              <input
                id="happiness"
                type="number"
                min="0"
                step="5"
                max="100"
                value={happiness}
                onChange={(e) => setHappiness(e.target.value)}
              />
            </div>
            <button>Send</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
