import styled from 'styled-components';
import { useState } from "react";
import guardar from './Guardar_valor'
let assentos_selecionados = [];
export default function Props_assento(props) {
    const [selecionado, setSelecionado] = useState(true);
   

    let cor = props.cor == true ? '#8DD7CF' : '#C3CFD9'

    return (selecionado ?
        <Assento cor={cor} onClick={() => verifica(props.numero)}>
            {props.numero}
        </Assento> 
        
        :

        <Assento cor={'#FBE192'} onClick={() => verifica()}>
            {props.numero}
        </Assento>
    )

    function verifica(numero){
        if(cor != '#8DD7CF'){
            if(selecionado == true) {
                setSelecionado(!true)
                assentos_selecionados.push(numero)
                guardar(numero,false)
            }
            else {
                assentos_selecionados = assentos_selecionados.filter((item) => item !== numero)
                setSelecionado(true)
                guardar(numero,true)
            }
        }
        console.log(assentos_selecionados)
    }    

}



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
