

import React, { useState } from 'react'
import {  Link } from "react-router-dom";
import InputControl from '../InputControl/InputControl';
import styles from "./singupdesign.module.css"
import { createUserWithEmailAndPassword , updateProfile} from 'firebase/auth'
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate=useNavigate();
  const [values, setValues] = useState(
    {
      name: "",
      phone: "",
      email: "",
      pass: "",
    }
  );
  const [errorMsg, setErrorMsg] = useState("");
  const [SubmitButtonDisable, setSubmitButtonDisable] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handlesubmit = () => {
    if (!values.name || !values.email || !values.pass || !values.phone) {
      setErrorMsg("Please enter all fields ")
      return;
    }

    setErrorMsg("");
    setSubmitButtonDisable(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass).then(async(res) => {
      setSubmitButtonDisable(false);
      navigate("/Home");
      const user=res.user
      await updateProfile(user,{
        displayName:values.name,
        
      });
      // console.log(user);
    })
      .catch((err) => { 
        setSubmitButtonDisable(false);
        setErrorMsg(err.message);
        
      }
      );
  };
  return (
    <div className={styles.container}>
        <button className={styles.backButton}>   <span>
          <Link to="/">Home{" "}<i class="bi bi-arrow-return-left"></i></Link>
        </span></button>
      <div className={styles.innerBox}>
    
        <h1 className={styles.heading}>SignUp<img src="./favicon1.ico" alt="MedvalueDeal Logo" style={{ width: '150px', height: '70px', marginRight: '10px' }} /> </h1>
        <InputControl label="Name" placeholder="Enter your name " onChange={event =>
          setValues((prev) => ({ ...prev, name: event.target.value }))} />
        <br />
        <InputControl label="Mobile Number" placeholder="Enter your Phone Number " onChange={event =>
          setValues((prev) => ({ ...prev, phone: event.target.value }))} />
          <br />
        <InputControl label="Email" placeholder="Enter your email address" onChange={event =>
          setValues((prev) => ({ ...prev, email: event.target.value }))} />
        <br />
        <InputControl label="Password" placeholder="Create your Password"   type={showPassword ? 'text' : 'password'} onChange={event =>
          setValues((prev) => ({ ...prev, pass: event.target.value }))} />
          <span
           className={styles.showHideIcon}
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'} Password
          </span>
          
        <div className={styles.footer}>
          <br />
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handlesubmit} disabled={SubmitButtonDisable}>Create</button>
          <p>
            Already have an accoun?
            <span>
              <Link to="/Login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

