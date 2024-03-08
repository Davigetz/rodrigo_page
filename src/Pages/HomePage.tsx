import { useRef, useState } from 'react';
import logo from '../logo_id_factory.svg';
import './home-style.css';
import interes from '../data/texto.json';
import gsap from 'gsap';
import SplitType from 'split-type';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export function HomePage() {
  const texto = interes.texto2;
  const deseoTexto = new SplitType('p.intro', { types: 'words' });
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
        )
        .fromTo(
          deseoTexto.words,
          { yPercent: -100, opacity: 0 },
          { yPercent: 0, opacity: 1, stagger: 0.03, ease: 'power4.out' },
        );
    },
    { scope: contenedor },
  );

  return (
    <div className="banner" ref={contenedor}>
      <div className="circulo" />
      <div className="introduccion">
        <img src={logo} className="logo" alt="logo" />
        <p className="intro">{texto}</p>
      </div>
    </div>
  );
}
