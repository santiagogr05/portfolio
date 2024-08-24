import styles from './Hero.Styles.module.css'
import heroImage from '../../assets/ProfilePicture-enhanced1.jpg'
import themeIcon from '../../assets/sun.svg'

function hero() {
  return (
  <section id='hero' className={styles.container}>
    <div className={styles.colorModeContainer}>

        <img className={styles.hero} src={heroImage} alt="Santty's profile picture" />
        <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" />

    </div>

    <div className={styles.info}>
        <h1>
        Santiago 
        <br />    
        Giraldo
        </h1>

    </div>

  </section>
  )
}

export default hero
