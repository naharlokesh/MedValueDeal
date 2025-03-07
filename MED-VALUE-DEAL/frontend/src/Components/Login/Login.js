

import React, { useState } from 'react'
import styles from './logindesign.module.css'
import { Link } from "react-router-dom";
import InputControl from '../InputControl/InputControl';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState(
    {

      email: "",
      pass: "",
    }
  );
  const [errorMsg, setErrorMsg] = useState("");
  const [SubmitButtonDisable, setSubmitButtonDisable] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handlesubmit = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Please enter all fields ")
      return;
    }

    setErrorMsg("");
    setSubmitButtonDisable(true);
    signInWithEmailAndPassword(auth, values.email, values.pass).then(async (res) => {
      setSubmitButtonDisable(false);
      navigate("/");
      // console.log(user);
    })
      .catch((err) => {
        setSubmitButtonDisable(false);
        setErrorMsg(err.message);

      }
      );
  };


  return (
    <>

      <div className={styles.container}>
        <button className={styles.backButton}>   <span>
          <Link to="/">Home{" "}<i class="bi bi-arrow-return-left"></i></Link>
        </span></button>
        <div className={styles.innerBox}>
          <h1 className={styles.heading}>Login  <img src="./favicon1.ico" alt="MedvalueDeal Logo" style={{ width: '150px', height: '70px', marginRight: '10px' }} /></h1>
          <InputControl label="Email" placeholder="Enter your email address" onChange={event =>
            setValues((prev) => ({ ...prev, email: event.target.value }))} />
          <br />

          <InputControl label="Password" placeholder="Enter your Password" type={showPassword ? 'text' : 'password'} onChange={event =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))}
          />
          <span
            className={styles.showHideIcon}
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'} Password
          </span>

          <div className={styles.footer}>
            <br />
            <b className={styles.error}>{errorMsg}</b>
            <button disabled={SubmitButtonDisable} onClick={handlesubmit}>Login</button>
            <p>
              Don't have an account?
              <span>
                <Link to="/Signup">singup/Register</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
