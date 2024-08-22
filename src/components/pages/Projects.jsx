import React from 'react'

import camel_run from '../../assets/media/camel_run_demo.mp4'
import corporatea from '../../assets/media/corporatea-functionality-demo.mp4'
import msd_pdf from '../../assets/media/prevalence of msds.pdf'
import aerocade from '../../assets/media/aerocade_demo.mp4'

function Projects() {
  return (
    <div className='projects'>
        <h2>Projects and Research</h2>

            <ul>
                <li>
                    <h3>TikTok TechJam 2024: Ethical Consumption App</h3>
                    <p>
                        In this recent hackathon, I explored front-end development for a mobile app aimed at promoting 
                        ethical consumption. Using React Native, I crafted a responsive, user-friendly, and visually 
                        appealing interface to my team’s app, integrating various APIs to bring our vision to life. Working 
                        against the clock, we managed to create a fully functional prototype that we were proud to present. 
                        This experience really honed my ability to learn new concepts on the fly and work efficiently under 
                        pressure, and also reinforced the importance of clear communication in a fast-paced environment.
                    </p>
                    <video width="320" height="240" controls>
                        <source src={corporatea} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </li>

                <li>
                    <h3>Regeneron STEM Institute: Musculoskeletal Disorders and Psychology Research</h3>
                    <p>
                        At the Regeneron STEM Instituteat Yonkers Partners in Education, I investigated multiple different 
                        research directions, my favorite being the social intersections of musculoskeletal disorders. This 
                        project centered data science and analysis, while also championing collaboration, exchange, and 
                        discussion between our fellow researchers. The project culminated in presentations at several prestigious
                        competitions, including the Westlake Science Fair, Regeneron STS, and Regeneron WESEF, where I was honored 
                        to receive the Innovations in Biological Sciences Research Award in 2020. This experience not only expanded 
                        my research skills but also taught me the value of perseverance in scientific inquiry.
                    </p>
                    <iframe
                        src={`${msd_pdf}`}
                        width="100%"
                        height="300px"
                        style={{border: 'none'}}
                    >
                        This browser does not support PDFs. Please download the PDF to view it.
                    </iframe>
                </li>

                <li>
                    <h3>Civic Tech Hackathon: University Event Aggregator</h3>
                    <p>
                        This project was born from a common frustration among students--the challenge of keeping track of 
                        various campus events. Our team of four developed a web application that uses maps and timelines to 
                        consolidate academic and extracurricular events for universities and organizations. I dove into HTML, 
                        data configuration and MapBox navigation to configure my portion of the application. The experience 
                        taught me a lot about turning a simple idea into a practical solution, as well as navigating the 
                        difficulties of working in a team.
                    </p>
                </li>

                <li>
                    <h3>External Liaison Work with FFNUS</h3>
                    <p>During my exchange at the National University of Singapore (NUS), I was thrilled to join the External Liaison 
                        Team for Fossil Free NUS (FFNUS), where I've had the opportunity to engage in environmental advocacy. My role 
                        involves reaching out to various organizations in the cause, building connections, and promoting alternatives 
                        to fossil fuels. It's also been eye-opening to conduct research on student environmental preferences and future
                        goals, translating these findings into comprehensive reports. This experience has sharpened my communication 
                        skills and deepened my understanding of environmental issues in a university context (Please check out <a 
                        href="https://www.instagram.com/fossilfreenus/">FFNUS</a> as well as our larger organization,  
                        <a href="https://www.studentsforafossilfreefuture.org/" target="_blank" rel="noopener noreferrer">
                        Students for a Fossil Free Future</a>, if you're interested :)). 
                    </p>
                </li>
            </ul>

            <div>
                <h3>Game Development Projects</h3>
                <p>
                    My passion for coding often expresses itself through game development, where I've had the chance to collaborate
                    with talented teammates on some fun projects:
                </p>
                <ul>
                    <li>
                        <h3>Dinosaur Runner</h3>
                        <p>
                            Using PyGame, we created a fun running and obstacle-based game featuring dinosaurs. This 
                            project was a great way to apply my Python skills in a creative context, learning about game physics and 
                            user interaction along the way.
                        </p>
                        <video width="320" height="240" controls>
                            <source src={camel_run} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </li>
                    <li>
                        <h3>AeroCade Gaming System</h3>
                        <p>
                            In a different approach to game development, I worked on a command-line interface (CLI) 
                            based gaming system. This project includes classic games like Hangman and Tic Tac Toe, challenging us to 
                            create engaging gameplay experiences within the constraints of a text-based interface. It was a great 
                            exercise in logical thinking and user experience design, even without complex graphics.
                        </p>
                        <video width="320" height="240" controls>
                            <source src={aerocade} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </li>
                </ul>
                <p>
                    These projects have not only been enjoyable to work on but have also enhanced my problem-solving skills and 
                    ability to work effectively in team settings. They represent my interest in creating interactive, engaging 
                    experiences through code.
                </p>
            </div>  

    </div>
  )
}

export default Projects
