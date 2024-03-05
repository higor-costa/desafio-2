import React from 'react';

import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.cabecalho}>
      <p>Ganhe R$ 10,00 de desconto no frete</p>
      <h1 className={styles.nomeLoja}>Jordan Shoes</h1>
      <div className={styles.conteinerImagemBg}>
        <div className={styles.filtroImagemBg}></div>
        <h2>A melhor loja de Jordan</h2>
        <p>
          O tênis Jordan é fruto de uma velha 
          e forte parceria entre Nike e o jogador Michel Jordan.
        </p>
      </div>
    </header>
  );
}

export default Header;
