const skillsList = [
  {
    skill: "HTML5",
    progress: 100,
  },
  {
    skill: "Javascript",
    progress: 100,
  },
  {
    skill: "CSS/SCSS/Styled Components/Tailwind",
    progress: 100,
  },
  {
    skill: "React / Next",
    progress: 100,
  },
  {
    skill: "Redux / Redux Saga",
    progress: 75,
  },
  {
    skill: "Typescript",
    progress: 85,
  },
  {
    skill: "Testing (Unit / Functional)",
    progress: 85,
  },
  {
    skill: "Accessibility",
    progress: 80,
  },
];

const Skills = () => {
  return (
    <section className="flex flex-col pt-10 mb-10 max-w-[90%] mx-auto">
      <h4 className="text-4xl mb-5 text-center font-light">Skills</h4>
      <div className="bg-gradient-to-t from-sky-600 to-emerald-600 shadow-md shadow-gray-300 p-6 rounded-md text-white">
        <ul className="flex flex-wrap justify-between">
          {skillsList.map((s) => (
            <li className="min-w-[48%] py-2">
              <div className="pb-1">{s.skill}</div>
              <div className="w-full rounded-lg h-2 bg-black/50">
                <div
                  className={`block h-2 bg-white rounded-lg`}
                  style={{ width: `${s.progress}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
