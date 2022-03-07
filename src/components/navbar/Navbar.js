import React from 'react'
import styles from './Navbar.module.css'

function Navbar({link,text}) {
  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href={link}>{text} </a>
        </li>
      </ul>
    </div>
      
  );
}

export default Navbar;
