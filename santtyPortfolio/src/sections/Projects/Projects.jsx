import React from 'react'
import styles from './ProjectsStyles.module.css'
import guessy from '../../assets/guessy.jpg'
import daWorkshop from '../../assets/daWorkshop.jpg'
import something from '../../assets/something.jpg'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        
        <h1 className={styles.sectionTitle}>Projects</h1>

        <div className={styles.projectsContainer}>
            
            <ProjectCard src={daWorkshop} 
            link={"https://github.com/santiagogr05"} 
            h3={"Da Workshop"}
            p={"Management system for Workshops"}
            />

            <ProjectCard src={guessy} 
            link={"https://github.com/santiagogr05/Guessy"} 
            h3={"Guessy"}
            p={"Number guessing app"}
            />

            <ProjectCard src={something} 
            link={"https://github.com/santiagogr05"} 
            h3={"Something"}
            p={"A random empty project for fulfill the space by now"}
            />

            <ProjectCard src={something} 
            link={"https://github.com/santiagogr05"} 
            h3={"Something"}
            p={"A random empty project for fulfill the space by now"}
            />
            
        </div>


    </section>
  )
}

export default Projects