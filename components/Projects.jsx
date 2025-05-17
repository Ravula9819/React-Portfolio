import styles from './projects.module.css';
import portfolioImg from '/src/assets/images/react-portfolio.jpg';
import currencyImg from '/src/assets/images/currency-converter.jpg';
import onroadImg from '/src/assets/images/vehicle-breakdown.jpg';
import planifyImg from '/src/assets/images/planify-task-reminder.jpg';

const projects = [
  {
    title: 'React Portfolio Website',
    description: 'A professional and responsive portfolio website developed using React and Vite. It features a clean, modern design to showcase my skills, projects, and experience. Built with reusable components and optimized for fast performance, this project highlights my front-end development capabilities and provides a strong, professional online presence.',
    github: '#',
    imageSrc: portfolioImg
  },
  {
    title: 'Currency Converter Website',
    description: 'A responsive and user-friendly currency converter website developed using HTML, CSS, and JavaScript. It enables users to convert between multiple currencies in real-time using live exchange rate data from a public API. The site features a clean and intuitive interface, real-time calculations, and seamless interaction without the use of external libraries or frameworks.',
    github: '#',
    imageSrc: currencyImg
  },
  {
    title: 'On-Road Vehicle Breakdown Help Assistance',
    description: 'This application helps drivers in trouble when their vehicles break down on the road. It provides on-road support through nearby service centers, emergency teams, and roadside help using GPS and communication tools. It connects users with mechanics efficiently in remote locations.',
    github: 'https://github.com/Ravula9819/ON_ROAD_VEHICLE_BREAKDOWN_HELP_ASSISTANCE',
    imageSrc: onroadImg
  },
  {
    title: 'Planify - Task Reminder',
    description: 'A web-based application designed to help users organize, prioritize, and track daily tasks. It features task categorization, deadline tracking, motivational quotes, and community chat for sharing tips. Emergency mode highlights high-priority tasks with red boxes.',
    github: 'https://github.com/Ravula9819/PLANIFY-TASK_REMAINDER_WEBSITE',
    imageSrc: planifyImg
  }
];

export function Projects() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.content}>
        {projects.map((project, index) => (
          <div key={index} className={styles.aboutItem}>
            <img 
              src={project.imageSrc} 
              alt={project.title} 
              className={styles.projectImage} 
            />
            <h3>{project.title}</h3>
            <p className={styles.centeredDescription}>{project.description}</p>
            <p className={styles.moreInfo}>
              If you want to know more about the project, then press the GitHub link below.
            </p>
            <div className={styles.buttonGroup}>
              <a href={project.github} className={styles.button}>GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
