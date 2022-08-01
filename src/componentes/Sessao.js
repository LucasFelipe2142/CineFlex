import styled from 'styled-components';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from './Footer'

export default function Sessao() {

    const params = useParams();
    const [sessao, setSessao] = useState([])
    let text_footer = sessao.movie.title + ' ' + sessao.day.weekday + " - " + sessao.name

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

            <div className='amostras'>

                <div className='separacao'>
                    <Assento cor='#1AAE9E'> </Assento>
                    <p>Selecionado</p>
                </div>

                <div className='separacao'>
                <Assento cor='#C3CFD9'> </Assento>
                <p>Disponivel</p>
                </div>

                <div className='separacao'>
                <Assento cor='#FBE192'></Assento>
                <p>Indisponivel</p>
                </div>

            </div>

            <div className='dados'>
                <Dados>
                    Nome do Comprador
                    <input type="text" name="input" value="Digite seu nome..."></input>
                </Dados>

                <Dados>
                Cpf do Comprador
                    <input type="text" name="input" value="Digite seu cpf..."></input>
                </Dados>
            </div>

            <Button>Reservar assento(s)</Button>

            <Footer img = {sessao.movie.posterURL} text ={text_footer} />

        </Container>
    )
}

function Props_assento(props) {

    let cor = props.cor == true ? '#8DD7CF' : '#C3CFD9'

    return (
        <Assento cor={cor}>
            {props.numero}
        </Assento>
    )
}


const Dados = styled.div`
    width: 327px;
    height: 25px;
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    margin-top: 55px;

    color: #293845;

    input{
        box-sizing: border-box;
        margin-top: 2px;
        width: 327px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;


        width: 309px;
        height: 50px;

        font-family: 'Roboto',sans-serif;
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;

        color: #AFAFAF;
        padding-left: 18px;

    }
`


const Assento = styled.div`
    box-sizing: border-box;

    width: 26px;
    height: 26px;
    left: 57px;
    top: 158px;

    background: ${props => props.cor};
    border: 1px solid #808F9D;
    border-radius: 12px;
    margin-right: 7px;
    margin-bottom: 18px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #000000;
`

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
        width: 374px;
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

    .amostras{
        display: flex;
        justify-content: center;
        margin-right: -27px;
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

const Button = styled.div`
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;

    color: #FFFFFF;
    
    margin-top: 70px;

    margin-bottom: 150px;

`