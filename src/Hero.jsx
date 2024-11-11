import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import './Hero.scss';

function Hero() {
  const dotControls = useAnimation();
  const letterControls = useAnimation();
  const eyelidControls = useAnimation();

  useEffect(() => {
    const handleAnimations = () => {
      const isSmallScreen = window.innerWidth <= 650; // Kontrollera om skärmen är mindre än 650px

      // Starta bokstaven õ's animation
      letterControls.start({
        x: 0,
        rotate: 0,
        transition: { 
          type: "spring", 
          stiffness: isSmallScreen ? 45 : 45, // Ändra stiffness beroende på skärmstorlek
          damping: isSmallScreen ? 10 : 10, 
          duration: isSmallScreen ? 1 : 3 
        }
      });

      // Trigga animationen för punkten
      setTimeout(() => {
        dotControls.start({ 
          x: [0, isSmallScreen ? -10 : -10, 0], 
          scaleX: isSmallScreen ? 0.7 : 0.7, 
          transition: { duration: 0.5 } 
        });
      }, 600);

      // Återställ punktens storlek
      setTimeout(() => {
        dotControls.start({ scaleX: 1, transition: { duration: 0.2 } });
      }, 750);

      // Starta ögonlockseffekten
      setTimeout(() => {
        eyelidControls.start({
          y: [0, isSmallScreen ? 11 : 16, 0, isSmallScreen ? 11 : 16, 0],
          transition: { duration: 1, times: [0, 0.5, 1] }
        });
      }, 1500);
    };

    // Kör animationerna baserat på skärmstorlek
    handleAnimations();

    // Valfritt: Lägg till en event listener som lyssnar på skärmstorleksändringar
    window.addEventListener("resize", handleAnimations);

    // Rensa event listener när komponenten unmountas
    return () => window.removeEventListener("resize", handleAnimations);
  }, [dotControls, letterControls, eyelidControls]);

  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            Hello
            <motion.span
              initial={{ scaleX: 1 }}
              animate={dotControls}
            >
              .
            </motion.span>
            <motion.span
              initial={{ x: "100vw", rotate: 360 }}
              animate={letterControls}
              className="letter"
            >
              õ
              <motion.div
                className="eyelid"
                initial={{ y: 0 }}
                animate={eyelidControls}
              />
            </motion.span>
          </h1>
          <h4 className="hero__description">
            My name is <span>Christoffer</span>. I’m a Swedish designer & developer
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Hero;