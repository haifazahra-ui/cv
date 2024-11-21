import { FaPhone, FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import pp from "../assets/pfp.jpg";

const Profile = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
            <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-col items-center bg-blue-100 p-6">
                    <img
                        alt="Profile"
                        src={pp}
                        className="w-32 h-32 mb-4 rounded-full border-4 border-white shadow-lg"
                    />
                    <h1 className="text-3xl font-bold text-gray-900">Haifazahra Irawan</h1>
                    <span className="text-lg text-gray-700">Fresh Graduate in Software Development</span>
                </div>
                <div className="p-6 space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
                            Contact
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center">
                                <FaPhone className="mr-3 text-blue-500" />
                                <span className="text-gray-700">+62 821-1950-9380</span>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="mr-3 text-red-500" />
                                <span className="text-gray-700">haifazaahra@gmail.com</span>
                            </div>
                            <div className="flex items-center">
                                <FaLinkedin className="mr-3 text-blue-700" />
                                <a
                                    href="https://linkedin.com/in/haifazahra"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    linkedin.com/in/haifazahra
                                </a>
                            </div>
                            <div className="flex items-center">
                                <FaGithub className="mr-3 text-gray-800" />
                                <a
                                    href="https://github.com/haifazahra-ui"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    github.com/haifazahra-ui
                                </a>
                            </div>
                            <div className="flex items-center">
                                <FaInstagram className="mr-3 text-pink-500" />
                                <a
                                    href="https://instagram.com/haarleeeyyy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    instagram.com/haarleeeyyy
                                </a>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
                            About Me
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            I am a fresh graduate passionate about software development. 
                            During my education, I have worked on various academic and freelance projects,
                            showcasing my ability to solve problems, learn quickly, and contribute effectively 
                            to team goals. I am excited to bring my skills to the professional world.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
                            Education
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-bold">Vocational SMK PRAKARYA INTERNATIONAL High School</h3>
                                <p className="text-sm text-gray-500">Software Engineering | Graduated: June 2026</p>
                                <p className="text-gray-700">
                                    Completed a specialized curriculum in software engineering, including web development, 
                                    database management, and programming in multiple languages.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
                            Skills
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                            <div>HTML & CSS</div>
                            <div>JavaScript</div>
                            <div>PHP</div>
                            <div>Bootstrap</div>
                            <div>MySQL</div>
                            <div>Git & GitHub</div>
                            <div>Laravel</div>
                            <div>C#</div>
                            <div>Figma</div>
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-gray-800">Soft Skills</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                            <div>Team Collaboration</div>
                            <div>Problem Solving</div>
                            <div>Adaptability</div>
                            <div>Time Management</div>
                            <div>ehave honestly</div>
                            <div>Critical Thinking</div>
                        </div>
                    </section>
                    <section>
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
        Experience
        </h2>
            <div className="space-y-4">
            <div>
                <h3 className="text-xl font-bold">Marketplace Development</h3>
                <p className="text-sm text-gray-500">Personal Project | 2024</p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Built an online marketplace platform using HTML, CSS, and JavaScript.</li>
                    <li>Integrated user authentication, product listing, and checkout functionality.</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-bold">Student Attendance System</h3>
                <p className="text-sm text-gray-500">Personal Project | 2023</p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Developed a web-based system for tracking student attendance.</li>
                    <li>Implemented features like automated reporting and real-time notifications.</li>
                    <li>Used PHP and MySQL for backend operations.</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-bold">To-Do List Application</h3>
                <p className="text-sm text-gray-500">Personal Project | 2024</p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Created a simple to-do list application using Laravel.</li>
                    <li>Included functionality for adding, editing, and deleting tasks.</li>
                    <li>Focused on user-friendly design and functionality.</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-bold">Library Management System</h3>
                <p className="text-sm text-gray-500">Personal Project | 2024</p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Designed a digital system for managing library books.</li>
                    <li>Integrated search and book borrowing/return features.</li>
                    <li>Used PHP and MySQL for backend and Bootstrap for the frontend.</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-bold">Tracer Study Application</h3>
                <p className="text-sm text-gray-500">School Project (Team of 3) | 2024</p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Collaborated in a team of three to develop a tracer study application for tracking alumni career paths.</li>
                    <li>Used Laravel for the backend and Bootstrap for the frontend to ensure responsiveness and usability.</li>
                    <li>Implemented data visualization features for survey results using Chart.js.</li>
                    <li>Integrated authentication for secure access by alumni and administrators.</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-bold">UI/UX Design for Marketplace Website</h3>
                <p className="text-sm text-gray-500">School Project | 2023</p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Designed wireframes and prototypes for an online marketplace using Figma.</li>
                    <li>Focused on enhancing user experience by implementing intuitive navigation and responsive design principles.</li>
                    <li>Collaborated with a team to finalize UI/UX components aligned with user requirements.</li>
                    <li>Conducted usability testing and made iterative improvements based on user feedback.</li>
                </ul>
            </div>
        </div>
    </section>

                    </div>
                </div>
            </div>
        );
    };

export default Profile;
