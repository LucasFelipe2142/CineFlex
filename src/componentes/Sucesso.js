import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router';

export default function Sucesso() {
    const navigate = useNavigate();
    const { state: { cpf, nome, assentos, filme, data } } = useLocation();
    console.log(nome)
    return (
        <Container>
            <div className='text'>
                <div>   Pedido feito</div>
                <div> com sucesso</div>
            </div>

            <div className='filme'>
                <div><strong>Filme e seção</strong></div>
                <div>
                    <div>{filme.filme}</div>
                    {data.data}
                </div>

            </div>

            <div className='ingresso'>
                <div><strong>Ingressos</strong></div>
                <div className='espaco'>
                    {assentos.num.map((cad, index) => (
                        <div key={index}>
                            Assento {" " + cad}
                        </div>

                    ))}
                </div>
            </div>

            <div className='ingresso'>
                <div><strong>Comprador</strong></div>
                <div className='espaco'>
                    <div>Nome:{" " + nome.nam}</div>
                    CPF:{" " + cpf.cpf[0] + cpf.cpf[1] + cpf.cpf[2] + '.' + cpf.cpf[3] + cpf.cpf[4] +
                        cpf.cpf[5] + '.' + cpf.cpf[6] + cpf.cpf[7] + cpf.cpf[8] + '-' + cpf.cpf[9] + cpf.cpf[10]}
                </div>
            </div>

            <Button onClick={() => navigate('/')}>Voltar para Home</Button>

        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
.text{
    height: 110px;
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     
    letter-spacing: 0.04em;

    color: #247A6B;
}

.filme{
    width: 100%;
    height: 110px;

    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 0.04em;

    color: #293845;

    margin-left: 35px;

    div{
        margin-top: 5px;
    }
}

.ingresso{
    width: 100%;
    height: 110px;

    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 0.04em;

    color: #293845;

    margin-left: 35px;
    margin-top: 40px;

    .espaco{
        margin-top: 10px;
    }
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