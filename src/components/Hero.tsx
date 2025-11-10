import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        {/* decorative background block with rotated name */}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 gradient-primary bottom-0 -z-10"
        >
          <h1 className="rotate-90 text-2xl md:text-6xl absolute top-24 -right-8 md:top-[40%] md:right-[-34%] text-[#EAF2FA]">
            {hero.firstName}{' '}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first column: title, resume button, and stats */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2 className="max-w-sm text-center mb-5">{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <a href={hero.resume} target="_blank" className="btn">
              {hero.btnText}
            </a>
          </div>

          {/* stats list */}
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, idx) => (
              <div
                key={idx}
                data-aos={idx === 0 ? "fade-down" : "fade-up"}
                data-aos-offset={idx === 1 ? -5 : 0}
                data-aos-delay={idx * 100}
                className={`flex items-center w-80 gap-5
            ${idx === 1 && ' flex-row-reverse text-right'}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* second column: hero image */}
        <div className="md:h-148 px-2 md:p-0">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
