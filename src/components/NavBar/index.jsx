import styles from'./index.module.css';




function NavBar (){
    return(
       
             <div className={styles.nav}>
    <div className={styles.newKala}>New Products</div>
    <div className={styles.navItem}>Home</div>
    <div className={styles.navItem}>Shop</div>
    <div className={styles.navItem}>Contact</div>
</div>

        
       
      
        
    )
}

export default NavBar;