"use client";
import style from "./SearchModal.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useEffect } from "react";

export default function SearchModal({ setCloseModal, item }) {
    
  useEffect(() => {
    const closeModal = (e) => {
      if (
        e.target.getAttribute("class")?.includes("backdrop") ||
        e.code === "Escape"
      ) {
        setCloseModal(null);
      }
    };

    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    window.addEventListener("click", closeModal);
    window.addEventListener("keydown", closeModal);
    return () => {
      window.removeEventListener("keydown", closeModal);
      window.removeEventListener("click", closeModal);
      body.style.overflow = "auto";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setCloseModal]);

  return (
    <div className={style.backdrop}>
      <div className={style.modal}>
        <AiOutlineCloseCircle
          className={style.closeModalIcon}
          onClick={() => {
            setCloseModal(null);
          }}
        />
        <p>{item.cаtegoryName}</p>
      </div>
    </div>
  );
}
