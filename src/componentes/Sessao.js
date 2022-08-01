import styled from 'styled-components';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from './Footer'
import Props_assento from './Props_assento';
import Amostras from './Amostras'
import Dados_enviar from './Dados_enviar';


export default function Sessao() {
    const params = useParams();
    const [sessao, setSessao] = useState([])

    useEffect(() => {
        const requisicao = axios.get(
            `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.id}/seats`
        );

        requisicao.then((Selecione) => { setSessao(Selecione.data) });
    }, []);

    console.log(sessao)

    if (sessao.length === 0) {
        return <img src="" />
    }


    return (
        <Container>
            <div className='text'>
                Selecione o(s) assento(s)
            </div>
            <Container_assentos>
                {sessao.seats.map((sec, index) => (<Props_assento key={index} numero={sec.name} cor={sec.isAvailable} />))}
            </Container_assentos>

            <Amostras />

            <Dados_enviar />

            <Footer img = {sessao.movie.posterURL} text ={sessao.movie.title + ' ' + sessao.day.weekday + " - " + sessao.name} />

        </Container>
    )

}


const Container_assentos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-left: 7px;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .text{
        min-width: 374px;
        height: 80px;
        left: 0px;
        top: 67px;

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

    .separacao{
        display: flex;
        flex-direction: column;
        align-items: center;

        font-family: 'Roboto',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;

        color: #4E5A65;

        margin-right: 27px;
    }

    p{
        margin-top: -10px;
    }

    .dados{
        
    }
`;