import React, { useState, useEffect } from "react";
import Styles from "./perfil.module.css";

const url = "https://2911-144-22-241-121.ngrok-free.app";

async function fetchUserData(user_id) {
  const response = await fetch(`${url}/profile`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: user_id,
    }),
  });

  return response.json();
}
async function fetchBadgesData(user_id) {
  const response = await fetch(`${url}/badges`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id1: user_id,
    }),
  });

  return response.json();
}

export function Perfil() {
  const [userData, setUserData] = useState(null);
  const [badgesData, setBadgesData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchUserData(import.meta.env.VITE_USER_ID);
      const data2 = await fetchBadgesData(import.meta.env.VITE_USER_ID);
      setUserData(data);
      setBadgesData(data2);
    }
    fetchData();
  }, []);
  return (
    <div>
      <audio autoPlay>
        <source
          src="https://github.com/eumarciodev/audio/raw/main/good-night.mp3"
          type="audio/mp3"
        />
      </audio>
      {userData && (
        <div className={Styles.card}>
          <img
            src={
              "https://cdn.discordapp.com/avatars/" +
              userData.id +
              "/" +
              userData.avatar
            }
            alt={userData.username}
          />
          <p>{userData.username}</p>
          <div className={Styles.badge}>
            {badgesData &&
              badgesData.map((badge) => (
                <img
                  src={`https://cdn.discordapp.com/badge-icons/${badge.icon}.png`}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
