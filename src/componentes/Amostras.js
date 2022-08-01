import styled from 'styled-components';

export default function Amostras(){
    return(
            <Amostra>

                <div className='separacao'>
                    <Assento cor='#1AAE9E'> </Assento>
                    <p>Indisponivel</p>
                </div>

                <div className='separacao'>
                <Assento cor='#C3CFD9'> </Assento>
                <p>Disponivel</p>
                </div>

                <div className='separacao'>
                <Assento cor='#FBE192'></Assento>
                <p>Selecionado</p>
                </div>

            </Amostra>
    )
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

const Amostra = styled.div`
    display: flex;
    justify-content: center;
    margin-right: -27px;
`