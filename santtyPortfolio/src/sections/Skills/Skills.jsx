import styles from './SkillStyles.module.css'
import java from '../../assets/java.png'
import springBoot from '../../assets/springBoot.png'
import dataBase from '../../assets/dataBase.png'
import git from '../../assets/git.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import api from '../../assets/api.png'
import { useTheme } from '../../common/Theme.context'
import SkillList from '../../common/SkillList';

function Skills() {

    const { theme } = useTheme();

    // const javaIcon = theme === 'light' ? javaLight : javaDark;

  return (

    <section id='skills' className={styles.container}>
        
        <h1>Skills</h1>

        <div className={styles.skillList}>

            <SkillList 
            src={java}
            skill="Java"            
            />

            <SkillList 
            src={springBoot}
            skill="Spring-Boot"
            />

            <SkillList 
            src={dataBase}
            skill="SQL"
            />

            <SkillList 
            src={git}
            skill="Git"
            />

            <SkillList  
            src={api}
            skill="RESTful"
            />
        </div>

        <hr />

        <div className={styles.skillList}>

            <SkillList 
            src={html}
            skill="HTML"
            />

            <SkillList 
            src={css}
            skill="CSS"
            />

        </div>

    </section    >
  )
}

export default Skills