"use client";
import styled from "./styled.module.css";

import srcDefault1 from "../../../public/images/00.jpg";
import srcDefault2 from "../../../public/images/10.jpg";
import srcDefault3 from "../../../public/images/01.jpg";
import srcDefault4 from "../../../public/images/11.jpg";
import Image from "next/image";
import { Suspense, useState } from "react";

export function ImagesHeader() {
  const [picture1, setPicture1] = useState(false);
  const [picture2, setPicture2] = useState(false);
  const [picture3, setPicture3] = useState(false);
  const [picture4, setPicture4] = useState(false);

  const handler1 = () => setPicture1(true);
  const handler2 = () => setPicture2(true);
  const handler3 = () => setPicture3(true);
  const handler4 = () => {
    setPicture4(true);
  };

  return (
    <div className={styled.containerHeader}>
      {/* Cuadrante 1 */}
      <picture className={picture1 ? "" : styled.picture1}>
        <Suspense>
          <Image
            onLoad={handler1}
            className={styled.img}
            src={srcDefault1}
            alt="hola"
          />
        </Suspense>
      </picture>

      {/* Cuadrante 2 */}
      <picture className={picture2 ? "" : styled.picture2}>
        {" "}
        <Suspense>
          <Image
            onLoad={handler2}
            className={styled.img}
            src={srcDefault2}
            alt="hola"
          />{" "}
        </Suspense>
      </picture>

      {/* Cuadrante 3 */}
      <picture className={picture3 ? "" : styled.picture3}>
        {" "}
        <Suspense>
          <Image
            onLoad={handler3}
            className={styled.img}
            src={srcDefault3}
            alt="hola"
          />{" "}
        </Suspense>
      </picture>

      {/* Cuadrante 4 */}
      <picture className={picture4 ? "" : styled.picture4}>
        {" "}
        <Suspense>
          <Image
            onLoad={handler4}
            className={styled.img}
            src={srcDefault4}
            alt="hola"
          />{" "}
        </Suspense>
      </picture>
    </div>
  );
}
