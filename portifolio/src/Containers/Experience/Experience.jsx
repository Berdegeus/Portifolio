import ExperienceCard from "../../Components/ExperienceCard/ExperienceCard";

const Experience = () => {
  return (
    <div id="Experience" className="bg-bg-100 p-8">
      <h2 className="text-3xl font-bold text-accent-200 mb-6">Experiência Profissional</h2>
        <ExperienceCard
        imageSrc="/Positivo.jpeg"
        role="Desenvolvedor Junior"
        company="POSITIVO TECNOLOGIA"
        period="Jul de 2025 - atual"
        location="Curitiba, Paraná, Brasil - Híbrido"
        project="Desenvolvimento de aplicativos mobile em dispositivos POS."
        attributes={[
          "Desenvolvimento, manutenção e modernização do app diagnóstico para terminais POS.",
          "Atuação em evolução de produto, correções e suporte a variantes de dispositivos.",
          "Manutenção do app legado e consolidação de práticas de versionamento e release.",
          "Foco em confiabilidade, rastreabilidade e experiência de uso em campo, fábrica e laboratório.",
        ]}
      />
      <ExperienceCard
        imageSrc="/Positivo.jpeg"
        role="Estagiário"
        company="POSITIVO TECNOLOGIA"
        period="Jul de 2024 - Jul de 2025"
        location="Curitiba, Paraná, Brasil - Híbrido"
        project="Desenvolvimento de aplicativos mobile"
        attributes={[
          "Atuação no projeto de Casa inteligente.",
          "Desenvolvimento de aplicativos mobile para Android e iOS em Flutter.",
          "Implementação de novas funcionalidades e testes automatizados, resolução de bugs e documentação.",
        ]}
      />
      <ExperienceCard
        imageSrc="/Aeromax.jpeg"
        role="Estagiário"
        company="AEROMAX AVIAÇÃO"
        period="Abr de 2023 - Jul de 2024"
        location="Curitiba, Paraná, Brasil - Híbrido"
        project="Desenvolvimento de sistemas com foco em manutenção aeronáutica."
        attributes={[
          "Implementação de sistemas integrados para gerenciamento de orçamentos e ordens de serviço.",
          "Transcrição e padronização de laudos técnicos, garantindo conformidade com a ANAC.",
          "Modernização do site corporativo para NextJS e Tailwind CSS.",
        ]}
      />
      <ExperienceCard
        imageSrc="/Trucking.jpeg"
        role="Estagiário"
        company="Trucking"
        period="Mar de 2022 - Abr de 2023"
        location="Curitiba, Paraná, Brasil - Híbrido"
        project="Projeto MB Sinal em colaboração com a Mercedes Benz caminhões."
        attributes={[
          "Gestão de operações e manutenção técnica de pontos de acesso Wi-Fi.",
          "Análise e relatório de dados para otimização do desempenho do projeto.",
          "Atualização e gerenciamento do portal de acesso.",
          "Comunicação estratégica e alinhamento com parceiros corporativos.",
        ]}
      />
    </div>
  );
};

export default Experience;
