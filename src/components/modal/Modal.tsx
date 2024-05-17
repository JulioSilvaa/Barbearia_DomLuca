import { useRef, useEffect } from 'react';

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
    <div ref={modalRef} className="absolute flex flex-col gap-4 text-center top-1 left-0 bg-zinc-800 right-0 z-50 opacity-90">
      <div
        onClick={() => stateModal(false)}
        className="text-right lg:block text-[3rem] mt-2 mr-10 cursor-pointer p-2"
      >
        <p>X</p>
      </div>
      <div className='py-6'>
      <h1 className="text-[3rem]">AQUI VAI O FORMEPARA AGENDAMENTO</h1>
      <div className='text-[2rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi libero sint quia fuga quidem quis dolorem? Accusantium doloribus molestias deserunt?</div>
      <div className='text-[2rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi libero sint quia fuga quidem quis dolorem? Accusantium doloribus molestias deserunt?</div>
      <div className='text-[2rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi libero sint quia fuga quidem quis dolorem? Accusantium doloribus molestias deserunt?</div>
      <div className='text-[2rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi libero sint quia fuga quidem quis dolorem? Accusantium doloribus molestias deserunt?</div>
      <div className='text-[2rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi libero sint quia fuga quidem quis dolorem? Accusantium doloribus molestias deserunt?</div>
      </div>
    </div>
  );
};

export default Modal;