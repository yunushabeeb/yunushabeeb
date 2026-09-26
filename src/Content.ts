// import images
import Hero_person from './images/Hero/passport.png';

import figma from './images/Skills/figma.png';
import mongodb from './images/Skills/mongodb.png';
import next from './images/Skills/nextjs.png';
import reactjs from './images/Skills/react.png';
import typescript from './images/Skills/typescript.png';
import nodejs from './images/Skills/node.png';
import nestjs from './images/Skills/nestjs.svg';
import postgresql from './images/Skills/postgresql.svg';
import docker from './images/Skills/docker.svg';
import cybersecurity from './images/Skills/cybersecurity.svg';
import testing from './images/Skills/testing.svg';

import services_logo1 from './images/Services/web.svg';
import services_logo2 from './images/Services/security.svg';
import services_logo3 from './images/Services/mobile.svg';

import project1 from './images/Projects/live-docs.png';
import project2 from './images/Projects/horizon.png';
import project3 from './images/Projects/aora.png';
import project4 from './images/Projects/xora.png';
import project5 from './images/Projects/carepulse.png';
import project6 from './images/Projects/3d.png';
import project7 from './images/Projects/restate.png';
import project8 from './images/Projects/storeit.png';
import project9 from './images/Projects/bookwise.png';

import person_project from './images/Hero/person.png';

import avatar1 from './images/Testimonials/avatar1.png';
import avatar2 from './images/Testimonials/avatar2.png';
import avatar3 from './images/Testimonials/avatar3.png';

// import icons from react-icons
import { GrMail } from 'react-icons/gr';
import { MdArrowForward, MdCall } from 'react-icons/md';
// import { BsInstagram } from 'react-icons/bs';
import { TbSmartHome } from 'react-icons/tb';
import { BiUser } from 'react-icons/bi';
import { RiServiceLine, RiProjectorLine } from 'react-icons/ri';
import { MdOutlinePermContactCalendar } from 'react-icons/md';

const {
  bookwise,
  storeit,
  carepulse,
  horizon,
  aora,
  developer,
  livedocs,
  xora,
  restate,
} = {
  bookwise: {
    source: 'https://github.com/d-code-h/bookwise',
    live: 'https://www.bookwise.yunushabeeb.me',
  },
  storeit: {
    source: 'https://github.com/d-code-h/storeit',
    live: 'https://www.storeit.yunushabeeb.me',
  },
  carepulse: {
    source: 'https://github.com/d-code-h/carepulse',
    live: 'https://www.carepulse.yunushabeeb.me',
  },
  horizon: {
    source: 'https://github.com/d-code-h/horizon-bank',
    live: 'https://www.horizon.yunushabeeb.me',
  },
  aora: {
    source: 'https://github.com/d-code-h/aora',
    live: 'https://drive.google.com/file/d/16vUwOoiz7CdWT7AyB6ly-aqGHkaKDjXW/view?usp=sharing',
  },
  developer: {
    source: 'https://github.com/d-code-h/3d-developer-portfolio',
    live: 'https://www.3dportfolio.yunushabeeb.me',
  },
  livedocs: {
    source: 'https://github.com/d-code-h/live-docs',
    live: 'https://www.livedocs.yunushabeeb.me',
  },
  xora: {
    source: 'https://github.com/d-code-h/xora',
    live: 'https://www.xora.yunushabeeb.me',
  },
  restate: {
    source: 'https://github.com/d-code-h/real-scout',
    live: 'https://drive.google.com/file/d/1x_xMw_PoPhOhv0H78OQi8PSUozqzJ5u8/view?usp=drive_link',
  },
};

