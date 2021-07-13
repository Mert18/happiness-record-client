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

        <div className="dashboard-data">
          <div className="dashboard-data-today">
            <h2>July 13, 2021</h2>
          </div>
          <form className="dashboard-data-inp">
            <div className="inp-group">
              <label>Work</label>
              <input id="work" type="range" min="0" max="100" value={work} onChange={(e) => setWork(e.target.value)} />
            </div>
            <div className="inp-group">
              <label>Game</label>
              <input id="game" type="range" min="0" max="100" value={game} onChange={(e) => setGame(e.target.value)} />
            </div>
            <div className="inp-group">
              <label>Leisure</label>
              <input id="leisure" type="range" min="0" max="100" value={leisure} onChange={(e) => setLeisure(e.target.value)} />
            </div>
            <div className="inp-group">
              <label>Happiness</label>
              <input id="happiness" type="range" min="0" max="100" value={happiness} onChange={(e) => setHappiness(e.target.value)} />
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