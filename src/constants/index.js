import {
    mobile,
    backend,
    
    web,
    javascript,
    typescript,
    html,
    css,
    sql,
    sboot,
    reactjs,
    python,
    java,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,

    carrent,
    jobit,
    tripguide,
    au,
    sc,
    rbs,
    backflipt,
    stop,
    bws,
    oi,
    verzeo,
    hss,
    port3d,
    chatapp,
    port,
    mrp,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "education",
        title: "Education"
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },

];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "My SQL",
        icon: sql,
    },
    {
        name: "Spring Boot",
        icon: sboot,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },

];

const education = [
    {
        title: "BTech",
        name: "Andhra University College of Engineering",
        icon: au,
        iconBg: "#E6DEDD",
        date: "June 2019 - May 2023",
        points: [
            "Achieved a CGPA of 8.48 in my Bachelor of Technology(BTech) program."
        ]
    },
    {
        title: "Intermediate",
        name: "Sri Chaitanya Junior College",
        icon: sc,
        iconBg: "#383E56",
        date: "June 2017 - May 2019",
        points: [
            "Achieved a score of 97.9% in the Intermediate Examination.",
            "Additionally, I have earned a notable EAMCET rank of 659."
        ]
    },
    {
        title: "SSC",
        name: "Ravindra Bharathi School",
        icon: rbs,
        iconBg: "#E6DEDD",
        date: "Completed in May 2017",
        points: [
            "In my Secondary School Certificate(SSC) examination, I attained a perfect CGPA of 10.0"
        ]
    },
]

const experiences = [
    {
        title: "Full stack Developer Intern",
        company_name: "Backflipt",
        icon: backflipt,
        iconBg: "#E6DEDD",
        date: "January 2023 - March 2023",
        points: [
            "I am actively engaged in specialized training to augment my proficiency in the field of web development.",
            "This training program is enabling me to acquire valuable new skills and broaden my knowledge base in order to stay at the forefront of industry trends"
        ],
    },
    {
        title: "Data Science Intern",
        company_name: "1Stop.ai",
        icon: stop,
        iconBg: "#E6DEDD",
        date: "August 2022 - September 2022",
        points: [
            "I have undergone training on Data Science",
            "And I have successfully completed projects on Hierarchical Clustering and Linear Discriminant Analysis."
        ],
    },
    {
        title: "Full stack Developer Intern",
        company_name: "Business Web Solutions",
        icon: bws,
        iconBg: "#383E56",
        date: "June 2022 - August 2022",
        points: [
            "I have gone through several modules which are based upon HTML, CSS, JavaScript, ReactJS, Python etc.",
            "And I have successfully completed the Tasks and Projects which were assigned to me "
        ],
    },
    {
        title: "Web Development Intern",
        company_name: "Oasis InfoByte",
        icon: oi,
        iconBg: "#fff",
        date: "June 2022 - August 2022",
        points: [
            "I have upgraded my Web Development skills through this internship and successfully completed the tasks which are given to me."
        ],
    },
    {
        title: "Data Science Intern",
        company_name: "Verzeo",
        icon: verzeo,
        iconBg: "#fff",
        date: "December 2021 - January 2022",
        points: [
            "I have learnt new skills like Pandas, Python, NumPy etc. during the internship",
            "And I have successfully completed the major project regarding analysis of data in this internship."
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Chat App",
        description:
            "",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
        ],
        image: chatapp,
        source_code_link: "https://github.com/Lonewolf2k01",
    },
    {
        name: "Portfolio",
        description:
            "",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "react-hooks",
                color: "green-text-gradient",
            },
            {
                name: "emailjs",
                color: "pink-text-gradient",
            },
        ],
        image: port,
        source_code_link: "https://github.com/Lonewolf2k01",
    },
    {
        name: "Movie-Review App",
        description:
            "",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "springboot",
                color: "pink-text-gradient",
            },
        ],
        image: mrp,
        source_code_link: "https://github.com/Lonewolf2k01",
    },
    {
        name: "3d Portfolio",
        description:
            "",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "threejs",
                color: "green-text-gradient",
            },
            {
                name: "emailjs",
                color: "pink-text-gradient",
            },
        ],
        image: port3d,
        source_code_link: "https://github.com/Lonewolf2k01",
    },
    {
        name: "Home Surveillance System",
        description:
            "",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "pydrive",
                color: "green-text-gradient",
            },
            {
                name: "opencv",
                color: "pink-text-gradient",
            },
        ],
        image: hss,
        source_code_link: "https://github.com/Lonewolf2k01",
    },
];

export { services, technologies, education, experiences, testimonials, projects };