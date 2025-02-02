'use client'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex container p-11 mb-10 pt-32">
      <div className="resume w-2/3">
        <div className="introduce text-white">
          <h1 className="font-semibold text-black dark:text-white">Hi,  Khoa Tiêu</h1>
          <TypeAnimation
            sequence={[
              "Seeking an entry-level position employment where I can develop my available abilities as a Front-end developer specializing in React. My expertise includes working with Typescript, Redux, Redux Saga, Bootstrap, and MongoDB. I am eager to continue learning and am seeking a dynamic work environment where I can further enhancemy skills and make valuable contributions.",
            ]}
            wrapper="p"
            speed={80}
            style={{ display: 'inline-block' }}
            className="text-black dark:text-white"
            cursor={false}
          />
        </div>

        <div className="social text-black dark:text-white mt-12">
          {/* Email */}
          <div className="flex text-lg">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-mail">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <p className="ms-3"><a href="mailto:tieukhoa.dev@gmail.com">tieukhoa.dev@gmail.com</a></p>
          </div>

          {/* Phone */}
          <div className="flex mt-3 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-phone">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <p className="ms-4">032.9999.515</p>
          </div>

          {/* Social */}
          <div className="flex mt-9">
            {/* Facebook */}
            <Link href='https://www.facebook.com/?locale=vi_VN' className="me-4 p-1 " target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
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
            <Link href='https://www.linkedin.com/in/khoatieudev/' className="me-4 p-1 " target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
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
            <Link href='https://github.com/TKhoa27' className="me-4 p-1 " target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
        </div>
      </div>

      <div className="personal-image ms-44 mt-4">
        <Image src="/logo.jpg" priority alt="image" width={250} height={400} />
      </div>
    </section>
  );
}
