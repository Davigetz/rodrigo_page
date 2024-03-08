import { useRef, useState } from 'react';
import logo from '../logo_id_factory.svg';
import './home-style.css';
import interes from '../data/texto.json';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export function HomePage() {
  const texto = interes.texto2;
  const contenedor = useRef<HTMLDivElement>(null);
  const tl = useRef();

  useGSAP(
    () => {
      // @ts-ignore
      tl.current = gsap
        .timeline()
        .to('.circulo', { opacity: 1, width: 600, height: 600, duration: 0.6 })
        .from(
          '.logo',
          {
            y: -200,
            duration: 0.6,
          },
          '<',
        )
        .from(
          '.logo',
          {
            rotate: -360,
            duration: 1,
          },
          '<',
        );
    },
    { scope: contenedor },
  );

  return (
    <div className="banner" ref={contenedor}>
      <div className="circulo" />
      {/* {texto} */}
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
}
