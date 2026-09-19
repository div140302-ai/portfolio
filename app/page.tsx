const projects = [
  {
    title: "Tamam Rides",
    type: "Mobile / Full-Stack",
    description:
      "Flutter-based car rental application for Mauritius with vehicle discovery, booking, authentication, favourites, payment flow, maps and integrated chat functionality.",
    tech: ["Flutter", "Dart", "Firebase", "APIs", "Figma"],
    github: "https://github.com/div140302-ai/car-rental-app",
    report: "https://github.com/div140302-ai/car-rental-app/blob/main/ISD%20Assignment%20Document.pdf",
  },
  {
    title: "Where’s My Ride",
    type: "Real-Time Web Application",
    description:
      "Melbourne public transport dashboard with interactive train and tram layers, a React/Leaflet frontend, an Express backend and PTV API integration.",
    tech: ["React", "Leaflet", "Node.js", "Express", "PTV API"],
    github: "https://github.com/div140302-ai/wheres-my-ride",
    report: "https://github.com/div140302-ai/wheres-my-ride/blob/main/Project_Report.pdf",
  },
  {
    title: "Macadamia ROS 2 Robot",
    type: "Robotics / Autonomous Systems",
    description:
      "Simulated autonomous orchard robot for row following, nut detection and recovery, obstacle avoidance and return-home navigation using LiDAR and odometry.",
    tech: ["ROS 2", "Python", "LiDAR", "Odometry", "Gazebo / RViz"],
    github: "https://github.com/div140302-ai/macadamia-ros2-robot",
    report: "https://github.com/div140302-ai/macadamia-ros2-robot/blob/main/Project_Report.pdf",
  },
  {
    title: "Anti-Theft Face Recognition System",
    type: "Computer Vision / Embedded Systems",
    description:
      "Raspberry Pi vehicle security system using facial recognition to authenticate drivers, control ignition access and trigger alerts for unknown users.",
    tech: ["Python", "OpenCV", "Raspberry Pi", "Computer Vision", "GPIO"],
    github: "https://github.com/div140302-ai/vehicle-face-recognition-security",
    report:
      "https://github.com/div140302-ai/vehicle-face-recognition-security/blob/main/Project_Report.pdf",
  },
  {
    title: "3Zouzou E-Commerce",
    type: "Full-Stack Web Development",
    description:
      "Interactive toy-shopping platform built with PHP, JavaScript, AJAX and MySQL, covering both front-end interactions and database-backed functionality.",
    tech: ["PHP", "JavaScript", "AJAX", "MySQL", "HTML", "CSS"],
    github: "https://github.com/div140302-ai/3zouzou-ecommerce",
    report: "https://github.com/div140302-ai/3zouzou-ecommerce/blob/main/Project_Report.pdf",
  },
  {
    title: "Knockdown Racing",
    type: "3D Game Development",
    description:
      "Unity racing game developed in C# featuring vehicle selection, racetrack selection, 3D gameplay and lap-time tracking.",
    tech: ["Unity", "C#", "3D Assets", "Game Physics", "UI"],
    github: "https://github.com/div140302-ai/racing-game",
    report: null,
  },
];

const skillGroups = [
  { label: "Programming", items: ["Python", "C#", "Java", "JavaScript", "Dart", "PHP", "C/C++"] },
  { label: "Web & Mobile", items: ["React", "Flutter", "Node.js", "Express", "ASP.NET", "HTML", "CSS", "AJAX"] },
  { label: "AI & Robotics", items: ["OpenCV", "Machine Learning", "ROS 2", "LiDAR", "Raspberry Pi", "Computer Vision"] },
  { label: "Data & Backend", items: ["MySQL", "Firebase", "REST APIs", "API Integration"] },
  { label: "Automation & Tools", items: ["UiPath", "RPA", "Git", "GitHub", "Unity", "Figma"] },
];

