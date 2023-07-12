import React, { useEffect, useState } from "react";
import Bonuses from "./Bonuses";
import { getAccessTokenAPI, getBonusesAPI } from "../../API/api";
import Preloader from "../Common/Preloader/Preloader";

const BonusesContainer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [bonuses, setBonuses] = useState({});

    useEffect(() => {
        setIsLoading(true);
        getAccessToken();
    }, []);

    const getAccessToken = () => {
        getAccessTokenAPI()
            .then(res => {
                if (res.data.result.status) {
                    setError(res.data.result.message);
                    setIsLoading(false);
                } else {
                    getBonuses(res.data.accessToken);
                }
            })
            .catch(err => {
                setError(err);
                setIsLoading(false);
            });
    }

    const getBonuses = (accessToken) => {
        getBonusesAPI(accessToken)
            .then(res => {
                if (res.data.resultOperation.status) {
                    setError(res.data.resultOperation.message);
                } else {
                    setBonuses(res.data.data);
                }
            })
            .catch(err => setError(err))
            .finally(() => setIsLoading(false));
            
    }

    return isLoading ? <Preloader/> : <Bonuses bonuses={bonuses} error={error}/>;
}

export default BonusesContainer;