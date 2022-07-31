import styled from 'styled-components';
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Filme(){
    const params = useParams();
    const [filme, setFilme] = useState([]);

    useEffect(() => {
        const requisicao = axios.get(
            `https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.id}/showtimes`
        );

        requisicao.then((film) => { setFilme(film.data) });
    }, []);

    console.log(filme)
    return(
        <Container>
            <text>
                Selecione o horário
            </text>
            <Container_horarios>
                {/* {filme.days.weekday} - {filme.days.date} */}
            </Container_horarios>
        </Container>
    )

}

const Container = styled.div`

`

const Container_horarios = styled.div`

`