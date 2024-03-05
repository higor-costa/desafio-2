import React from 'react';

import styles from '../styles/Main.module.css';

const tenis = [
  {
    imgSrc: '../src/assets/img/1.png',
    alt: 'Jordan 1',
  },
  {
    imgSrc: '../src/assets/img/2.png',
    alt: 'Jordan 2',
  },
  {
    imgSrc: '../src/assets/img/3.png',
    alt: 'Jordan 3',
  },
  {
    imgSrc: '../src/assets/img/4.png',
    alt: 'Jordan 4',
  },
  {
    imgSrc: '../src/assets/img/5.png',
    alt: 'Jordan 5',
  },
  {
    imgSrc: '../src/assets/img/6.png',
    alt: 'Jordan 6',
  },
  {
    imgSrc: '../src/assets/img/7.png',
    alt: 'Jordan 7',
  },
  {
    imgSrc: '../src/assets/img/8.png',
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
