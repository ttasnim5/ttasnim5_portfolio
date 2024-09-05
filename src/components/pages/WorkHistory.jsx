import React from 'react'
import WorkExperiences from '../WorkExperiences.jsx'
import Border from '../Border.jsx'

function WorkHistory() {
    const workExperiences = [
        {
            title: "Yonkers Health Corp - Technology Intern",
            description: `My internship at Yonkers Health Corp was all about learning and overcoming challenges. My task was to 
                transform the company's backend in different ways to enhance their online healthcare portal. Using PostgreSQL, 
                ExpressJS, React, Postman, among other tools, I prototyped alternatives to their low-code model.

                I had to develop serious prioritization skills due to the time constraints and limited support of the position,
                but I still improved backend independence significantly. The experience particularly honed both my technical 
                skills and business acumen. I dealt with API integration, learned to translate business needs into technical 
                solutions, and developed crucial independent learning skills. While not all my ideas were implemented, I had 
                a wonderful time learning and working with my team, and the experience has definitely laid a solid foundation 
                for my future in tech and beyond.
            `
        }, {
            title: "Event Operations Assistant - Boston University Dance Theatre",
            description: `In my event management role, I've learned many diverse skills. I handle reservations and patron 
            assistance with precision, collaborate seamlessly with multiple partners and partner organizations, and provide 
            support for attendees with accessibility needs. These experiences have sharpened my communication, adaptability, 
            and problem-solving abilities, so I can guarantee smooth operations and inclusive experiences for everyone.`
        },
        {
            title: "Fitness Factory - Front Desk Representative",
            description: `My time at Fitness Factory was all about creating a welcoming environment for clients. I was the 
                first face people saw when entering, so I made sure to greet everyone with a smile and enthusiasm. 
                Whether it was helping a new member navigate our payment system, giving a tour to a prospective client, 
                or ensuring all the equipment’s functionality, I wore many hats. This role taught me the importance of 
                multitasking and maintaining a positive attitude, even during busy periods.
            `
        },
        {
            title: "Yonkers Partners in Education - Summer Programs Facilitator",
            description: `This work experience was all about community engagement and STEM education. As the 
                director of the Regeneron STEM Program, I had the chance to guide budding researchers, helping them 
                refine their plans and connecting them with mentors in various fields. It was incredibly rewarding to 
                see their projects take shape and their confidence grow, especially amidst the COVID-19 pandemic when 
                education unwittingly came to a halt.
                I also co-facilitated the Yonkers-Zone city-wide research project, which was a crash course in project 
                management for me. Coordinating 20 volunteers, planning weekly agendas, and collaborating with partner 
                organizations taught me valuable lessons in leadership and organization, especially when plans fell 
                through and needed reimagining.
            `
        },
        {
            title: "Fenway Dining, Boston University - Service Representative",
            description: `Working in university dining was a fast-paced adventure in both food service and logistics. I got to flex
                my organizational muscles by arranging recipes and meal plans on a 5-week cycle. The post-production 
                analysis and inventory work gave me insight into the behind-the-scenes operations of a large-scale 
                dining facility, in addition to the hard work at the front of house. This job really honed my ability 
                to communicate and work efficiently with others under pressure.
            `
        },
        {
            title: "Charles E. Shain Library, Linda Lear Center - Student Archivist",
            description: `As a student archivist, I had the unique opportunity to touch history every day. Organizing and 
                digitizing historical collections was like solving a puzzle, piecing together the past for future 
                researchers. I particularly enjoyed the detective work involved in helping researchers find exactly what
                they needed. This role taught me the value of patience, attention to detail, and the importance of 
                preserving our shared history.
            `
        }
    ]
    
  return (
    <div className='work'>
        <h2>Work Experiences</h2>
        <Border />
        <WorkExperiences experiences={workExperiences} />

        <p>
            Each of these experiences has contributed to my growth, teaching me valuable skills in customer service, project
            management, communication, and organization. They've shown me how to adapt to different environments and have 
            reinforced my belief in the importance of collaboration and continuous learning.
        </p>
    </div>
  )
}

export default WorkHistory
