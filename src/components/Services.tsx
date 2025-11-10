import { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import clsx from 'clsx';
import { content } from '../Content';

interface ServiceItem {
  logo: string;
  title: string;
  para: string;
  longPara?: string;
  features?: string[];
}

const Services = () => {
  const { services } = content;

  // modal state for service details
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<ServiceItem | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // set app element for react-modal (SSR-safe)
  if (typeof document !== 'undefined') {
    const rootEl = document.getElementById('root') || document.body;
    Modal.setAppElement(rootEl);
  }

  // animate modal scale/opacity using clsx
  const modalContentClass = clsx(
    'bg-white rounded-xl shadow-2xl max-w-lg max-md:max-h-[75vh] overflow-y-auto w-[92%] p-6 mx-auto focus:outline-none',
    'transition-transform duration-200 ease-out transform',
    modalIsOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
  );
  const modalOverlayClass =
    'fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50';

  // open modal and set selected service
  function openModal(service: ServiceItem) {
    setSelected(service);
    setIsOpen(true);
  }

  // close modal and then scroll to contact section after animation ends
  function handleDiscuss(e: React.MouseEvent<HTMLButtonElement>) {
    if (e && e.preventDefault) e.preventDefault();
    // close modal (keeps same close timeout used by Modal)
    setIsOpen(false);
    setTimeout(() => {
      setSelected(null);
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // fallback: change hash so link still works if element missing
        window.location.hash = '#contact';
      }
    }, 220); // match closeTimeoutMS (200) + small buffer
  }

  // close modal; delay clearing selected to allow close transition
  function closeModal() {
    setIsOpen(false);
    setTimeout(() => setSelected(null), 200);
  }

  // focus the close button when modal opens for accessibility
  useEffect(() => {
    if (modalIsOpen && closeBtnRef.current) closeBtnRef.current.focus();
  }, [modalIsOpen]);

  return (
    <section className="py-14" id="services">
      <div className="md:container px-5 my-10">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />

        {/* Modal for service details */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={modalContentClass}
          overlayClassName={modalOverlayClass}
          closeTimeoutMS={200}
          shouldFocusAfterRender
          role="dialog"
          aria={{
            labelledby: 'service-modal-title',
            describedby: 'service-modal-desc',
          }}
        >
          <div className="flex justify-between sm:justify-start items-center sm:items-start -max-sm:mt-2 max-sm:mb-3 gap-4">
            <img
              src={selected?.logo}
              alt={selected?.title ?? 'service logo'}
              className="w-12 h-12 rounded-md object-contain"
            />
            <div className="flex-1 hidden sm:block">
              <h5 id="service-modal-title" className="text-lg font-semibold">
                {selected?.title}
              </h5>
              {/* show a short intro if present (para) */}
              {selected?.para && (
                <p className="text-sm text-slate-600 mt-1">{selected.para}</p>
              )}
            </div>
            <button
              ref={closeBtnRef}
              onClick={closeModal}
              aria-label="Close service details"
              className="ml-3 text-slate-500 hover:text-slate-800 focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-md p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className='sm:hidden'>
              <h5 id="service-modal-title" className="text-lg font-semibold">
                {selected?.title}
              </h5>
            </div>
          {/* Distinct detailed content (longPara + feature bullets) */}
          <div className="mt-5">
            {selected?.longPara && (
              <p id="service-modal-desc" className="text-sm text-slate-700 leading-7 mb-4">
                {selected.longPara}
              </p>
            )}

            {Array.isArray(selected?.features) && selected.features.length > 0 && (
              <div>
                <h6 className="font-medium mb-2">What I deliver</h6>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                  {selected.features.map((f, idx) => (
                    <li key={f + idx}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-6 flex gap-3 justify-end">
            <button
              onClick={handleDiscuss}
              className="btn bg-linear-to-r from-slate-700 to-slate-500 text-white cursor-pointer hover:from-slate-800 hover:to-slate-600"
              aria-label="Discuss this service"
            >
              Discuss this
            </button>
            <button onClick={closeModal} className="btn bg-white border border-slate-200 text-slate-700 cursor-pointer hover:bg-slate-50">
              Close
            </button>
          </div>
        </Modal>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.service_content.map((item, i) => {
            const delay = Math.min(i * 300, 700); // cap at 700ms
            return (
              // service card — opens modal on click or Enter/Space
              <div
                key={i}
                role="button"
                tabIndex={0}
                aria-pressed="false"
                onClick={() => openModal(item)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(item)}
                data-aos="fade-up"
                data-aos-delay={delay}
                className={clsx(
                  'relative p-6 rounded-2xl bg-linear-to-br from-white to-slate-50 border border-slate-100 shadow-sm',
                  'hover:shadow-2xl cursor-pointer',
                  'focus:outline-none focus:ring-4 focus:ring-slate-100'
                )}
              >
                {/* decorative top-right accent */}
                <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-linear-to-tr from-indigo-50 to-sky-50 pointer-events-none opacity-60 blur-[18px]" />

                <div className="flex flex-row sm:flex-col items-center gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-linear-to-tr from-slate-100 to-slate-50 border border-slate-200">
                    <img src={item.logo} alt={`${item.title} logo`} className="w-8 h-8 object-contain" />
                  </div>

                  <div className="flex-1">
                    <h6 className="font-semibold">{item.title}</h6>
                    <p className="text-sm text-slate-500 mt-1">{item.para}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Professional</span>
                  <span className="text-sm text-slate-700 font-medium">Learn more →</span>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  );
};

export default Services;
