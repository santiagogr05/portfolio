import React from 'react'
import styles from './ProjectsStyles.module.css'
import guessy from '../../../assets/guessy.jpg'
import ProjectCard from '../../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        
        <h1 className={styles.sectionTitle}>Projects</h1>

        <div className={styles.projectsContainer}>
            <ProjectCard src={guessy} 
            link={"https://github.com/santiagogr05/Guessy"} 
            h3={"Guessy"}
            p={"Number guessing app"}
            />
        </div>


    </section>
  )
}

export default Projects