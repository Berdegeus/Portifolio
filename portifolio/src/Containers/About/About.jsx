import CurrentSemester from "../../Components/CurrentSemester/CurrentSemester";
const About = () => {
  return (
    <div id="About" className="bg-bg-200 text-text-100 p-8">
      <div className="max-w-4xl mx-auto mt-5">
        <h2 className="text-3xl font-bold mb-16">Sobre Mim</h2>
        <p className="text-lg">
           Desde muito jovem, fui fascinado pelo mundo da tecnologia. Aos 12 anos, comecei minha jornada na programação criando mods para jogos, compartilhando a diversão e a inovação com amigos. Essa experiência inicial não apenas semeou minha paixão pela computação, mas também me ensinou o valor da criatividade e da colaboração. <br /> <br />
        </p>
        <p className="text-lg">
           Minha curiosidade natural e o gosto por desafios me levaram a explorar além dos jogos. Aos 14 anos, embarquei em um projeto mais ambicioso: desenvolver um programa para a gestão de notas fiscais. Esse projeto foi um marco em minha vida, marcando a transição de um hobby para uma paixão com impacto real. <br /> <br />
        </p>
        <p className="text-lg">
            Atualmente, estou no <CurrentSemester /> de Sistemas de informação na PUCPR. Embora meus interesses na tecnologia sejam amplos, ultimamente tenho me dedicado especialmente ao desenvolvimento mobile nativo e usando fraworks. <br /> <br />
        </p>
        <p className="text-lg">
             Para mim, a tecnologia é mais do que uma área de estudo ou trabalho; é uma extensão da minha criatividade e um caminho para fazer a diferença. Estou animado para continuar esta jornada, aprendendo, criando e contribuindo para o mundo da tecnologia, que sempre soube ser meu lugar.
        </p>
      </div>
    </div>
  );
};

export default About;
