export const resumeData = {
    personalInfo: {
        name: "Mayank Vishwakarma",
        role: "Software Engineer – I [Frontend Developer]",
        location: "Vidisha, Madhya Pradesh 464001",
        phone: "+919522309192",
        email: "mayankvishwakarma.dev@email.com",
        links: {
            linkedin: "https://www.linkedin.com/in/mayank-vishwakarma-3b9476199", // Add actual link
            medium: "https://medium.com/@mayankvishwakarma.dev",   // Add actual link
            devCommunity: "https://dev.to/mayankvishwakarmadev", // Add actual link
            github: "https://github.com/MayankVishwakarmaDev", // Add actual link
        },
        experience: '2 Years 9 months',
        designation: "Software Engineer",
        initials: "MV",
        heroTags: ["Frontend", "Backend"],
        contactDescription: "Whether you have a question, a project idea, or just want to connect, feel free to reach out.",
        techStack: ["React.js", "Next.js", "Angular", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Shadcn", "Ant Design", "Material UI"],
        summary: "Frontend Developer with 2 years of experience specializing in React.js and modern frontend technologies. Skilled in building scalable, responsive, and high-performance web applications with React, TypeScript, HTML, CSS, and modern UI frameworks. Adept at creating reusable components, managing state efficiently, and delivering pixel-perfect designs with frameworks like Tailwind CSS, Shadcn, Ant Design, and Material UI. Strong collaborator with experience in Agile teams, committed to writing clean, secure, and maintainable code."
    },
    education: [
        {
            degree: "Bachelor of Technology: Computer Science Engineering",
            institution: "Truba Institute of Engineering & Information Technology, Bhopal [M. P.]",
            year: "2019-2023",
            grade: "CGPA: 7.67"
        }
    ],
    experience: [
        {
            company: "Promact Infotech Pvt. Ltd.",
            location: "Vadodara, Gujrat",
            role: "Software Engineer I – Frontend Developer",
            period: "Jan 2023 - Present",
            description: [
                "Designed and developed responsive UIs using React.js, Next.js, and Angular, following UX standards and best practices.",
                "Built reusable React components and implemented state management with Redux Toolkit to streamline development.",
                "Worked with modern UI frameworks including Tailwind CSS, Shadcn, Material UI, and Ant Design to deliver consistent, scalable design systems.",
                "Collaborated with designers and project managers under Agile methodologies, ensuring timely delivery of features.",
                "Ensured code quality, security, and maintainability by adhering to development guidelines and performing code reviews."
            ]
        }
    ],
    skills: {
        languages: ["JavaScript", "TypeScript", "HTML", "CSS", "SCSS"],
        frontend: ["React.js", "Next.js", "Redux Toolkit", "Angular"],
        backend: ["Node.js", "Express.js", "RESTful APIs"],
        database: ["PostgreSQL"],
        frameworks: ["Bootstrap", "Tailwind CSS", "Shadcn UI", "Material UI", "Ant Design"],
        tools: ["Git", "Postman", "VS Code", "GitHub", "Jira", "Azure DevOps"],
        softSkills: ["Problem-Solving", "Team Collaboration", "Communication", "Design Thinking", "Ownership"]
    },
    projects: [
        {
            title: "Naible - AI Tools Suite",
            description: "Developed a comprehensive AI tools platform offering multiple utilities in one place, including content generation, image creation, and voice assistant capabilities. Built unified interface for accessing diverse AI-powered tools.",
            responsibilities: [
                "Designed and implemented responsive frontend architecture for multiple AI tool interfaces",
                "Created consistent user experience across content writer, image generator, and voice assistant modules",
                "Integrated multiple AI service APIs for seamless tool functionality",
                "Implemented modular component structure for easy addition of new AI tools",
                "Ensured cross-browser compatibility and mobile responsiveness"
            ],
            impact: [
                "Unified 5+ AI tools into single cohesive platform",
                "Delivered intuitive interface for diverse AI functionalities",
                "Created reusable component library for rapid feature additions"
            ],
            technologies: ["React.js", "TypeScript", "Tailwind CSS", "RESTful APIs", "AI Service Integration"],
            link: null
        },
        {
            title: "AI-Powered Knowledge Management Platform (Q&A Bot Engine)",
            description: "Developed a comprehensive AI-powered chatbot platform enabling organizations to create customized dataspaces and deploy bots across multiple channels (Web, Teams, Slack, Voice). Built admin interface for managing dataspaces, bot configurations, and LLM model integrations.",
            responsibilities: [
                "Designed and implemented reusable React components for admin dashboard and bot interfaces",
                "Integrated RESTful APIs for real-time data synchronization and bot management",
                "Implemented React Router for seamless multi-page navigation",
                "Optimized component performance for handling large datasets and concurrent users",
                "Built analytics interface for tracking user interactions and token usage"
            ],
            impact: [
                "Built responsive interface supporting 4+ communication channels",
                "Delivered project on schedule with zero critical bugs",
                "Enabled multi-tenant dataspace management with role-based access"
            ],
            technologies: ["React.js", "React Router", "Python", "RESTful APIs", "Microsoft Login Integration"],
            link: null
        },
        {
            title: "Sustainable Agriculture Education Platform (Rize Farm)",
            company: "Promact Infotech",
            description: "Built a web platform to educate Southeast Asian farmers and policymakers on sustainable rice farming practices, climate change mitigation, and water conservation techniques including AWD and DSR methodologies.",
            responsibilities: [
                "Implemented state management using React hooks and Redux for complex data flows",
                "Developed reusable UI components ensuring consistency across 15+ pages",
                "Integrated backend APIs for fetching educational content and user submissions",
                "Optimized performance for low-bandwidth rural internet connections",
                "Created interactive components for farming technique demonstrations"
            ],
            impact: [
                "Delivered responsive interface accessible on desktop and mobile devices",
                "Reduced page load time by 35% through code splitting and lazy loading",
                "Successfully deployed application serving agricultural education content across Southeast Asia"
            ],
            technologies: ["React.js", "Redux", "React Router", "Responsive Design", "Performance Optimization"],
            link: null
        },
        {
            title: "Customer Success Platform (CSP) - Internal Project",
            company: "Promact Infotech",
            description: "Built an internal project management tool for storing project information, sprint details, communications, and risk management. Created comprehensive frontend with advanced theming and responsive design capabilities.",
            responsibilities: [
                "Designed and implemented complete frontend from scratch using design thinking principles",
                "Created dual theme system (light/dark mode) with persistent user preferences",
                "Built fully responsive mobile-first design for on-the-go project management",
                "Developed components for sprint planning, project tracking, and risk assessment",
                "Implemented real-time communication features for team collaboration"
            ],
            impact: [
                "Delivered fully functional internal tool used across company",
                "Achieved seamless mobile experience for field team access",
                "Created intuitive dark mode reducing eye strain for extended use"
            ],
            technologies: ["React.js", "Context API/Redux", "Tailwind CSS", "Responsive Design", "Theme Management"],
            link: null
        },
        {
            title: "RFP Generator - Internal Tool",
            company: "Promact Infotech",
            description: "Developed an internal company tool for creating and managing Request for Proposals (RFPs) for client projects. Designed complete UI/UX independently using design thinking methodology without provided mockups.",
            responsibilities: [
                "Conceptualized and designed entire user interface using design thinking approach",
                "Built intuitive RFP creation workflow with multi-step forms and templates",
                "Implemented document generation and export functionality",
                "Created responsive layouts for desktop and tablet devices",
                "Developed reusable form components and validation logic"
            ],
            impact: [
                "Streamlined RFP creation process, reducing time from 2 days to 4 hours",
                "Delivered self-designed UI praised for usability and efficiency",
                "Created standardized RFP templates used company-wide"
            ],
            technologies: ["React.js", "Form Management", "Document Generation", "Self-Designed UI/UX"],
            link: null
        },
        {
            title: "Intern Training & Assessment Platform (Trainer AI)",
            company: "Promact Infotech",
            period: "Sep 2023 - Oct 2023",
            description: "Developed a web application providing interactive training modules, automated assessments, and personalized feedback for intern onboarding and skill development.",
            responsibilities: [
                "Built responsive and intuitive UI using Angular with mobile-first approach",
                "Ensured cross-device compatibility through responsive design techniques",
                "Collaborated with backend team to align frontend design with API requirements",
                "Implemented assessment interface with real-time scoring and progress tracking",
                "Created interactive training module components"
            ],
            impact: [
                "Streamlined intern training process with automated evaluation system",
                "Enhanced user experience through iterative feedback and design improvements",
                "Reduced training coordinator workload by 50% through automation"
            ],
            technologies: ["Angular", ".NET", "C#", "PostgreSQL"],
            link: null
        },
        {
            title: "AI Sales Assistant Chatbot",
            company: "Promact Infotech",
            period: "Aug 2023 - Sep 2023",
            description: "Built an AI-powered chatbot to enhance customer support, improve engagement, and increase sales through intelligent product recommendations and addressing customer pain points.",
            responsibilities: [
                "Developed responsive UI using vanilla JavaScript, HTML5, and CSS3",
                "Integrated RESTful APIs for real-time chat interactions and data processing",
                "Collaborated with backend developers for seamless API integration",
                "Implemented chat interface with typing indicators and message history",
                "Created custom CSS animations for improved user engagement"
            ],
            impact: [
                "Delivered intuitive chat interface supporting real-time conversations",
                "Ensured cross-browser compatibility across Chrome, Firefox, and Safari",
                "Completed project 1 week ahead of deadline"
            ],
            technologies: ["JavaScript", "HTML5", "CSS3", "Python", "RESTful APIs"],
            link: null
        },
        {
            title: "Business Intelligence Platform (Saturn)",
            company: "Promact Infotech",
            period: "Jul 2023 - Aug 2023",
            description: "Enhanced a business intelligence platform designed to identify concern areas within SMEs and provide systematic solutions for business growth and expansion.",
            responsibilities: [
                "Enhanced frontend UI/UX for improved user experience and accessibility",
                "Integrated Microsoft Bot Framework chatbot for automated business insights",
                "Conducted testing and optimization to ensure feature stability",
                "Implemented responsive design patterns for cross-device compatibility"
            ],
            impact: [
                "Improved UI responsiveness and user engagement metrics",
                "Successfully integrated chatbot functionality with existing platform",
                "Maintained code quality standards throughout development cycle"
            ],
            technologies: ["Angular", ".NET", "C#", "ABP.IO Web API", "PostgreSQL", "Microsoft Bot Framework"],
            link: null
        },
        {
            title: "Real-Time Chat Application",
            type: "Personal Project",
            period: "2023",
            description: "Created a WebSocket-based real-time messaging web application using Node.js and Express to practice Socket.IO library implementation and full-stack development.",
            responsibilities: [
                "Implemented real-time bidirectional communication using Socket.IO",
                "Built chat interface with message history and user presence indicators",
                "Developed RESTful API for user authentication and message storage",
                "Created room-based messaging functionality"
            ],
            impact: [
                "Successfully implemented WebSocket technology for real-time features",
                "Built scalable architecture supporting 50+ concurrent users",
                "Demonstrated full-stack development capabilities"
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "Socket.IO"],
            link: "https://github.com/MayankVishwakarmaDev/MyChatApp"
        }
    ],
    publications: [
        {
            title: "Creating a React Alert Component with Custom Hooks and Context",
            platform: "Dev Community / Medium",
            link: "https://dev.to/mayankvishwakarmadev/building-an-alert-provider-in-react-using-context-and-custom-hooks-m46"
        },
        {
            title: "Using the React Context API to Create a Loader Component",
            platform: "Dev Community / Medium",
            link: "https://dev.to/mayankvishwakarmadev/using-the-react-context-api-to-create-a-loader-component-3le4"
        },
        {
            title: "Simplifying React Router Query Parameter Management with Custom Hooks",
            platform: "Dev Community / Medium",
            link: "https://dev.to/mayankvishwakarmadev/simplifying-react-router-query-parameter-management-with-custom-hooks-2cad"
        },
        {
            title: "Build a Production-Ready React Data Fetching Hook with TypeScript",
            platform: "Dev Community / Medium",
            link: "https://dev.to/mayankvishwakarmadev/build-a-production-ready-react-data-fetching-hook-with-typescript-2bma"
        }
    ]
};
