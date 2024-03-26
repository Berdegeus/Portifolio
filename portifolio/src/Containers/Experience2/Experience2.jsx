import Technology from "../../Components/Technology/Technology";

const Experience2 = () => {
  const Experience2 = [
    { name: "Python", logo: "ci ci-python ci-2x" }, 
    { name: "C", logo: "ci ci-c ci-2x" },
    { name: "Java", logo: "ci ci-java ci-2x" },
    { name: "PHP", logo: "ci ci-php ci-2x" },
    { name: "Node.js", logo: "ci ci-nodejs ci-2x" },
    { name: "Next.js", logo: "ci ci-nextjs ci-2x" },
    { name: "TailwindCSS", logo: "ci ci-tailwind ci-2x" },
    { name: "PostgreSQL", logo: "ci ci-postgresql ci-2x" },
    { name: "AWS", logo: "ci ci-aws ci-2x" },
    { name: "Figma", logo: "ci ci-figma ci-2x" },
    { name: "Git", logo: "ci ci-git ci-2x" },
  ];

  return (
    <div className="bg-bg-200 p-8">
      <h2 className="text-3xl font-bold text-accent-200 mb-6">Tecnologias</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {Experience2.map((tech) => (
          <Technology key={tech.name} logo={tech.logo} />
        ))}
      </div>
    </div>
  );
};

export default Experience2;
