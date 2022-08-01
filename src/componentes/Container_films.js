import styled from 'styled-components';
import Flyer from './Flyer'

export default function Container_films() {
    return (

        <Container>
            <div className='text'>
                Selecione o horário
            </div>
            <Flyer />
        </Container>
    )

}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .text{
        width: 374px;
        height: 110px;
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

`;