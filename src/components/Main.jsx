import React from 'react';

import styles from '../styles/Main.module.css';
import srcJordan1 from '../assets/img/1.png';
import srcJordan2 from '../assets/img/2.png';
import srcJordan3 from '../assets/img/3.png';
import srcJordan4 from '../assets/img/4.png';
import srcJordan5 from '../assets/img/5.png';
import srcJordan6 from '../assets/img/6.png';
import srcJordan7 from '../assets/img/7.png';
import srcJordan8 from '../assets/img/8.png';

const tenis = [
  {
    imgSrc: srcJordan1,
    alt: 'Jordan 1',
  },
  {
    imgSrc: srcJordan2,
    alt: 'Jordan 2',
  },
  {
    imgSrc: srcJordan3,
    alt: 'Jordan 3',
  },
  {
    imgSrc: srcJordan4,
    alt: 'Jordan 4',
  },
  {
    imgSrc: srcJordan5,
    alt: 'Jordan 5',
  },
  {
    imgSrc: srcJordan6,
    alt: 'Jordan 6',
  },
  {
    imgSrc: srcJordan7,
    alt: 'Jordan 7',
  },
  {
    imgSrc: srcJordan8,
    alt: 'Jordan 8',
  },
];

const Main = () => {
  return (
    <main>
      <section className={styles.conteinerTenis}>
        <h2 className={styles.titulo}>Destaques</h2>
        <p className={styles.frase}>
          Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.
        </p>
        <ul className={styles.listaTenis}>
          {tenis.map((item, index) => {
            return (
              <li className={styles.tenis} key={index}>
                <img src={item.imgSrc} alt={item.alt} />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Main;
