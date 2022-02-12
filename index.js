const balaji = {
    pronouns: "He" | "Him",
    code: ["Javascript", "Python", "Java", "Swift", "PHP"],
    askMeAbout: ["web dev", "tech", "app dev", "photography"],
    technologies: {
        backEnd: {
            js: ["Node", "Fastify", "Express", "SuiteScript"],
        },
        mobileApp: {
            native: ["Android Development", "IOS Development"]
        },
        devOps: ["AWS", "Docker🐳", "Route53", "Nginx"],
        databases: ["mongo", "MySql", "sqlite"],
        misc: ["Firebase", "Socket.IO", "selenium", "open-cv", "php", "SuiteApp"]
    },
    architecture: ["Serverless Architecture", "Progressive web applications", "Single page applications"],
    currentFocus: "Ios Mobile App Development",
    funFact: "There are two ways to write error-free programs; only the third one works"
};

console.log(JSON.stringify(balaji))