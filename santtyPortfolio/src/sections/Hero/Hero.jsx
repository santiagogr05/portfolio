import styles from './Hero.Styles.module.css'
import heroImage from '../../assets/ProfilePicture.jpg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moonp.png'
import twitterLight from '../../assets/twitterLight.svg'
import twitterDark from '../../assets/twitterDark.svg'
import githubLight from '../../assets/githubLight.svg'
import githubDark from '../../assets/githubDark.svg'
import linkedinLight from '../../assets/linkedinLight.svg'
import linkedinDark from '../../assets/linkedinDark.svg'
import CV from '../../assets/CV-SGR-spanish.pdf'
import { useTheme } from '../../common/Theme.context'


function hero() {

  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
  <section id='hero' className={styles.container}>

    <div className={styles.colorModeContainer}>

        <img className={styles.hero} src={heroImage} alt="Santty's profile picture" />

        <img className={styles.colorMode} 
        src={themeIcon} 
        alt="Color mode icon"
        onClick={toggleTheme}
        
        />



    </div>

    <div className={styles.info}>
        <h1>
        Santiago 
        <br />    
        Giraldo
        </h1>
        <h2>Backend Developer</h2>
        <span>
            <a href="https://twitter.com" target='_blank'>
              <img src={twitterIcon} alt="Twitter Icon"/>
            </a>
            <a href="https://github.com/santiagogr05" target='_blank'>
              <img src={githubIcon} alt="GitHub Icon"/>
            </a>
            <a href="https://www.linkedin.com/in/santiago-giraldo-ramírez/" target='_blank' >
              <img src={linkedinIcon} alt="LinkedIn Icon"/>
            </a>
        </span>

        <p className={styles.description}>
        Passionate systems engineering student dedicated to continuous learning, programming, and personal growth, eager to develop innovative solutions that make a difference.
        </p>
        <a href={CV} target='_blank' download>
          <button className='hover' >
            Resume
          </button>
        </a>

    </div>

  </section>
  )
}

export default hero
