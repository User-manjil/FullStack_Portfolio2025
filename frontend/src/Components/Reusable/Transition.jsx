import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { gsap } from "gsap";

const Transition = ({ children }) => {
  const overlay = useRef();
  const location = useLocation();

  useEffect(() => {
    const tl = gsap.timeline();

    // Slide down (cover screen)
    tl.fromTo(
      overlay.current,
      { y: "-100%" },
      { y: "0%", duration: 0, ease: "power4.inOut" }
    );

    // Slide up (reveal new page)
    tl.to(overlay.current, {
      y: "100%",
      duration: 0.5,
      ease: "power4.inOut",
      delay: 0.2,
    });

    tl.set(overlay.current, { y: "-100%" });
  }, [location.pathname]);

  return (
    <>
      <div
        ref={overlay}
        className="fixed top-0 left-0 w-full h-full bg-(--lime) z-50"
      ></div>
      {children}
    </>
  );
};

export default Transition;