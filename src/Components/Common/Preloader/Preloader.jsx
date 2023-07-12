import React from "react";
import preloader from "../../../Assets/preloader.gif";
import s from "./Preloader.module.css";

const Preloader = () => {
    return (
        <img className={s.preloader} src={preloader} alt="Загрузка..."/>
    );
}

export default Preloader;