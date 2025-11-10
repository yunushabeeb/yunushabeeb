// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper/types';


// import Swiper and modules styles
import { Pagination, Autoplay, Keyboard, A11y } from 'swiper/modules';
import { useState, useRef } from 'react';
import clsx from 'clsx';
import { content } from '../Content';

interface Item {
  img: string;
  name: string;
  role?: string;
  review: string;
}

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="py-14" aria-labelledby="testimonials-title">
      <div className="md:container px-5 my-10">
        <h2 id="testimonials-title" className="title" data-aos="fade-down">
          {Testimonials.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Testimonials.subtitle}
        </h4>
        <br />

        <Swiper
          onSwiper={(s) => (swiperRef.current = s)}
          direction="horizontal"
          centeredSlides={true}
          spaceBetween={24}
          // responsive slides per view for better layout on each breakpoint
          breakpoints={{
            320: { slidesPerView: 1.05 },
            640: { slidesPerView: 1.15 },
            1024: { slidesPerView: 1.3 },
            1280: { slidesPerView: 1.4 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false,
            stopOnLastSlide: false

           }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          a11y={{
            prevSlideMessage: 'Previous testimonial',
            nextSlideMessage: 'Next testimonial',
          }}
          onSlideChange={(e) => setActiveIndex(e.realIndex)}
          modules={[Pagination, Autoplay, Keyboard, A11y]}
          className="min-h-2 md:max-w-4xl pb-12"
          data-aos="fade-left"

        >
          {Testimonials.testimonials_content.map((item: Item, i) => {
            const isActive = i === activeIndex;
            return (
              <SwiperSlide key={item.name || i}>
                <article
                  className={clsx(
                    'duration-500 mx-6 p-6 rounded-2xl flex items-center gap-6 w-full transition-transform',
                    'bg-light_primary border border-slate-200',
                    isActive
                      ? 'scale-100 shadow-2xl ring-1 ring-slate-100'
                      : 'scale-90 blur-sm opacity-80'
                  )}
                  aria-hidden={!isActive}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 rounded-full shrink-0 object-cover"
                    loading="lazy"
                    width="80"
                    height="80"
                  />
                  <div>
                    <p className="sm:text-base text-sm leading-relaxed text-slate-700">
                      {item.review}
                    </p>
                    <br />
                    <h6 className="text-sm md:text-md lg:text-lg font-semibold">
                      {item.name}
                    </h6>
                    {item.role && (
                      <p className="text-xs text-slate-400">{item.role}</p>
                    )}
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
