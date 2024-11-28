    import { FaPhone, FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
    import pp from "../assets/pfp.jpg";

    const Profile = () => {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 py-10 px-4">
                <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="flex flex-col items-center bg-blue-500 text-white py-6 px-4">
                        <img
                            src={pp}
                            alt="Profile"
                            className="w-24 h-24 rounded-full border-4 border-white mb-3 hover:scale-105 transform transition-transform duration-300"
                        />
                        <h1 className="text-2xl font-bold">Haifazahra Irawan</h1>
                        <p className="text-sm opacity-90">Fresh Graduate in Software Development</p>
                    </div>
                    <div className="p-6">
                        <section className="mb-6">
                            <h2 className="text-xl font-semibold mb-3">Contact</h2>
                            <div className="space-y-3">
                                <div className="flex items-center text-gray-700">
                                    <FaPhone className="mr-3 text-blue-500" />
                                    <span>+62 821-1950-9380</span>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <FaEnvelope className="mr-3 text-red-500" />
                                    <span>haifazaahra@gmail.com</span>
                                </div>
                                <div className="flex items-center text-gray-700">
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
                                <div className="flex items-center text-gray-700">
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
                                <div className="flex items-center text-gray-700">
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
                            <h2 className="text-xl font-semibold mb-3">About Me</h2>
                            <p className="text-gray-700 leading-relaxed">
                                I am a fresh graduate passionate about software development. 
                                I have worked on various projects that showcase my problem-solving skills 
                                and ability to work in a team. Ready to make an impact in the tech industry.
                            </p>
                        </section>
                        <section>
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Education
        </h2>
        <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
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
            {["HTML & CSS", "JavaScript", "PHP", "Bootstrap", "MySQL", "Git & GitHub", "Laravel", "C#", "Figma"].map((skill, index) => (
                <div
                    key={index}
                    className="p-2 bg-blue-50 rounded-lg text-center shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105"
                >
                    {skill}
                </div>
            ))}
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-800">Soft Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            {["Team Collaboration", "Problem Solving", "Adaptability", "Time Management", "Behave Honestly", "Critical Thinking"].map((skill, index) => (
                <div
                    key={index}
                    className="p-2 bg-blue-50 rounded-lg text-center shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105"
                >
                    {skill}
                </div>
            ))}
        </div>
    </section>

    <section>
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
            Experience
        </h2>
        <div className="space-y-4">
            {[
                {
                    title: "Marketplace Development",
                    date: "Personal Project | 2024",
                    tasks: [
                        "Built an online marketplace platform using HTML, CSS, and JavaScript.",
                        "Integrated user authentication, product listing, and checkout functionality.",
                    ],
                },
                {
                    title: "Student Attendance System",
                    date: "Personal Project | 2023",
                    tasks: [
                        "Developed a web-based system for tracking student attendance.",
                        "Implemented features like automated reporting and real-time notifications.",
                        "Used PHP and MySQL for backend operations.",
                    ],
                },
                {
                    title: "To-Do List Application",
                    date: "Personal Project | 2024",
                    tasks: [
                        "Created a simple to-do list application using Laravel.",
                        "Included functionality for adding, editing, and deleting tasks.",
                        "Focused on user-friendly design and functionality.",
                    ],
                },
                {
                    title: "Library Management System",
                    date: "Personal Project | 2024",
                    tasks: [
                        "Designed a digital system for managing library books.",
                        "Integrated search and book borrowing/return features.",
                        "Used PHP and MySQL for backend and Bootstrap for the frontend.",
                    ],
                },
                {
                    title: "Tracer Study Application",
                    date: "School Project (Team of 3) | 2024",
                    tasks: [
                        "Collaborated in a team of three to develop a tracer study application for tracking alumni career paths.",
                        "Used Laravel for the backend and Bootstrap for the frontend to ensure responsiveness and usability.",
                        "Implemented data visualization features for survey results using Chart.js.",
                        "Integrated authentication for secure access by alumni and administrators.",
                    ],
                },
                {
                    title: "UI/UX Design for Marketplace Website",
                    date: "School Project | 2023",
                    tasks: [
                        "Designed wireframes and prototypes for an online marketplace using Figma.",
                        "Focused on enhancing user experience by implementing intuitive navigation and responsive design principles.",
                        "Collaborated with a team to finalize UI/UX components aligned with user requirements.",
                        "Conducted usability testing and made iterative improvements based on user feedback.",
                    ],
                },
            ].map((project, index) => (
                <div
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
                >
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.date}</p>
                    <ul className="list-disc list-inside text-gray-700">
                        {project.tasks.map((task, taskIndex) => (
                            <li key={taskIndex}>{task}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </section>

                    </div>
                </div>
            </div>
        );
    };

    export default Profile;