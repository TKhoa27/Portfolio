import React from 'react'
import Link from 'next/link';


const Contact: React.FC = () => {
    return (
        <section id='contact' className='container text-black dark:text-white pb-10'>
            <div className='flex flex-col pt-16 mb-10 items-center'>
                <h5 className='bg-gray-300 dark:bg-gray-700 px-4 py-1 rounded-full mb-5 text-black dark:text-white'>Get in touch</h5>
                <p className='w-100 text-center'>What&apos;s next? Feel free to reach out to me if you&apos;re looking for
                    a developer, have a query, or simply want to connect.</p>
            </div>

            <div className="flex justify-center">
                {/* Facebook */}
                <Link href='https://www.facebook.com/?locale=vi_VN' className="me-4 p-1" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="34" height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-facebook">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                </Link >

                {/* Linkedln */}
                <Link href='https://www.linkedin.com/in/khoatieudev/' className="me-4 p-1" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="34" height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </Link >

                {/* GitHub */}
                <Link href='https://github.com/TKhoa27' className="me-4 p-1" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="34" height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </Link >
            </div>
        </section>
    )
}

export default Contact;