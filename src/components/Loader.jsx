import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Loader.css';

const Loader = ({ onLoadComplete }) => {
  const counterRef = useRef(null);
  const overlayRef = useRef(null);
  const barsRef = useRef([]);

  useEffect(() => {
    let currentValue = 0;
    let animationFrameId;

    function updateCounter() {
      if (currentValue === 100) {
        return;
      }

      currentValue += Math.floor(Math.random() * 10) + 1;

      if (currentValue > 100) {
        currentValue = 100;
      }

      if (counterRef.current) {
        counterRef.current.textContent = currentValue;
      }

      const delay = Math.floor(Math.random() * 200) + 50;
      animationFrameId = setTimeout(updateCounter, delay);
    }

    updateCounter();

    // GSAP animations
    gsap.to(counterRef.current, {
      delay: 3.5,
      opacity: 0,
      duration: 0.25,
    });

    gsap.to(barsRef.current, {
      delay: 3.5,
      height: 0,
      duration: 1.5,
      stagger: {
        amount: 0.5
      },
      ease: "power4.inOut",
      onComplete: () => {
        if (onLoadComplete) {
          onLoadComplete();
        }
      }
    });

    return () => {
      if (animationFrameId) {
        clearTimeout(animationFrameId);
      }
    };
  }, [onLoadComplete]);

  return (
    <>
      <h1 className="counter" ref={counterRef}>0</h1>

      <div className="overlay" ref={overlayRef}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i} 
            className="bar" 
            ref={el => barsRef.current[i] = el}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Loader;
