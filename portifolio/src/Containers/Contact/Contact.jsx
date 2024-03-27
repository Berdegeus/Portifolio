// components/ContactSection.jsx

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="Contact" className="bg-bg-200 py-10">
      <div className="text-center">
        <h2 className="text-4xl text-accent-100 font-bold mb-6">Entre em Contato</h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Estou sempre aberto a discutir novas oportunidades, colaborações criativas ou simplesmente trocar ideias. Sinta-se à vontade para me contatar!
        </p>
        <div className="flex justify-center items-center space-x-6">
          <a href="mailto:Berdegeus@gmail.com" className="text-text-100 hover:text-accent-200 transition-colors text-4xl">
            <FaEnvelope />
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/Berdegeus" className="text-text-100 hover:text-accent-200 transition-colors text-4xl">
            <FaGithub />
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/bernardo-roorda/" className="text-text-100 hover:text-accent-200 transition-colors text-4xl">
            <FaLinkedin />
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/Berdegeus" className="text-text-100 hover:text-accent-200 transition-colors text-4xl">
            <FaTwitter />
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/berdegeus_/" className="text-text-100 hover:text-accent-200 transition-colors text-4xl">
            <FaInstagram />
        </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
