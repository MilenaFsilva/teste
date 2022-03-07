import React from 'react';
import Navbar from './components/navbar/Navbar';
import styles from './components/navbar/Navbar.module.css'
import Body from './components/Corpo/Corpo.js';

var links = [
  {
    link: 'http://google.com',
    text: 'Home'
},
{
   link: 'http://youtube.com',
   text: 'Nossa História'

},{
   link: 'http://github.com',
   text: 'Rede'

}
,{
  link: 'http://office.com',
  text: 'Trabalhe Conosco'

}
,{
  link: 'http://facebook.com',
  text: 'Menu'

}]

function App() {
  return (


    <div className={styles.main}>
      <nav className={styles.navbar}>
        {
          links.map(function(element){
            return <div> <Navbar 
                link ={element.link}
                text ={element.text}/>
             </div>
          })
        }
      </nav>   
      <Body/>
    </div>
    
  );
}

export default App;
