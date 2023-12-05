"use client";

import styled from "./styled.module.css";
import Image from "next/image";
import srcDefault1 from "../../../public/images/00.jpg";
import srcDefault2 from "../../../public/images/10.jpg";
import srcDefault3 from "../../../public/images/01.jpg";
import srcDefault4 from "../../../public/images/11.jpg";

import { Dispatch, SetStateAction, useState } from "react";

export function ImagesHeader() {
  const [picture1, setPicture1] = useState(false);
  const [picture2, setPicture2] = useState(false);
  const [picture3, setPicture3] = useState(false);
  const [picture4, setPicture4] = useState(false);
  const [complete, setComplete] = useState(false);

  const handlerActive = (callback: Dispatch<SetStateAction<boolean>>) => () => {
    callback(true);
    setTimeout(() => {
      setComplete(true);
    }, 500);
  };

  return (
    <div className={styled.containerHeader}>
      {/* Cuadrante 1 */}
      <picture
        style={{ transform: complete ? "" : "translate(-100%,-100%)" }}
        className={styled.picture1}
      >
        <Image
          onLoad={handlerActive(setPicture1)}
          className={styled.img}
          src={srcDefault1}
          alt="hola"
        />
      </picture>

      {/* Cuadrante 2 */}
      <picture
        style={{ transform: complete ? "" : "translate(100%,-100%)" }}
        className={styled.picture2}
      >
        <Image
          onLoad={handlerActive(setPicture2)}
          className={styled.img}
          src={srcDefault2}
          alt="hola"
        />
      </picture>

      {/* Cuadrante 3 */}
      <picture
        style={{ transform: complete ? "" : "translate(-100%,100%)" }}
        className={styled.picture3}
      >
        <Image
          onLoad={handlerActive(setPicture3)}
          className={styled.img}
          src={srcDefault3}
          alt="hola"
        />
      </picture>

      {/* Cuadrante 4 */}
      <picture
        style={{ transform: complete ? "" : "translate(100%,100%)" }}
        className={styled.picture4}
      >
        <Image
          onLoad={handlerActive(setPicture4)}
          className={styled.img}
          src={srcDefault4}
          alt="hola"
        />
      </picture>
    </div>
  );
}
