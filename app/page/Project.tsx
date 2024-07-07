import React from 'react'
import ProjectDetail from '../components/ProjectDetail';


const Project: React.FC = () => {
    return (
        <section id='project' className=' text-black dark:text-white bg-gray-400 dark:bg-gray-900 pb-5'>
            <div className='flex flex-col pt-16 mb-10 items-center'>
                <h5 className='bg-gray-300 dark:bg-gray-700 px-4 py-1 rounded-full mb-5 text-black dark:text-white'>Project</h5>
                <h4>Some of the noteworthy projects I have built:</h4>
            </div>

            <div className='container w-10/12 mb-8'>
                <ProjectDetail
                    projectName='Ecommerce Shop'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.'
                    skills={['Java', 'Next.js', 'Typescript', 'Spring Boot', 'Tailwind', 'MySQL']}
                    image='/Picture.png'
                    alt='project 3'
                    positionImage='left'
                    linkGitHub='sdadasdasd'
                    linkDemo='qwdqwdqwdqw' />
            </div>

            <div className='container w-10/12 mb-8'>
                <ProjectDetail
                    projectName='Technology Shop'
                    description='An e-commerce website with full basic CRUD (Create, Read, Update, Delete) functions. There is a payment function via PayPal.'
                    skills={['JavaScript', 'React', 'React-Bootstrap', 'Redux', 'Express', 'NodeJS', 'MongoDB']}
                    image='/Picture.png'
                    alt='project 2'
                    positionImage='right'
                    linkGitHub='https://github.com/TKhoa27/ProShop'
                    linkDemo='' />
            </div>

            <div className='container w-10/12 mb-8'>
                <ProjectDetail
                    projectName='Web Comic'
                    description='A fully functional story-reading website. New story collections are always updated. Users can search for stories and the display of suggestions about the most recently read stories.'
                    skills={['Laravel', 'Bootstrap', 'MySQL', 'HTML', 'CSS', "Javascript"]}
                    image='/Picture.png'
                    alt='project 1'
                    positionImage='left'
                    linkGitHub='https://github.com/TKhoa27/webComic'
                    linkDemo=''
                />
            </div>

        </section>
    )
}

export default Project;