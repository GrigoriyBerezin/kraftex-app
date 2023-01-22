import React from 'react';
import './header.css'
import logo from '../../assets/img/logo.png'
import vector from '../../assets/img/vector.svg'
import kraftex from '../../assets/img/header/kraftex.svg'
import ball from '../../assets/img/header/ball.svg'
import ballvector from '../../assets/img/header/ballvector.svg'

const Header = () => {
  return (
    <header className="header container">
      <div className="header__block">
        <div className="header__hat">
          <img src={logo} alt="logo"/>
          <a className="header__vector" href="#"><img src={vector} alt="vector"/></a>
        </div>
        <div className="header__image">
          <img className="header__kraftex" src={kraftex} alt="kraftex"/>
          <img className="header__ball" src={ball} alt="ball"/>
          {/*<img className="header__ballvector" src={ballvector} alt="ballvector"/>*/}
        </div>
        <p className="header__text">“Ваше благополучие зависит <br/>
          от ваших собственных решений”</p>
        <p className="header__subtext">ДЖОН РОКФЕЛЛЕР</p>
      </div>
    </header>
  )
}

export default Header



