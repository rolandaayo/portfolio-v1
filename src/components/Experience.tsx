import { FC } from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string;
  technologies: string[];
  countryFlag?: string;
}

const experienceData: ExperienceItem[] = [
  {
    title: "Fullstack Engineer",
    company: "Leaders Network",
    date: "Jan 2024 - Present",
    description: "I Founded and led the development of the platform to address personal challenges I faced as a student at Aptech, now serving 70+ students. Key responsibilities included leading a team of 4, assigning tasks, conducting code reviews, and presenting the platform to students. This experience enhanced my collaborative and leadership skills as I oversaw the frontend and backend integrations of the platform.",
    technologies: ["NextJs", "Tailwind", "Typescript", "React", "Node.js", "Express.js", "React Native", "Git", "Mongodb", "Mongoose"],
    countryFlag: "🇳🇬"
  },
  {
    title: "Frontend Developer",
    company: "NIIT",
    date: "April 2022 - April 2023",
    description: "I design intuitive user interfaces to enhance the platform's functionality and user experience. I focus on building responsive, performance-optimized designs while ensuring accessibility standards are met. I collaborate closely with cross-functional teams to integrate features seamlessly and maintain a cohesive product vision. My work involves leveraging modern technologies to deliver scalable solutions, improving customer satisfaction and usability.",
    technologies: ["NextJs", "Tailwind", "Typescript", "Jest", "Zustand", "Framer Motion", "Custom Css"],
    countryFlag: "🇳🇬"
  }
];

const Experience: FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      {experienceData.map((item, index) => (
        <div key={index} className="bg-[#1C1C1C] rounded-xl p-4 md:p-6 space-y-3 md:space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-white font-semibold flex items-center gap-2 text-sm md:text-base">
                {item.title}, @{item.company} {item.countryFlag}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm flex items-center gap-2">
                <span className="opacity-50">📅</span> {item.date}
              </p>
            </div>
            <span className="text-gray-400">↗</span>
          </div>
          
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-pink-500 to-yellow-300" />
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-pink-500 to-yellow-300" />
            <div className="py-3 md:py-4 my-3 md:my-4">
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {item.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 md:px-3 py-0.5 md:py-1 bg-[#2A2A2A] rounded-full text-xs md:text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience; 