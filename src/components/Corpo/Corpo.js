import styles from './Corpo.module.css'
import Imagem from './Imagens';
import Texto from './Texto';

function Body(){
    return(
        <div className={styles.main_body}>
              <div className={styles.imgBack}>
                  
              <h1> Bem vindo ao 
              <br/>
              Roberto Manshi</h1>

              </div>
              <Texto/>
              
              <div className={styles.img}>
                <Imagem/>
              </div>
        </div>
    );
}




export default Body