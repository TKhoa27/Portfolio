import React from 'react'
import ExpWriter from '../components/ExpWriter';


const Experience: React.FC = () => {
    return (
        <section id='experience' className='container text-black dark:text-white mb-20'>
            <div className='flex flex-col pt-16 mb-10 items-center'>
                <h5 className='bg-gray-300 dark:bg-gray-700 px-4 py-1 rounded-full mb-5 text-black dark:text-white'>Experience</h5>
                <h4>Here is a quick summary of my most recent experiences:</h4>
            </div>

            <div className='container w-4/5 mb-10'>
                <ExpWriter
                    companyName=''
                    position='Freelancer'
                    time='Jan 2024 - Present'
                    description={[
                        "Developed and maintained web applications using React and TypeScript.",
                        "Collaborated with cross-functional teams to define, design, and ship new features.",
                        "Wrote unit and integration tests to ensure code quality and reliability."]}
                />
            </div>

            <div className='container w-4/5 mb-10'>
                <ExpWriter
                    companyName='INDIVIDUALS SYSTEM'
                    position='JavaScript Developer Intern'
                    time='Aug 2023 - Oct 2023'
                    description={[
                        "Utilizing TypeScript along with React, HTML, and SCSS to design the chart interface for the rainwater measuring website.",
                        "Designing charts displaying rainfall using the Chart.js library",
                        "Connecting and utilizing MongoDB to store data.",
                        "Utilizing Redux Saga to manage side effects.",
                        "Utilizing Express for the backend and TypeScript as the language to design RESTful APIs.",
                        "Developing and optimizing features to improve performance."]}
                />
            </div>

            <div className='container w-4/5 mb-10'>
                <ExpWriter
                    companyName='AMAZING TECH'
                    position='Frontend Developer Intern'
                    time='Apr 2023 - July 2023'
                    description={[
                        "Utilizing JavaScript, HTML, and CSS combined with React to design the website interface.",
                        "Collaborating with the team leader and team members to provide solutions for identified issues.",
                        "Designing the game page interface including rewards, and implementing functionality to call APIs from the backend providing vouchers to users upon their first course purchase."
                    ]}
                />
            </div>
        </section>
    )
}

export default Experience;