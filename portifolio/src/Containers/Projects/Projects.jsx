import ProjectCard from "../../Components/ProjectCard/ProjectCard";

const Projects = () => {
  const projectsCards = [
    {
      imgSrc: "/Projects/Benz.png",
      title: "Benz",
      description: "Projeto de um jogo desenvolvido na engine construct 3",
      Site: "https://www.construct.net/en"
    },
    {
      imgSrc: "/Projects/Groovit.png",
      title: "Groovit",
      description: "Player de Musica em JavaFX",
      Site: "https://openjfx.io/"
    },
    {
      imgSrc: "/Projects/Almirante.png",
      title: "Almirante Turismo",
      description: "Site com o objetivo de promover o turismo na cidade de almirante tamandaré feito em Next.js",
      Repo: "https://github.com/Berdegeus/Akame-Wiki",
      Site: "https://almirante-turismo.vercel.app/"
    },
    {
      imgSrc: "/Projects/TDE.png",
      title: "TDE portifolio",
      description: "Portfólio da matéria de experiência criativa",
      Repo: "https://github.com/Berdegeus",
      Site: "https://portifolio-bernardo.vercel.app/"
    },
    {
      imgSrc: "/Projects/Calculadora.png",
      title: "Calculadora",
      description: "Calculadora de tabela verdade baseada em expressões lógicas",
      Repo: "https://github.com/Berdegeus/LogicaMatematica/tree/main/Codes/Tabela%20Verdade",
    },
    {
      imgSrc: "/Projects/Rega.png",
      title: "Rega automática",
      description: "Projeto de rega automática usando ESP32 e Blynk cloud",
    },
    {
      imgSrc: "/Projects/Batalha.png",
      title: "Batalha naval",
      description: "Batalha Naval online em python com PyGames",
      Repo: "https://github.com/Berdegeus/BatalhaNaval",
    },
  ];

  return (
  <div id="Projects" className="mt-10">
  <h2 className="text-3xl font-bold text-accent-200 mb-6 ml-10">Projetos desenvolvidos na faculdade</h2>
      <div className="grid grid-cols-4 gap-4 m-10">
        {projectsCards.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            title={project.titleComponent}
            description={project.description}
            repo={project.Repo}
            site={project.Site}
          />
        ))}
      </div>
  </div>
  );
};

export default Projects;
