  import React,{useState} from 'react'
  //styles
  import styles from './registration.module.scss';
  import { FiEyeOff } from "react-icons/fi";
  import { FiEye } from "react-icons/fi";
  import { useNavigate } from 'react-router-dom';

  function RegistrationForm (){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [type,setType] = useState('password')
    const [icon,setIcon] = useState(<FiEyeOff/>)
    const [firstnameerror,setfirstnameerror] = useState('')
    const [lastnameerror,setlastnameerror] = useState('')
    const [emailerror,setemailerror] = useState('')
    const [passwordError,setpasswordError] = useState('')
    const [confirmpasswordError, setconfirmpasswordError] = useState('')
    const navigate = useNavigate();

    const validateInputs = () => {
      let isValid = true;
    
      if (!/^[a-zA-Z]+$/.test(firstName)) {
        setfirstnameerror("First name must contain only letters");
        isValid = false;
      } else {
        setfirstnameerror("");
      }
    
      if (!/^[a-zA-Z]+$/.test(lastName)) {
        setlastnameerror("Last name must contain only letters");
        isValid = false;
      } else {
        setlastnameerror("");
      }
    

      if (!/\S+@\S+\.\S+/.test(email)) {
        setemailerror("Invalid email format");
        isValid = false;
      } else {
        setemailerror("");
      }
    
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/.test(password)) {
        setpasswordError("Password must be at least 8 characters and include at least one lowercase letter, one uppercase letter, one digit, and one special character.");
        isValid = false;
      } else {
        setpasswordError("");
      }
    
      if (password !== confirmPassword) {
        setconfirmpasswordError("Password does not match");
        isValid = false;
      } else {
        setconfirmpasswordError("");
      }
    
      return isValid;
    };
    
    const handleSubmit = () => {
      if (!validateInputs()) {
        alert("Please fix the errors in the form.");
        return;
      }
      localStorage.setItem('firstName',firstName)
      localStorage.setItem('lastName',lastName)
      localStorage.setItem('email',email)
      navigate('/profile');
    };

    const toggleIcon = () => {
      setType(type === 'password' ? 'text' : 'password');
      setIcon(type === 'password' ? <FiEye /> : <FiEyeOff />);
    };

    return (
      <div className={styles.form}>
        <div className={styles.formUser}>
        <div className = {styles.userName}>
          <label className={styles.formLabel} for = 'firstName'>First Name</label>
          <input 
            className={styles.formInput} 
            type = 'text' 
            value = {firstName} 
            onChange ={(e)=>{
              setFirstName(e.target.value) ;
              setfirstnameerror(/^[a-zA-Z]+$/.test(e.target.value)?'':'First name containes only letters')}}
            placeholder='First Name'/>
            {firstnameerror && <span className={styles.errorMessage}>{firstnameerror}</span>}
        </div>
        <div className = {styles.lastName}>
          <label className={styles.formLabel} for = 'lastName'>Last Name</label>
          <input 
            className={styles.formInput} 
            type='text' 
            value ={lastName} 
            onChange={(e)=>{
              setLastName(e.target.value)
              setlastnameerror(/^[a-zA-Z]+$/.test(e.target.value)?'':'Last name containes only letters')
            }}
              placeholder='Last Name'/>
              {lastnameerror && <span className={styles.errorMessage}>{lastnameerror}</span>}
        </div>
        <div className = {styles.email}>
          <label className={styles.formLabel} for = 'email'>email</label>
          <input 
            className={styles.formInput}
            type = 'text' 
            value={email} 
            onChange={(e)=>{
              setEmail(e.target.value)
              setemailerror(/\S+@\S+\.\S+/.test(e.target.value)?'':'Incorrect email format')
            }}
            placeholder='email'/>
            {emailerror && <span className={styles.errorMessage}>{emailerror}</span>}
        </div>
        <div className = {styles.password}>
          <label className={styles.formLabel} for = 'password'> Password</label>
          <input
            className={styles.formInput} 
            type = {type} 
            value = {password} 
            onChange={(e)=>{
              setPassword(e.target.value)
              setpasswordError(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/.test(e.target.value)?'':'Password must be at least 8 characters and include at least one lowercase letter, one uppercase letter, one digit, and one special character.')
            
            }}
            placeholder='Password'/>
          <span className={styles.icons} onClick={toggleIcon}>{icon}</span> 
          {passwordError && <span className={styles.errorMessage}>{passwordError}</span>}
        </div>
        <div className = {styles.confirmPassword}>
          <label className={styles.formLabel} for = 'confirm password'>Confirm password</label>
          <input 
            className={styles.formInput} 
            type = 'password' 
            value = {confirmPassword} 
            onChange={(e)=>{
              setConfirmPassword(e.target.value)
              setconfirmpasswordError(password !== e.target.value?'password does not match':'')
            }}
              placeholder='Confirm password'/>
              {confirmpasswordError && <span className={styles.errorMessage}>{confirmpasswordError}</span>}
        </div>
        </div>
        <div className={styles.footer}>
          <button onClick = {()=>handleSubmit()}type = "button" className= "btn">Register</button>
        </div>
      </div>
    )
  }

export default RegistrationForm;