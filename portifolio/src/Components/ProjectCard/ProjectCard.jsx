import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ imgSrc, title, description, repo, site }) => {
  return (
    <div className="border rounded-lg overflow-hidden flex flex-col h-full transition-transform duration-300 transform hover:scale-105">
      <div className="flex justify-center items-center h-48">
        <Image src={imgSrc} alt={title} width={400} height={300} objectFit="contain" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="flex-grow">{description}</p>
        <div className="flex justify-start space-x-4 mt-2">
          {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
              <FaGithub size={24} />
            </a>
          )}
          {site && (
            <a href={site} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
              <FaExternalLinkAlt size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
