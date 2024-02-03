import React from "react";
import styles from './profile.module.scss';

function Profile(){
  const firstName = localStorage.getItem('firstName')
  const lastName = localStorage.getItem('lastName')
  const email = localStorage.getItem('email')
  return (
    <div className={styles.intro}>
      {`Hello I'm ${firstName} ${lastName}👋`}
      <br/>
      {`Contact me at ${email} for any further queries`}
    </div>
  )
}
export default Profile;