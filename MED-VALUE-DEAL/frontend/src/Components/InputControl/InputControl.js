import React from 'react'
import styles from './InputControl.module.css'
export default function InputControl(props) {
  return (
    <div>
      <div className={styles.container}>
        {props.label && <label>{props.label}</label>}
        <input type="text" {...props}></input>
      </div>
    </div>
  )
}
