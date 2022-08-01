import styled from 'styled-components';
import guardar from './Guardar_valor';
import { useNavigate } from 'react-router';
import { useState } from "react";

export default function Dados_enviar(){
    const navigate = useNavigate();
    const [cpf,setCpf] = useState('')
    const [nam,setNam] = useState('')
    return(
        <>
            <div className='dados'>
                <Dados>
                    Nome do Comprador
                    <input type="text" name="input" placeholder="Digite seu nome..." value={nam} onChange={e => setNam(e.target.value)} />
                </Dados>

                <Dados>
                Cpf do Comprador
                    <input type="text" name="input" placeholder="Digite seu cpf..." value={cpf} onChange={e => setCpf(e.target.value)}/>
                </Dados>
            </div>

            <Button onClick={() => verifica()}>Reservar assento(s)</Button>
        </>
    )
    function verifica(){
        let num = guardar()
        num.pop()
        console.log(num)
        console.log(cpf)
        console.log(nam)
        
        navigate('/sucesso', { state: { cpf: {cpf}, nome: {nam}, assentos: {nam}} });
    }
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