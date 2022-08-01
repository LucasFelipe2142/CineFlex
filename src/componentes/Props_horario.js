import styled from 'styled-components';
import Props_hora from './Props_hora'
export default function Props_horarios(props) {
    return (
        <>
            <Container_horarios>
                {props.dia} - {props.data}
                <div className='horarios'>
                     {props.horarios.map((hora, index) => (<Props_hora key = {index} hora={hora.name} horario ={hora.id} />))}
                </div>
            </Container_horarios>
        </>
    )
}

const Container_horarios = styled.div`
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    letter-spacing: 0.02em;
    margin-left: 24px;

    .horarios{
        display: flex;
    }
`