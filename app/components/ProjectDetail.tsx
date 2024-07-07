import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectProps {
    projectName: string;
    description: string;
    skills: string[];
    image: string;
    positionImage: string;
    linkGitHub: string;
    linkDemo?: string;
    alt: string;
}

const ProjectDetail: React.FC<ProjectProps> = ({ projectName, description, skills, image, positionImage, linkGitHub, linkDemo, alt }) => {
    return (
        <div className="grid grid-cols-2 ">
            <div className={`bg-slate-300 flex justify-center items-center pt-4 rounded-l-2xl
                ${positionImage && positionImage === 'right' ? 'order-2 rounded-r-2xl rounded-l-none' : 'order-1 '}`}>
                <Image
                    src={image}
                    width={400}
                    height={300}
                    style={{ objectFit: "contain" }}
                    alt={alt}
                />
            </div>

            <div className={` bg-slate-400 px-8 pt-6 rounded-r-2xl
                ${positionImage === 'right' ? 'order-1 rounded-l-2xl rounded-r-none' : 'order-2 '}`}>
                <h4 className="mb-2 font-bold">{projectName}</h4>
                <p className="mb-2">{description}</p>
                <div className="w-full flex flex-wrap gap-y-1">
                    {skills.map((skill, index) => (
                        <span className="py-1 px-5 rounded-2xl bg-slate-300 dark:bg-slate-600 me-2 mt-1" key={index}>{skill}</span>
                    ))}
                </div>

                <p className="mt-3">
                    <Link href={linkGitHub} className="text-blue-500">GitHub Link</Link>
                </p>
                {linkDemo &&
                    <p className="mt-1">
                        <Link href={linkDemo} className="text-blue-500 ">Demo Project</Link>
                    </p>
                }
            </div>
        </div >

    );
}

export default ProjectDetail;