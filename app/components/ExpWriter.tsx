import React from "react";

interface ExpProps {
    companyName: string;
    position: string;
    time: string;
    description: string[];
}

const ExpWriter: React.FC<ExpProps> = ({ companyName, position, time, description }) => {
    return (
        <div className="flex justify-center border-2 border-black w-full">
            <div className="container grid grid-cols-4 my-5 ">
                <h4 className="ms-3">{companyName}</h4>

                <div className="col-span-2">
                    <h4 className="font-bold mb-3">{position}</h4>
                    <ul className="ms-5 tracking-wide">
                        {description.map((text, index) => (
                            <li key={index} className="list-disc">{text}</li>
                        ))}
                    </ul>
                </div>

                <p className="text-end leading-10">{time}</p>
            </div>
        </div>
    );
}

export default ExpWriter;