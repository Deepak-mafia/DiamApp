import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();

    const initDataUnsafe = tg.initDataUnsafe;
    if (initDataUnsafe.user) {
      setUserData({
        id: initDataUnsafe.user.id,
        username: initDataUnsafe.user.username,
        firstName: initDataUnsafe.user.first_name,
        lastName: initDataUnsafe.user.last_name,
      });
    }
  }, []);
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      <div>
        {userData ? (
          // <div>
          //   <p>User ID: {userData.id}</p>
          //   <p>Username: {userData.username}</p>
          //   <p>First Name: {userData.firstName}</p>
          //   <p>Last Name: {userData.lastName}</p>
          // </div>
          <div>
            <p>Hello {userData.firstName}! Welcome to the Dummy project.</p>
            <p>This is your fetch Data of Telegram: </p>
            <p>User Id: {userData.id}</p>
            <p>Username: {userData.username}</p>
            <p>Last Name: {userData.lastName}</p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
