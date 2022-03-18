import React from 'react';
import { Container,Table, Text, Image, About } from './styled';

const about: React.FC = () => {
  return (
    <Container>
        <Table>
           <Image>
           ss
            </Image> 
           
           
            <About>
                <h1>Sobre</h1>

                <Text>
                A empresa esta segmentada na area de serviços especializados
                em reparo de portōes eletrônicos com técnicos certificados e <br/>
                com ampla experiencia na área. <br/>
                <br/>
                Buscamos focar o atendimento na comodidade e satisfação do 
                cliente, com serviços de qualidade, alto nível técnico no menor<br/>
                tempo possível. <br/><br/>
                Entre em contato e agende um atendimento agora mesmo.
                </Text>
            </About>
        </Table>  
    </Container>
  );
}
 
export default about;