import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Amine Maalej",
  title: "Hello, I'm Amine",
  subTitle: emoji(
    "A passionate Infrastructure engineer 🚀 experienced in DevOps, SRE and Cloud Security."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1YwDWWd_DlhGTJalVJQUFlufK9o4cMh1B/view?usp=drive_link",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Aminemaalej",
  linkedin: "https://www.linkedin.com/in/amine-maalej/",
  gmail: "aminemaalej96@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What do I do",
  subTitle: "Automate stuff and make sure servers are healthy and happy",
  skills: [
    emoji(
      "⚡ orchestrates the symphony of code, infrastructure, and automation to create harmony in the tech universe."
    ),
    emoji("⚡ uses the power of automation and resilience to keep systems dancing smoothly through the chaos of the digital realm."),
    emoji(
      "⚡ builds strong defenses in the cloud to protect data from cyber threats."
    )
  ],

  /*https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Github Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fab fa-terraform"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fab fa-kubernetes"
    },
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Sherbrooke",
      logo: require("./assets/images/udesLogo.png"),
      subHeader: "Specialized Graduate Studies Diploma in Computer Science",
      duration: "January 2021 - December 2021",
      desc: "GPA 3.72/4.3.",
      descBullets: [
        "Deep Learning",
        "Cyber Security"
      ]
    },
    {
      schoolName: "International Institute of Technology",
      logo: require("./assets/images/iitLogo.png"),
      subHeader: "Bachelor degree in Software engineering",
      duration: "September 2017 - May 2019",
      desc: "Ranked top 1 in the program. GPA 17.37/20",
      descBullets: ["Software Development", "Cloud Computing"]
    }
  ]
};


const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DevOps",
      progressPercentage: "90%"
    },
    {
      Stack: "SRE",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud Security",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Freedom of Dev",
      companylogo: require("./assets/images/fodLogo.png"),
      date: "January 2020 – December 2020",
      location: "Sfax, Tunisia - On-site",
      desc: "Freedom Of Dev Services (FOD) are experts in nearshore and offshore software development for leading business organizations across a range of industries.",
      descBullets: [
        "Full Stack Development using Spring Boot and React",
        "Machine Learning model optimization using PyTorch",
        "Product deployment in AWS"
      ]
    },
    {
      role: "Infrastructure Engineer",
      company: "Rewind",
      companylogo: require("./assets/images/rewindLogo.png"),
      date: "January 2022 – March 2023",
      location : "Ottawa, Ontario - Hybrid",
      desc: "Rewind is an on-demand backup & restoration for people who manage data security and business continuity.",
      descBullets: [
        "Maintain AWS cloud environment using Terraform",
        "On-call engineer leading production incident response and postmortem analysis",
        "Automate manual procedures and increase developers productivity"
      ]
    },
    {
      role: "Infrastructure Engineer",
      company: "Recollective",
      companylogo: require("./assets/images/recollectiveLogo.png"),
      date: "April 2023 – Present",
      location: "Ottawa, Ontario - Hybrid",
      desc: "Recollective is the ultimate qualitative research platform with a simple mission: to help you conduct your research, your way.",
      descBullets: [
        "Maintain AWS cloud environment using CDK Typescript",
        "Enhance system observability and address findings to achieve successful SOC2 Type 1 compliance.",
        "Implement DevSecOps best practices and guide developers on cloud security."
      ]
    },
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "Most valuable contributions",
  projects: [
    {
      image: require("./assets/images/skill.svg"),
      projectName: "aaa",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: false
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  achievementsCards: [
    {
      title: "AWS Certified Developer – Associate",
      image: require("./assets/images/awsdev.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/f9798369-ff2b-4680-9bdc-db426c63a1e1/linked_in_profile"
        },
      ]
    },
    {
      title: "AWS Certified SysOps Administrator – Associate",
      image: require("./assets/images/awssysops.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/61dcd04e-f6cd-41c4-b833-905b5186e742/linked_in_profile"
        }
      ]
    },

    {
      title: "AWS Certified Solutions Architect – Associate",
      image: require("./assets/images/awssaa.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/622bddbd-93a3-4f18-ac75-16208058bd37/linked_in_profile"
        },
      ]
    },
    {
      title: "Linux Essentials Certification",
      image: require("./assets/images/linux.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://cs.lpi.org/caf/Xamman/certification/verify/LPI000577607/w8mx63l3fr"
        },
      ]
    },
    {
      title: "HashiCorp Certified : Terraform Associate",
      image: require("./assets/images/terraform.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/dc1d0375-cab2-4158-a955-ac1e92bdc57b/linked_in_profile"
        },
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs 📝",
  subtitle:
    "I love writing about technology",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://rewind.com/blog/teaching-terraform-volunteer/",
      title: "Teaching Terraform: How I used my volunteer day",
      description:
        "In this article, I went through how I used my volunteer day at Rewind to teach students at my alumni university (IIT) Infrastructure as Code"
    },
  ],
  display: true
};

// Talks Sections

const talkSection = {
  title: "Presentations 🎥",
  subtitle: emoji(
    "I LOVE SHARING KNOWLEDGE"
  ),

  talks: [
    {
      title: "Introduction to CyberSecurity (Upcoming)",
      subtitle: "Offensive Security and Defensive Security",
      slides_url: "",
      event_url: ""
    }
  ],
  display: true
};

// Podcast Section

const podcastSection = {
  title: emoji("Youtube "),
  subtitle: "I LOVE SHARING KNOWLEDGE",
  podcast: [
    ""
  ],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "",
  number: "873-554-1205",
  email_address: "aminemaalej96@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
