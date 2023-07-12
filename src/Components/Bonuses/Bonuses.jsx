import React from 'react';
import s from './Bonuses.module.css';
import logo from '../../Assets/logo.png';
import info from '../../Assets/information-button.svg';
import arrow from '../../Assets/arrow-button.svg';
import fire from '../../Assets/fire-img.svg';

const Bonuses = (props) => {
    return(
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.header}>
                    <img className={s.logo} src={logo} alt="Логотип"/>
                    <img className={s.info} src={info} alt="Инфо" />
                </div>
                <div className={s.description}>
                    <div className={s.content}>
                        <div className={s.bonuses}>
                            <div className={s.amount}>
                                <p>300 бонусов</p>
                            </div>
                            <div className={s.burnDown}>
                                <p>29.03 сгорит <img className={s.fireImg} src={fire} alt="🔥"/> 250 бонусов</p>
                            </div>
                        </div>
                        <img className={s.arrowButton} src={arrow} alt="Перейти" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bonuses;