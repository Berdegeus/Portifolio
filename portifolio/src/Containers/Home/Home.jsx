import Image from 'next/image';
import Link from 'next/link';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-[96vh] bg-bg-100">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl p-8">
        <div className="flex flex-col space-y-4 max-w-md">
          <h1 className="font-bold text-primary-300 text-7xl">
            Olá, eu sou Bernardo
          </h1>
          <div>
            <Link href="https://www.linkedin.com/in/bernardo-roorda/" className="inline-block bg-primary-200 text-white py-2 px-4 rounded hover:bg-primary-300 transition duration-300">
              <CiLinkedin className="inline-block" />
            </Link>
            <Link href="https://github.com/Berdegeus" className="inline-block ml-2 bg-accent-100 text-white py-2 px-4 rounded hover:bg-accent-200 transition duration-300">
              <FaGithub className="inline-block" />
            </Link>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <Image src="/Me.png" alt="Bernardo" width={450} height={450} className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Home;
