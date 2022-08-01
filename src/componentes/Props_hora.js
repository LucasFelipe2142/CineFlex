import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Props_hora(props) {
    return (
        <Teste>
            <Link to={`/sessao/${props.horario}`}>
                <Hora>
                    {props.hora}
                </Hora>
            </Link>
        </Teste>
    )
}

const Hora = styled.div`
    margin-top: 22px;
    margin-bottom: 22px;
    margin-right: 9px;
    width: 83px;
    height: 43px;
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
    letter-spacing: 0.02em;
    color: #FFFFFF;

`
const Teste = styled.div`
   a{
        text-decoration:none
   } 
`