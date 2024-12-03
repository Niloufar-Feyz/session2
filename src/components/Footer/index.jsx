
import styles from'./index.module.css';


function Footer (){

return(
    <div>
<div className={styles.backToTop}><p><a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}> Back to Top </a></p></div>
<div className={styles.footer}>
        <p>Created by Niloufar Feyz</p>
    </div>
    </div>
);
}




export default Footer;