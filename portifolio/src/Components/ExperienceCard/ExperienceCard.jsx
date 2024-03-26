import Image from 'next/image';

const ExperienceCard = ({ imageSrc, role, company, period, location, project, attributes }) => {
  return (
    <div className="flex flex-row bg-bg-200 text-text-100 p-4 rounded-lg shadow-lg mb-10">
      <div className="w-1/5 justify-center align-middle">
        <Image src={imageSrc} alt={`${company} logo`} width={96} height={96} className="rounded-lg" />
      </div>
      <div className="w-2/3 pl-4">
        <h3 className="text-xl font-bold">{role} - {company}</h3>
        <p className="text-sm">{period}</p>
        <p className="text-sm">{location}</p>
        <p className="text-sm italic">{project}</p>
        <ul className="list-disc list-inside">
          {attributes.map((attribute, index) => (
            <li key={index} className="text-sm">{attribute}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
