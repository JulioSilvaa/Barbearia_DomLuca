import { useRef, useEffect } from 'react';
import Form from '../form/Form';

const Modal = ({ stateModal }: any) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        stateModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [stateModal]);

  return (
    <div ref={modalRef} className="absolute flex flex-col gap-4 text-center top-1 left-0 bottom-80 bg-zinc-800 right-0 z-50 opacity-90">
      <div
        onClick={() => stateModal(false)}
        className="text-right lg:block text-[2rem] mt-2 mr-8 cursor-pointer p-1"
      >
        <p>X</p>
      </div>
      <div className='py-2'>
      <h1 className="text-[3rem]">Cadastro</h1>
      <Form/>
      </div>
    </div>
  );
};

export default Modal;