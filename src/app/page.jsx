"use client";
import { useState, useEffect } from 'react';
import styles from '../styles/layout/app/Home/home.module.scss';

export default function Home() {
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem('user') === null) {
      setLoggedUser(null);
    } else {
      setLoggedUser(JSON.parse(sessionStorage.getItem('user')));
    }
  }, []);

  const handleButtonClick = () => {
    console.log(loggedUser);
  };

  return (
    <main className={`${styles['full-content-container']}`}>
      <div className={`${styles['mid-content-container']}`}>
        <div className={`${styles['content-container']}`}>
          <h1>Home</h1>
          <button onClick={handleButtonClick}>Exibir loggedUser</button>
        </div>
      </div>
    </main>
  );
}