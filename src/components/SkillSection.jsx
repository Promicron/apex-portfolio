import skills from "../assets/skills";

const SkillSection = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-50/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
          My{" "}
          <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white rounded-lg p-6 border border-purple-100 shadow-sm shadow-purple-50/20 hover:border-purple-300 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 mr-3"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "inline";
                    }}
                  />
                  <span className="text-slate-800 font-semibold">{skill.name}</span>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  skill.level >= 90 ? 'bg-purple-100 text-purple-700' :
                  skill.level >= 80 ? 'bg-indigo-100 text-indigo-700' :
                  skill.level >= 70 ? 'bg-blue-100 text-blue-700' :
                  'bg-slate-100 text-slate-700'
                }`}>
                  {skill.level >= 90 ? 'Expert' :
                   skill.level >= 80 ? 'Advanced' :
                   skill.level >= 70 ? 'Intermediate' :
                   'Familiar'}
                </span>
              </div>
              <div className="bg-slate-100 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full h-2 transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
