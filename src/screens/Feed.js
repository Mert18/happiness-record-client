import React, { useState, useEffect } from 'react'
import Layout from '../core/Layout'
import '../styles/feed.css'
import Graph from '../components/Graph'

const Feed = () => {
  const [data, setData] = useState([])
  const [users, setUsers] = useState([])

  const getProfile = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/data/random`, {
        method: 'GET',
      })
      const parseData = await res.json()
      setUsers(parseData)
      getUserDataById(parseData[0].user_id)
    } catch (err) {
      console.error(err.message)
    }
  }
  const getUserDataById = async (id) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/data/${id}`, {
        method: 'GET',
      })
      const parseData = await res.json()
      setData(parseData)
    } catch (err) {
      console.error(err.message)
    }
  }
  useEffect(() => {
    getProfile()
  }, [])

  console.log(data)
  return (
    <Layout>
      <div className="feed">
        <div className="user">
          <div className="username">
            <h2>{users[0]?.user_name}'s Graph</h2>
          </div>
          <div className="usergraph">
            <Graph data={data} />
          </div>
        </div>
        <div className="change">
          <button onClick={getProfile}>Change</button>
        </div>
      </div>
    </Layout>
  )
}

export default Feed
