
import styled from 'styled-components';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Props_horarios from './Props_horario';
import Footer from './Footer'

export default function Filme() {
    const params = useParams();
    const [filme, setFilme] = useState([]);

    useEffect(() => {
        const requisicao = axios.get(
            `https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.id}/showtimes`
        );

        requisicao.then((film) => { setFilme(film.data) });
    }, []);

    console.log(filme)

    if(filme.length === 0){
        return <img src = ""/>
    }

    return (
        <Container>
            <div className='text'>
                Selecione o horário
            </div>

             {filme.days.map((horarios, index) => (<Props_horarios key = {index} dia={horarios.weekday}
                data={horarios.date} horarios={horarios.showtimes} />))}

            <Footer img = {filme.posterURL} text = {filme.title} />

        </Container>
    )

}

const Container = styled.div`

    .text{
        width: 374px;
        height: 110px;

        font-family: 'Roboto',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        letter-spacing: 0.04em;

        color: #293845;

    }
`