import { createElement, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { content } from '../Content';

const Contact = () => {
  const { Contact } = content;
  const form = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);

  // simple client-side email validation (extra check before sending)
  const isValidEmail = (email: string) =>
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$/.test(email);

  // Sending Email
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;

    const fd = new FormData(form.current as HTMLFormElement);
    const email = fd.get('user_email')?.toString() ?? '';
    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    // honeypot check (bots often fill hidden fields)
    if (fd.get('website')) {
      // silently ignore spam submissions
      return;
    }

    setSending(true);

    try {
      const res = await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current as HTMLFormElement,
        import.meta.env.VITE_PUBLIC_ID
      );

      if (res && res.text === 'OK') {
        form.current?.reset();
        toast.success('Email sent successfully.');
      } else {
        toast.error('Could not send email. Try again later.');
      }
    } catch (error) {
      console.error('Email send error:', error);
      toast.error('Something went wrong. Try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="bg-dark_primary text-white py-14" id="contact" aria-label="Contact section">
      <Toaster />
      <div className="md:container px-5 py-1 my-10">
        <h2 className="title text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5 bg-white/5 p-6 rounded-lg border border-white/10"
            aria-busy={sending}
            role="form"
          >
            <label className="sr-only" htmlFor="from_name">Name</label>
            <input
              id="from_name"
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded bg-transparent text-white placeholder:text-slate-300"
            />

            <label className="sr-only" htmlFor="user_email">Email address</label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              placeholder="Email address"
              required
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              className="border border-slate-600 p-3 rounded bg-transparent text-white placeholder:text-slate-300"
            />

            <label className="sr-only" htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="border border-slate-600 p-3 rounded bg-transparent text-white placeholder:text-slate-300"
            />

            {/* honeypot field to trap bots */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

            <label className="sr-only" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44 bg-transparent text-white placeholder:text-slate-300"
              required
            ></textarea>

            <button
              type="submit"
              className="btn self-start bg-white text-dark_primary inline-flex items-center gap-2 disabled:opacity-60"
              disabled={sending}
              aria-disabled={sending}
            >
              {sending ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-dark_primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </form>

          <aside className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((contentItem, i) => (
              <div
                key={contentItem.text || i}
                data-aos="fade-down"
                data-aos-delay={i * 180}
                className="flex items-center gap-3"
              >
                <span className="text-white text-xl">{createElement(contentItem.icon)}</span>
                <a
                  className="font-Poppins text-white hover:underline"
                  href={contentItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={contentItem.text}
                >
                  {contentItem.text}
                </a>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
