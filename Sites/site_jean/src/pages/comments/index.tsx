import React from 'react';
import { Container, Modal, Photo, Name } from './styled';
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";

const comments: React.FC = () => {
  return (
    <Container>
        
        <Modal>
            <Photo> H </Photo>
            <Name> Hidraucli Silva
                <div> 
                    Avaliação:
                    <ImStarFull style={{ color: '#F8BC29' }}/>
                    <ImStarFull style={{ color: '#F8BC29' }}/>
                    <ImStarFull style={{ color: '#F8BC29' }}/>
                    <ImStarHalf style={{ color: '#F8BC29' }}/>
                    <ImStarEmpty style={{ color: '#F8BC29' }}/>
                    <br/>
                    Ambiente agradável, simples e organizado. Atendimento muito bom <br/> 
                    e gastronomia excelente! Todos os pedidos, rodízio, foram atendidos <br/>
                    com tempo de espera ótimo.  
                </div>               
            </Name>
        </ Modal>
        <Modal>
            <Photo> H </Photo>
            <Name> Hidraucli Silva
                <div> 
                    Avaliação:
                    <ImStarFull style={{ color: '#F8BC29' }}/>
                    <ImStarFull style={{ color: '#F8BC29' }}/>
                    <ImStarFull style={{ color: '#F8BC29' }}/>
                    <ImStarHalf style={{ color: '#F8BC29' }}/>
                    <ImStarEmpty style={{ color: '#F8BC29' }}/>
                    <br/>
                    Ambiente agradável, simples e organizado. Atendimento muito bom <br/> 
                    e gastronomia excelente! Todos os pedidos, rodízio, foram atendidos <br/>
                    com tempo de espera ótimo.  
                </div>               
            </Name>
        </ Modal>            
                
    </Container > 
  );
}
 
export default comments; 