export const content = {
  nav: [
    {
      link: '#home',
      icon: TbSmartHome,
    },
    {
      link: '#skills',
      icon: BiUser,
    },
    {
      link: '#services',
      icon: RiServiceLine,
    },
    {
      link: '#projects',
      icon: RiProjectorLine,
    },
    {
      link: '#contact',
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: 'MERN & Next.js Developer',
    firstName: 'YUNUS',
    LastName: 'HABEEB HABEEB',
    btnText: 'View Resume',
    image: Hero_person,
    resume: '/Yunus_Habeeb_Resume.pdf',
    hero_content: [
      {
        count: '6+',
        text: 'Years of professional experience',
      },
      {
        count: '30+',
        text: 'Projects delivered across web & mobile',
      },
    ],
  },
  skills: {
    title: 'Skills',
    subtitle: 'Core strengths & tools',
    skills_content: [
      {
        name: 'React',
        para: 'Rich, component-driven UIs and state management.',
        logo: reactjs,
        skills: [
          'Component architecture and state patterns (Context, Redux).',
          'React Hooks and performance optimizations.',
          'SSR/SSG integration with Next.js.',
          'Testing with Jest and React Testing Library.',
        ],
      },
      {
        name: 'Testing',
        para: 'Robust testing practices to ensure stable, maintainable applications.',
        logo: testing,
        skills: [
          'Unit and integration testing with Jest.',
          'Component testing with React Testing Library.',
          'End-to-end coverage with Playwright and Cypress.',
          'Test coverage, mocking, and CI integration with GitHub Actions.',
        ],
      },
      {
        name: 'Next.js',
        para: 'Production-ready React framework for modern web apps.',
        logo: next,
        skills: [
          'Hybrid rendering (SSR/SSG) and routing strategies.',
          'API routes and server actions for resilient backends.',
          'Performance tuning, image & asset optimization.',
          'TypeScript-first development and incremental adoption.',
        ],
      },
      {
        name: 'TypeScript',
        para: 'Type-safe JavaScript for scalable codebases.',
        logo: typescript,
        skills: [
          'Strong typing and generics for resilient APIs.',
          'Improved DX with IntelliSense and safer refactors.',
          'Seamless integration across frontend and backend.',
        ],
      },
      {
        name: 'Figma',
        para: 'Design-to-code workflows and component systems.',
        logo: figma,
        skills: [
          'Translating designs to responsive UI implementations.',
          'Design systems, tokens and consistent spacing systems.',
          'Exporting assets and collaborating with designers.',
        ],
      },
      {
        name: 'Node.js',
        para: 'Scalable backend services and APIs.',
        logo: nodejs,
        skills: [
          'RESTful API design and async architectures.',
          'Authentication, validation, and secure endpoints.',
          'Integrations with databases and third-party services.',
        ],
      },
      {
        name: 'NestJS',
        para: 'Modular backend services with clear boundaries.',
        logo: nestjs,
        skills: [
          'Controller, service, and repository layers, with business logic kept out of controllers.',
          'JWT authentication and role-based access on production APIs.',
          'Typed modules paired with PostgreSQL and a Dockerized local stack.',
        ],
      },
      {
        name: 'PostgreSQL',
        para: 'Relational schema design, migrations, and transactional data.',
        logo: postgresql,
        skills: [
          'Normalized schemas, constraints, and migrations that keep records consistent.',
          'Indexes, query plans, and transactions around payments and writes.',
          'Access through Drizzle and Prisma from Node.js and Next.js services.',
        ],
      },
      {
        name: 'Docker',
        para: 'Repeatable setups for services and their databases.',
        logo: docker,
        skills: [
          'Images for Node.js services and multi-container Compose stacks.',
          'App, database, migrations, and health checks brought up together.',
          'A local setup other engineers can run without a custom machine.',
        ],
      },
      {
        name: 'MongoDB',
        para: 'Document data modeling, aggregations, and query performance.',
        logo: mongodb,
        skills: [
          'Schema design for collections that stay queryable as they grow.',
          'Aggregation pipelines, indexes, and query optimization.',
          'Integration with Node.js services and serverless platforms.',
        ],
      },
      {
        name: 'Cybersecurity',
        para: 'Secure development and hardening of web applications.',
        logo: cybersecurity,
        skills: [
          'Secure-by-design choices in auth, input handling, and configuration.',
          'OWASP-aware review and practical fixes during feature work.',
          'Threat modeling that shapes how endpoints and data access are built.',
        ],
      },
      {
        name: 'React Native',
        para: 'Cross-platform mobile apps with native performance.',
        logo: reactjs,
        skills: [
          'Navigation, performance and native integrations.',
          'State management and offline strategies.',
          'Publishing workflows for iOS and Android.',
        ],
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: 'Services',
    subtitle: 'How I can help',
    service_content: [
      {
        title: 'Web Development',
        para: 'Designing and building responsive, maintainable web applications using React and Next.js.',
        longPara:
          'I build production-ready web applications focused on performance, accessibility and maintainability. Typical engagements include feature development, performance tuning, and production hardening using modern tooling (Next.js, TypeScript, Tailwind).',
        features: [
          'Responsive UI & component architecture',
          'SSR/SSG with Next.js and optimized bundling',
          'Accessibility (a11y) and performance audits',
          'Integration with third-party APIs and auth',
        ],
        logo: services_logo1,
      },
      {
        title: 'Cybersecurity Services',
        para: 'Security assessments and remediation for web applications.',
        longPara:
          'Practical security reviews and remediation plans tailored to web apps. I focus on common vulnerabilities, secure configuration and developer-friendly mitigation strategies to reduce risk without slowing releases.',
        features: [
          'OWASP Top 10 review & practical fixes',
          'Dependency and configuration hardening',
          'Security coding guidance and CI checks',
          'Threat modelling and remediation roadmap',
        ],
        logo: services_logo2,
      },
      {
        title: 'Mobile App Development',
        para: 'Cross-platform mobile apps built with React Native and Expo.',
        longPara:
          'End-to-end mobile development from prototyping to store submission. I deliver performant, accessible mobile experiences with maintainable codebases and CI/CD pipelines.',
        features: [
          'Feature-driven architecture with React Native/Expo',
          'Offline support & performance optimization',
          'Native integrations and store submission',
          'Testing and release automation',
        ],
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: 'Latest Projects',
    subtitle: 'Selected work',
    image: person_project,
    nav: ['All', 'Web', 'Mobile'],
    // nav: ['All', 'Web', 'UX', 'Mobile'],
    project_content: [
      {
        title: 'University LMS',
        image: project9,
        live: bookwise.live,
        code: bookwise.source,
        category: 'web',
        desc: 'A production-ready library management platform with user roles, borrowing workflows and automated notifications. Built for reliability and scalable data handling using Next.js and PostgreSQL.',
        techs: [
          'Next.js',
          'TypeScript',
          'PostgreSQL',
          'Tailwind CSS',
          'Drizzle ORM',
          'NextAuth',
        ],
      },
      {
        title: 'StoreIt',
        image: project8,
        live: storeit.live,
        code: storeit.source,
        category: 'web',
        desc: 'A modern file storage and sharing app with intuitive dashboard, secure sharing and advanced filtering. Focused on usability and robust file handling.',
        techs: [
          'Next.js',
          'React',
          'Appwrite',
          'TypeScript',
          'Tailwind CSS',
        ],
      },
      {
        title: 'Real Scout',
        image: project7,
        live: restate.live,
        code: restate.source,
        category: 'mobile',
        desc: 'A full-stack real estate app for browsing listings, managing profiles and authentication. Built with React Native for a native-feeling mobile experience.',
        techs: [
          'React Native',
          'Expo',
          'TypeScript',
          'React Navigation',
        ],
      },
      {
        title: 'LiveDocs',
        image: project1,
        live: livedocs.live,
        code: livedocs.source,
        category: 'web',
        desc: 'A collaborative, real-time document editor with permissions and live cursors. Optimized for teamwork and low-latency collaboration.',
        techs: [
          'Next.js',
          'Liveblocks',
          'Lexical',
          'TypeScript',
        ],
      },
      {
        title: 'Horizon Bank',
        image: project2,
        live: horizon.live,
        code: horizon.source,
        category: 'web',
        desc: 'A responsive banking dashboard with secure authentication, interactive charts and transaction management. Built for clarity, performance and data integrity.',
        techs: [
          'Next.js',
          'React',
          'Tailwind CSS',
          'Chart.js',
        ],
      },
      {
        title: 'Aora',
        image: project3,
        live: aora.live,
        code: aora.source,
        category: 'mobile',
        desc: 'A mobile app for browsing and sharing AI-generated videos with smooth animations and social features. Built for speed and immersive interaction on mobile devices.',
        techs: [
          'React Native',
          'Appwrite',
          'NativeWind',
        ],
      },
      {
        title: 'Xora (SaaS Landing)',
        image: project4,
        live: xora.live,
        code: xora.source,
        category: 'web',
        desc: 'A polished SaaS landing page demonstrating product value with interactive sections and strong visual hierarchy. Focused on conversion and performance.',
        techs: [
          'React',
          'Tailwind CSS',
          'TypeScript',
        ],
      },
      {
        title: 'CarePulse',
        image: project5,
        live: carepulse.live,
        code: carepulse.source,
        category: 'web',
        desc: 'A healthcare scheduling app that streamlines appointment booking and provider coordination. Built with accessibility and user experience in mind.',
        techs: [
          'Next.js',
          'React',
          'Tailwind CSS',
        ],
      },
      {
        title: '3D Interactive Portfolio',
        image: project6,
        live: developer.live,
        code: developer.source,
        category: 'web',
        desc: 'An interactive 3D portfolio showcasing real-time models and animations built with Three.js and React Three Fiber. Designed to delight and demonstrate advanced frontend capabilities.',
        techs: [
          'React',
          'Three.js',
          'React Three Fiber',
        ],
      },
    ],
  },
  Testimonials: {
    title: 'Testimonials',
    subtitle: 'Client feedback',
    testimonials_content: [
      {
        review:
          '“Yunus delivered a beautiful, easy-to-use website for my bakery. The final product helped increase online orders and showcased our offerings perfectly.”',
        img: avatar1,
        name: 'Mrs. Maria Loyin',
      },
      {
        review:
          '“Yunus built a secure and reliable voting platform for our student elections. His attention to detail and problem-solving were exceptional.”',
        img: avatar2,
        name: 'Social Director, SUG FUTMinna (2023)',
      },
      {
        review:
          '“Yunus is dependable and technically strong. His work consistently exceeded our expectations at Binary Computers.”',
        img: avatar3,
        name: 'Mr. Ibrahim, CEO of Binary Computers',
      },
    ],
  },

  Contact: {
    title: 'Contact Me',
    subtitle: 'Get in touch',
    social_media: [
      {
        text: 'habeebdh1@gmail.com',
        icon: GrMail,
        link: 'mailto:habeebdh1@gmail.com',
      },
      {
        text: '+234 813 687 6564',
        icon: MdCall,
        link: 'https://wa.me/8136876564',
      },
    ],
  },
};
