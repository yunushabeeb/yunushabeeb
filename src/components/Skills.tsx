// import content
import { createElement, useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import clsx from 'clsx';
import { content } from '../Content';

interface Skill {
  name: string;
  logo: string;
  para: string;
  skills: string[];
}


const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState<Skill | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Safely set react-modal app element (avoid SSR issues)
  if (typeof document !== 'undefined') {
    const rootEl = document.getElementById('root') || document.body;
    Modal.setAppElement(rootEl);
  }

  // Class names for modal content   + overlay using Tailwind for a polished look
  const modalContentClass = clsx(
    'bg-white rounded-xl shadow-2xl max-w-md w-[92%] p-6 mx-auto focus:outline-none',
    'transition-transform duration-200 ease-out transform',
    modalIsOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
  );
  const modalOverlayClass =
    'fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50';

  function openModal(skill: Skill) {
    setSelectSkill(skill);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    // delay clearing so animation can finish (small timeout)
    setTimeout(() => setSelectSkill(null), 220);
  }

  // focus the close button when modal opens for accessibility
  useEffect(() => {
    if (modalIsOpen && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [modalIsOpen]);

  return (
    <section className="min-h-fit bg-light_primary py-14" id="skills">
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={modalContentClass}
        overlayClassName={modalOverlayClass}
        closeTimeoutMS={200}
        shouldFocusAfterRender={true}
        role="dialog"
        aria={{
          labelledby: 'skills-modal-title',
          describedby: 'skills-modal-desc',
        }}
      >
        <div className="flex items-start gap-4">
          <img
             className={clsx(
                    'object-contain transition-transform duration-200',
                    (selectSkill?.name === 'Next.js' || selectSkill?.name === 'Cybersecurity') ? 'w-16 h-16' : 'w-12 h-12',
                    selectSkill?.name === 'Cybersecurity' && "-ml-2"
                  )}
            src={selectSkill?.logo}
            alt={selectSkill?.name ?? 'skill logo'}
          />
          <div className="flex-1">
            <h6 id="skills-modal-title" className="text-lg font-semibold">
              {selectSkill?.name}
            </h6>
            <p id="skills-modal-desc" className="text-sm text-slate-600 mt-1">
              {selectSkill?.para}
            </p>
          </div>
          <button
            ref={closeBtnRef}
            onClick={closeModal}
            aria-label="Close skill details"
            className="ml-3 text-slate-500 hover:text-slate-800 focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-md p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-4">
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
            {selectSkill?.skills?.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={closeModal}
            className="btn bg-linear-to-r from-slate-700 to-slate-500 text-white hover:from-slate-800 hover:to-slate-600"
          >
            Close
          </button>
        </div>
      </Modal>

      {/* content */}
      <div className="md:container px-5  my-10">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectSkill(skill);
                  openModal(skill);
                }
              }}
              onClick={() => {
                setSelectSkill(skill);
                openModal(skill);
              }}
              className={clsx(
                'bg-white relative group w-full max-w-sm flex items-center gap-5 p-5 rounded-xl border border-slate-100',
                'hover:shadow-xl hover:-translate-y-1 transition-transform duration-200',
                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer'
              )}
            >
              <div className="shrink-0">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className={clsx(
                    'object-contain transition-transform duration-200',
                    (skill?.name === 'Next.js' || skill?.name === 'Cybersecurity') ? 'w-16 h-16' : 'w-12 h-12',
                    skill?.name === 'Cybersecurity' && "-ml-2"
                  )}
                />
              </div>
              <div className={clsx('flex-1', skill?.name === 'Cybersecurity' && '-ml-2')}>
                <h6 className="font-semibold">{skill.name.split(' ')[0]}</h6>
                {/* <h6 className="hidden md:block font-semibold">{skill.name}</h6> */}
                <p className="italic text-sm text-slate-500">{skill.para}</p>
              </div>

              <div className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-slate-400">
                <button
                  aria-label={`Open details for ${skill.name}`}
                  className="rounded-full bg-slate-100 p-2 hover:bg-slate-200 focus:outline-none"
                >
                  {createElement(skills.icon)}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
