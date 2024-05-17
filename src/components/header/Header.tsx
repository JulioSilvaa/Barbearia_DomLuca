import { useState } from 'react';
import Modal from '../modal/Modal';

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <header className="w-full flex justify-between p-2 px-6 items-center  ">
      <div className='flex place-items-center gap-4'>
      <a href="/">
        <img
          className="w-40 bg-transparent rounded-full"
          src="/logo.webp"
          alt="logo Barbearia Dom Luca"
        />
      </a>
      <h1 className='hidden lg:block text-[3rem]'> Dom Luca Barberaria</h1>
      </div>
      <nav className='text-[2rem]'>
        <div className="hidden w- lg:flex gap-4">
          <a
            onClick={handleModalOpen}
            className="px-4 py-2  rounded-md hover:border-b hover:cursor-pointer"
          >
            AGENDAR 
          </a>
          {/* <a
            onClick={handleModalOpen}
            className="px-4 py-2  rounded-md hover:border-b hover:cursor-pointer"
          >
            Cadastrar
          </a> */}
        </div>
        <div className="flex lg:hidden gap-3 mr-7">
          <button onClick={handleModalOpen}>
            <span
              className={`${
                modalIsOpen
                  ? "w-5 h-[1px] bg-white block  rotate-45 transition ease-in-out delay-450"
                  : "w-9 h-[2px] bg-white my-1 space-y-3 rotate-0 block"
              }`}
            />
            <span
              className={`${
                modalIsOpen
                  ? "hidden"
                  : "w-9 h-[2px] bg-white my-1 space-y-3 block"
              }`}
            />
            <span
              className={`${
                modalIsOpen
                  ? "hidden"
                  : "w-9 h-[2px] bg-white my-1 space-y-3 block"
              }`}
            />
            <span
              className={`${
                modalIsOpen
                  ? "w-5 h-[1px] bg-white  block  -rotate-45 transition ease-in-out delay-450"
                  : "w-9 h-[2px] bg-white my-1 space-y-3 block"
              }`}
            />
          </button>
        </div>
      </nav>
      {modalIsOpen && <Modal stateModal={setModalIsOpen} />}
    </header>
  );
};

export default Header;
