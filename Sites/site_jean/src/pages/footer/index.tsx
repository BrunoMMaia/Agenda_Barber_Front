import React from 'react';
import { Container, Title, Number } from './styled';

const footer: React.FC = () => {
  return (
    <Container>
        <Title>
        <h1>Precisa de um orçamento? Entre em contato!</h1>
        </Title>
     
        <div>
            <Number>
                <a href='https://wa.me/+554199197701?text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento.'>
                    <img src="/assets/whats.png" />
                </a>
                41 9988-9955
            </ Number>

            Todos Direitos Reservados © 2021. CWB Automação / 41 9988-9955 <br />
            
            <h6>www.devbruno.com.br</h6>
        </div>
    </Container>
  );
}
 
export default footer;