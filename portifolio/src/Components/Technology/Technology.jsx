const Technology= ({ logo }) => {
  return (
    <main>
      <div className="mt-8  w-24 h-24 p-2 flex justify-center items-center hover:scale-110 transition-transform duration-200">
      <div className="w-full h-full grayscale hover:grayscale-0"> 
        <i className={logo} />
      </div>
    </div>
    </main>
  );
};

export default Technology;
