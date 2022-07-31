import styled from 'styled-components';

export default function Topo() {
    return (
        <>
            <Top>
                <p>CINEFLEX</p>
            </Top>
            <Compensando>

            </Compensando>
        </>
    )
}

const Top = styled.div`
	position: fixed;
    min-width: 375px;
    height: 67px;
    left: 0px;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #C3CFD9;

    p{
        font-family: 'Roboto',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;

        color: #E8833A;
    }
    

`;

const Compensando = styled.div`
    height: 67px;

`