const CurrentSemester = () => {
  const calculateSemester = () => {
    const startYear = 2023;
    const startSemester = 1; 
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // Janeiro é 0
    const yearDifference = currentYear - startYear;
    
    let currentSemester = startSemester + yearDifference * 2;
    if (currentMonth > 6) { // Considera após junho como segundo semestre
      currentSemester++;
    }

    return currentSemester;
  };

  return (
    <span className="relative group">
      <span className="cursor-pointer"> {`${calculateSemester()}º período`}</span>
      <span className="absolute bottom-0 mb-6 w-auto p-2 bg-gray-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        (atualizado conforme a data atual) Conclusão no segundo semestre de 2026
      </span>
    </span>
  );
};

export default CurrentSemester;
