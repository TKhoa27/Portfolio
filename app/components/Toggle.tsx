'use client'
import { useState } from 'react';
import TechIcon from './TechIcon';

const ToggleContent: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('skills');

    return (
        <section>
            <div className='flex text-black dark:text-white toggle justify-around'>
                <button
                    onClick={() => setActiveTab('skills')}
                    className={`${activeTab === 'skills' ? 'active' : ''} font-bold`}>Skills</button>
                <button
                    onClick={() => setActiveTab('education')}
                    className={`${activeTab === 'education' ? 'active' : ''} font-bold`}>Education</button>
            </div>

            <div>
                {/* Skills */}
                <div className={`content container ${activeTab === 'skills' ? 'active' : ''} justify-center`}>
                    <div className="text-black dark:text-white  ">
                        <div className='mt-4'>
                            <h3 className='text-center mb-6'>The skills, tools and technologies I am really good at</h3>
                            <div className='grid grid-cols-7'>
                                <TechIcon urlImage='/icon-javscript.png' text='JavaScript' alt='js' />
                                <TechIcon urlImage='/icon-typescript.png' text='Typescript' alt='typescript' />
                                <TechIcon urlImage='/java.png' text='Java' alt='java' />
                                <TechIcon urlImage='/icon-react.png' text='React' alt='react' />
                                <TechIcon urlImage='/icon-nextjs.png' text='Nextjs' alt='nextjs' />
                                <TechIcon urlImage='/icon-express.png' text='Express' alt='express' />
                                <TechIcon urlImage='/spring.png' text='Spring' alt='spring' />
                                <TechIcon urlImage='/icon-mongodb.png' text='Mongodb' alt='mongodb' />
                                <TechIcon urlImage='/icon-postgresql.png' text='Postgre' alt='postgresql' />
                                <TechIcon urlImage='/mysql.png' text='MySQL' alt='mysql' />
                                <TechIcon urlImage='/bootstrap.png' text='Bootstrap' alt='bootstrap' />
                                <TechIcon urlImage='/icon-tailwindcss.png' text='Tailwindcss' alt='tailwindcss' />
                                <TechIcon urlImage='/icon-sass.png' text='Sass/Scss' alt='sass' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className={`content container ${activeTab === 'education' ? 'active' : ''}`}>
                    <div className="text-black dark:text-white w-full">
                        <div className='mt-4 flex gap-44 items-center border-b-2 pb-4 text-center' >
                            <div className='w-1/4'>
                                <p>9/2019 - 12/2023</p>
                                <h5 className='font-semibold text-xl'>HUTECH UNIVERSITY</h5>
                            </div>
                            <p className='lineHeight4 w-2/4'>Bachelor, Software Engineering</p>
                            <p className='lineHeight4 w-1/4'>GPA: 3.14/4.0</p>
                        </div>

                        <div className='mt-4 flex gap-44 items-center border-b-2 pb-4 text-center'>
                            <div className='w-1/4'>
                                <p>12/2022 - 12/2027</p>
                            </div>
                            <p className='lineHeight4 w-2/4'>B1 Certificate in English</p>
                            <p className='lineHeight4 w-1/4'></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToggleContent;