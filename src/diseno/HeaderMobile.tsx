import React, { useRef, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import logo from '../logo_id_factory.svg';
import { useClickAway } from 'react-use';
import routes from '../utils/routes.json';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link, NavLink, useLocation } from 'react-router-dom';

gsap.registerPlugin(useGSAP);

const HeaderMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const listaRef = useRef(null);
  let location = useLocation();

  useClickAway(ref, () => setOpen(false));
  useGSAP(
    () => {
      if (isOpen)
        gsap.fromTo(
          '.mi-lista',
          { scale: 0, y: '-80' },
          {
            y: 0,
            scale: 1,
            stagger: 0.1,
            ease: 'easeOutElastic',
          },
        );
    },
    { dependencies: [isOpen], scope: listaRef },
  );

  return (
    <header className="mask-mobile">
      <NavLink to="">
        <img src={logo} className="logo-mobile" alt="logo" width={'10%'} height={'10%'} />
      </NavLink>
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      {isOpen && (
        <div
          ref={listaRef}
          className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 b-[#353644c9] border-b-white/20"
        >
          <ul className="grid gap-2">
            {routes.map((route) => {
              return (
                <li
                  key={route.title}
                  className="mi-lista w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-slate-500 via-[#3c4575] to-slate-500
                  "
                >
                  {location.pathname === `/${route.href}` ? (
                    <NavLink
                      onClick={() => setOpen((prev) => !prev)}
                      to=""
                      className={
                        'flex items-center justify-between w-full p-5 rounded-xl bg-[#353644] shadow-xl text-white'
                      }
                    >
                      Inicio
                    </NavLink>
                  ) : (
                    <NavLink
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        'flex items-center justify-between w-full p-5 rounded-xl bg-[#353644] shadow-xl text-white'
                      }
                      to={route.href}
                    >
                      <span className="flex gap-1 text-lg">{route.title}</span>
                    </NavLink>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default HeaderMobile;
