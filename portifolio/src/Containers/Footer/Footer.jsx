import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-bg-100 text-text-100 p-4 text-center">
      <span className="text-xs">Logo e imagem de perfil criadas por IA (DALL-E 4)<br /></span>
      <span className="text-xs">Berdegeus@gmail.com</span>
      <div className="flex justify-center items-center space-x-4">
        <div className="flex items-center">
          <Image src="/Logo.png" alt="Logo" width={50} height={50} className="inline-block"/>
        </div>
        <span className="flex items-center">Bernardo Roorda © {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
