import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Layout from "../core/Layout";
import '../styles/dashboard.css';

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  const [work, setWork] = useState(0);
  const [game, setGame] = useState(0);
  const [leisure, setLeisure] = useState(0);
  const [happiness, setHappiness] = useState(0);
  const [message, setMessage] = useState("")
  const [day, setDay] = useState('');

  const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { work, game, leisure, happiness };
      const response = await fetch(
        "http://localhost:5000/data/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            jwt_token: localStorage.token},
          body: JSON.stringify(body)
        }
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });
      const parseData = await res.json();
      setName(parseData.user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
    
  }, []);
  
  return (
    <Layout>
      <div className="dashboard">
        <div className="dashboard-hero">
          <h1>{name}</h1>
          <button onClick={e => logout(e)}>logout</button>
        </div>
        <div>
          {message}
        </div>
        <div className="dashboard-data">
          <div className="dashboard-data-today">
            <h2>{mm}/{dd}/{yyyy}</h2>
          </div>
          <form className="dashboard-data-inp" onSubmit={onSubmitForm}>
            <div className="inp-group">
              <label>Work</label>
              <input id="work" type="number" step="5" min="0" max="100" value={work} onChange={(e) => {setWork(e.target.value)}} />
            </div>
            <div className="inp-group">
              <label>Game</label>
              <input id="game" type="number" min="0" step="5" max="100" value={game} onChange={(e) => {setGame(e.target.value)}} />
            </div>
            <div className="inp-group">
              <label>Leisure</label>
              <input id="leisure" type="number" min="0" step="5" max="100" value={leisure} onChange={(e) => {setLeisure(e.target.value)}} />
            </div>
            <div className="inp-group">
              <label>Happiness</label>
              <input id="happiness" type="number" min="0" step="5" max="100" value={happiness} onChange={(e) => setHappiness(e.target.value)} />
            </div>
            <button>Send</button>
          </form>
        </div>
        <div className="dashboard-graph">
          GRAPH HERE
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;