function ExternalLink({ href, children, subtle = false }: { href: string; children: React.ReactNode; subtle?: boolean }) {
  return (
    <a className={subtle ? "button buttonSecondary" : "button"} href={href} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a href="#top" className="brand" aria-label="Divesh Kissoon home">
          DK<span>.</span>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero section" id="top">
        <div className="heroCopy">
          <p className="eyebrow">SOFTWARE • AI • AUTOMATION</p>
          <h1>
            Hi, I’m <span>Divesh Kissoon.</span>
          </h1>
          <p className="heroLead">
            Software Developer and Master of Artificial Intelligence student building practical products across automation,
            web and mobile development, robotics and computer vision.
          </p>
          <div className="heroActions">
            <a className="button" href="#projects">View projects ↓</a>
            <ExternalLink href="https://github.com/div140302-ai" subtle>GitHub</ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/divesh-kissoon-a5708020b" subtle>LinkedIn</ExternalLink>
          </div>
          <div className="heroMeta">
            <span>Based in Melbourne, Australia</span>
            <span>Open to software, AI & automation opportunities</span>
          </div>
        </div>
        <div className="heroVisual">
          <img
            className="portraitImage"
            src="/profile.png"
            alt="Divesh Kissoon"
          />
          <div className="orbit orbitOne" aria-hidden="true" />
          <div className="orbit orbitTwo" aria-hidden="true" />
        </div>
      </section>

      <section className="section split" id="about">
        <div>
          <p className="sectionLabel">01 / ABOUT</p>
          <h2>I like building software that solves a real problem.</h2>
        </div>
        <div className="bodyCopy">
          <p>
            I’m a software developer with hands-on experience in robotic process automation, software testing and web development,
            alongside university and personal projects in artificial intelligence, computer vision, robotics and mobile applications.
          </p>
          <p>
            My work spans UiPath automation, C#/ASP.NET web development, Flutter applications, React/Node.js systems and Python-based AI projects.
            I’m currently extending that foundation through postgraduate study in Artificial Intelligence at RMIT University.
          </p>
        </div>
      </section>

      <section className="section" id="experience">
        <p className="sectionLabel">02 / EXPERIENCE</p>
        <h2>Professional experience</h2>
        <div className="timeline">
          <article className="timelineItem">
            <div className="timelineDate">Jan 2025 — Present</div>
            <div>
              <h3>Software Developer <span>• RT-Knits</span></h3>
              <ul>
                <li>Develop UiPath robotic process automation workflows for repetitive business processes.</li>
                <li>Create and execute software test cases to validate application and automation functionality.</li>
                <li>Troubleshoot workflow issues and support improvements to automation reliability.</li>
              </ul>
            </div>
          </article>
          <article className="timelineItem">
            <div className="timelineDate">Nov 2023 — Jan 2024</div>
            <div>
              <h3>Web Developer Intern <span>• Central Electricity Board</span></h3>
              <ul>
                <li>Contributed to full-stack web development using C#, ASP.NET and CSS.</li>
                <li>Supported development, testing and debugging of web application functionality.</li>
              </ul>
            </div>
          </article>
          <article className="timelineItem">
            <div className="timelineDate">Nov 2018 — Present</div>
            <div>
              <h3>Tutor <span>• Volunteer / Independent</span></h3>
              <ul>
                <li>Provide free Design & Technology tuition and help students prepare coursework and HSC revision.</li>
                <li>Adapt explanations to different learning needs and communicate technical concepts clearly.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="sectionHeadingRow">
          <div>
            <p className="sectionLabel">03 / PROJECTS</p>
            <h2>Selected projects</h2>
          </div>
          <p>From mobile products to robotics and real-time systems.</p>
        </div>
        <div className="projectGrid">
          {projects.map((project, index) => (
            <article className="projectCard" key={project.title}>
              <div className="projectNumber">0{index + 1}</div>
              <p className="projectType">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tech.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="projectLinks">
                <ExternalLink href={project.github}>GitHub</ExternalLink>
                {project.report && <ExternalLink href={project.report} subtle>Project report</ExternalLink>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <p className="sectionLabel">04 / SKILLS</p>
        <h2>Technical toolkit</h2>
        <div className="skillsGrid">
          {skillGroups.map((group) => (
            <div className="skillGroup" key={group.label}>
              <h3>{group.label}</h3>
              <div className="tags largeTags">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="education">
        <p className="sectionLabel">05 / EDUCATION</p>
        <h2>Education</h2>
        <div className="educationGrid">
          <article className="educationCard">
            <p>2026 — Present</p>
            <h3>Master of Artificial Intelligence</h3>
            <strong>RMIT University</strong>
            <span>Melbourne, Australia</span>
            <small>Artificial Intelligence • Machine Learning • Applied Bayesian Statistics • Data Analytics</small>
          </article>
          <article className="educationCard">
            <p>Oct 2021 — Present</p>
            <h3>BSc (Hons) Software Engineering</h3>
            <strong>University of Mauritius</strong>
            <span>Réduit, Mauritius</span>
            <small>AI • Software Engineering • Web Development • Database Systems • Software Testing</small>
          </article>
          <article className="educationCard">
            <p>Higher School Certificate</p>
            <h3>Mahatma Gandhi Institute Secondary School</h3>
            <strong>Mauritius</strong>
            <small>Design & Technology • Mathematics • Physics • Computer Science • General Paper</small>
          </article>
        </div>
      </section>

      <section className="section contact" id="contact">
        <p className="sectionLabel">06 / CONTACT</p>
        <h2>Let’s build something useful.</h2>
        <p>
          I’m open to software development, AI, automation and graduate opportunities. The fastest way to reach me is by email or LinkedIn.
        </p>
        <div className="contactLinks">
          <a href="mailto:div140302@gmail.com">div140302@gmail.com</a>
          <a href="https://www.linkedin.com/in/divesh-kissoon-a5708020b" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/div140302-ai" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </section>

      <footer>
        <span>© 2026 Divesh Kissoon</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
