import React from 'react'
import styles from "./bar.module.css";

const TopBar = () => {
  return (
    <div className={styles.container}>
      <h1>Your Notes</h1>
      <button>X</button>
    </div>
  )
}

export default TopBar