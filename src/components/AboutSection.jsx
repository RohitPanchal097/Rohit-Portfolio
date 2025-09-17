import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starsRef = useRef([]);
  useEffect(() => {
    //register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    //title animation

    gsap.fromTo(
      titleRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: -300,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    //intro animation
    gsap.fromTo(
      introRef.current,
      {
        y: 100,
        opacity: 0,
        filter: "bluer(10px)",
      },
      {
        y: -400,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    //stars animation
    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1; // Alternate direction for each star
      const speed = 0.5 + Math.random() * 0.5; // Random speed between 0.5 and 1.5
      gsap.to(star, {
        x: `${direction * (100 + index * 20)}`,
        y: `${direction * -50 - index * 10}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
    
  }, []);
    const addToStars = (el) => {
        if (el && !starsRef.current.includes(el)) {
            starsRef.current.push(el);
        }}
  return (
    <section
      ref={sectionRef}
      className="h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]"
    >
      <div  className="absolute inset-0 overflw-hidden ">
        {/*starts*/}
        {[...Array(10)].map((_, i) => (
          <div
          ref={addToStars}
            key={i}
            className="absolute rounded-full "
            style={{
              width: `${10 + i * 3}px`,
              height: `${10 + i * 3}px`,
              backgroundColor: "white",
              opacity: 0.2 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold sm:mb-16 text-center text-white opacity-0"
        >
          About Me
        </h1>
      </div>

      <div
        ref={introRef}
        className="absolute lg:bottom-[-20rem] md:bottom-[-10rem] bottom-[-20rem] left-0 w-full flex md:flex-row flex-col items-center justify-between lg:px-24 px-5 opacity-1"
      >
        <h3 className="text-sm md:text-2xl font-bold text-purple-200 z-50 lg:max-w-[45rem] max-w-[20rem] tracking-wider md:mt-20 mt-4 ">
          I'm a passionate web developer with a knack for creating dynamic and
          responsive web applications. With expertise in React.js, Tailwind CSS,
          and Framer Motion, I strive to deliver exceptional user experiences
          through clean and efficient code.
        </h3>

        <img
          className="lg:h-[40rem] md:h-[30rem] h-[20rem] mix-blend-lighten"
          src="/person.png"
          alt="profile-img"
        />
      </div>
    </section>
  );
};

export default AboutSection;
