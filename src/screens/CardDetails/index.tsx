import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Acessories,
    Footer
} from './styles';

export function CardDetails(){
    return (
        <Container>
            <Header>
                <BackButton onPress={() => {}} />
            </Header>

            <CarImages>
                <ImageSlider 
                    imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']}
                />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>Audi</Brand>
                        <Name>RS 5 Coupé</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>

                <Acessories>
                    <Acessory name="380Km/h" icon={speedSvg}/>
                    <Acessory name="3.2s" icon={accelerationSvg}/>
                    <Acessory name="800 HP" icon={forceSvg}/>
                    <Acessory name="Gasoline" icon={gasolineSvg}/>
                    <Acessory name="Auto" icon={exchangeSvg}/>
                    <Acessory name="2 pessoas" icon={peopleSvg}/>
                </Acessories>


                <About>
                    Este automóvel desportivo. Surgiu do lendário touro de lide indultado
                    na praça Real Maestranza de Sevilla, É um belissimo carro para quem gosta de
                    acelerar.
                </About>
            </Content>
            <Footer>
                <Button 
                    title="Confirmar"
                    onPress={() => {}}
                />
            </Footer>
        </Container>
    );
}