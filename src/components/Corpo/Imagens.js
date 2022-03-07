import React from "react";
import styles from './Corpo.module.css'

var imagens = [
    {
      Img: './img/img2.jpeg'
    },
    {
      Img: './img/img1.jpeg'
    },
    {
      Img: './img/img3.jpeg'
    },
    {
      Img: './img/img6.jpeg'
    },
    {
      Img: './img/img5.jpeg'
    },
    {
      
      Img: './img/img4.jpeg'
    }
  ]
    


function Card(){
    return(
            imagens.map(function(element){
              return <div> 
                <img  className={styles.Imgcss} src = {element.Img}></img>
               </div>
            })
    );
}

export default Card