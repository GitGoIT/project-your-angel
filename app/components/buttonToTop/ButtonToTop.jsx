"use client";

import { useEffect, useState } from "react";
import style from "./buttonToTop.module.scss";
import { FiArrowUp } from "react-icons/fi";

const ButtonToTop = () => {
  const [fromTop, setFromTop] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);

  function listener() {
    setFromTop(window.pageYOffset);
  }

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {fromTop > 200 && (
        <FiArrowUp className={style.buttonToTop} onClick={toTop} />
      )}
    </>
  );
};

export default ButtonToTop;
