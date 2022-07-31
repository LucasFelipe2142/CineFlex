import styled from 'styled-components';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Flyer_container() {
    const [flyer, setFlyer] = useState([]);

    useEffect(() => {
        const requisicao = axios.get(
            "https://mock-api.driven.com.br/api/v7/cineflex/movies"
        );

        requisicao.then((fly) => { setFlyer(fly.data) });
    }, []);

    return (
        <>
            {flyer.map((movie, index) => (
                <Link to={`/filme/${movie.id}`}>
                    <Flyer_props key={index} url={movie.posterURL} />
                </Link>))}
        </>
    );

}

function Flyer_props(props) {
    return (
        <Flyer_Style>
            <img src={props.url} />
        </Flyer_Style>
    )
}

const Flyer_Style = styled.div`
    width: 145px;
    height: 209px;
    left: 30px;
    top: 169px;
    margin-bottom: 11px;

    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 129px;
        height: 193px;
    }
`