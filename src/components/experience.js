import { AiOutlineBulb, AiOutlineCompass } from "react-icons/ai";

const experiences = [
  {
    title: "Vonage",
    city: "London",
    timeframe: "March 2024 - Current",
    job: "Front end Developer",
    responsabilities:
      "Create UX experiences to help developers implement network APIs and collaborate with different multidisciplinary teams to innovate how our users interact with the applications",
    techStack: "VueJS, Vi Test, Tailwind, Github Actions, Jenkins",
    insight: "First experience with Vue JS as a main frontend framework",
  },
  {
    title: "Sky Uk",
    city: "London",
    timeframe: "Nov 2019 - February 2024",
    job: "Front end Developer",
    responsabilities:
      "Build and maintain core web applications inside the NOWTV division. Champion accessibility, create a collection of reusable UI components across departments and collaborating to build new products.",
    techStack:
      "Styled Components, React JS, Typescript, Redux, GraphQL, React testing Library, Cypress, Concourse",
    insight: "Experience working in applications used by millions of users",
  },
  {
    title: "Enaviga",
    city: "Brussels",
    timeframe: "Sep 2017 - Nov 2019",
    job: "Front end developer / UX & UI Designer",
    responsabilities:
      "Prototype, design and develop public and back office web applications for the Belgian start-up enaviga.com - An online platform to connect boat owners with customers",
    techStack:
      "HTML5, SCSS, React JS, Jest, Webpack, Python, Django. Adobe Suite, Adobe XD for wire-framing",
    insight: "Experience leading the front end team and the hiring process",
  },
  {
    title: "Esma Data",
    city: "Barcelona",
    timeframe: "Dec 2015 - Sep 2017",
    job: "Front end developer / UX & UI Designer",
    responsabilities:
      "Design and develop a design system that follow Google’s material design guidelines. The design aimed to enhance the efficiency of nurses in hospitals",
    techStack: "HTML5, CSS3, AngularJS. Adobe Suite, Adobe XD for wire-framing",
    insight: "First experience with modern JS Frameworks",
  },
  {
    title: "Turijobs",
    city: "Barcelona",
    timeframe: "Jun 2015 - Dec 2015",
    job: "Front end developer / UI Co-designer",
    techStack: "HTML5, CSS3, jQuery, SEO, Email Templates",
  },
  {
    title: "Kappa Studio",
    city: "Barcelona",
    timeframe: "Sep 2014 - Jun 2015",
    job: "CEO / Web developer / UX & UI Designer",
    techStack: "HTML5, CSS3, LESS, jQuery, Git, Wordpress, PHP",
    insight: "Freelance experience. Ran my own creative company",
  },
  {
    title: "Stacks",
    city: "Barcelona",
    timeframe: "Sep 2014 - Feb 2015",
    job: "Web Layout Developer",
    techStack: "HTML5, CSS3, jQuery, Git",
  },
  {
    title: "Fluid",
    city: "Barcelona",
    timeframe: "Apr 2010 - Sep 2014",
    job: "Web Layout Developer",
    techStack: "HTML5, CSS3, jQuery, Git",
  },
];

const Experience = () => {
  return (
    <section className="flex flex-col pt-10 max-w-[90%] mx-auto">
      <h4 className="text-4xl text-center font-light">Experience</h4>
      <ul className="flex flex-col">
        {experiences.map((exp) => {
          return (
            <li className="bg-white shadow-md shadow-gray-300 p-6 mt-5 rounded-md">
              <header className="flex justify-between align-center">
                <h5 className="text-xl font-bold text-purple-600">
                  {exp.title}
                </h5>
                <div className="text-neutral-500 font-light flex gap-2 align-center text-right">
                  <AiOutlineCompass size={18} />
                  <span className="mt-[-3px]">{`${exp.city}, ${exp.timeframe}`}</span>
                </div>
              </header>
              <div className="text-lg text-neutral-800">{exp.job}</div>
              <div className="py-2">
                <dl>
                  <dt className="font-bold">Responsabilities:</dt>
                  <dd>{exp.responsabilities}</dd>
                </dl>
              </div>
              <div className="py-2">
                <span className="mr-1 font-bold">Tech stack:</span>
                <span>{exp.techStack}</span>
              </div>
              {exp.insight && (
                <div className="flex pt-1 justify-start items-center text-neutral-500 gap-2">
                  <AiOutlineBulb size={18} />
                  <div>{exp.insight}</div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Experience;
