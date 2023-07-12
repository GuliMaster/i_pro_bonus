import React from 'react';
import s from './FakeElement.module.css';

const FakeElement = () => {
    return(
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.description}>
                    <div className={s.content}>
                        <p>Привет, я фейк-элемент!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FakeElement;