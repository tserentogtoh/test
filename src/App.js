import React from 'react'
import Img from "./img/img.jpg"
import Imglil from "./img/test.jpg"
import styled from 'styled-components'
import IMG from './elements/IMG'
import Layer from './elements/Layer'
import Form from './elements/Form'
import icon from './img/logo.png'
import ImageContainer from './elements/ImageContainer'
import Button from './elements/Button'
import Input from './elements/Input'
const IMGlil = styled.img`
  width: 30vW;
  height: 30vh;
  margin:auto;
` 

const Icon = styled.img`
  width: 6rem;
  height: 3.5rem;
  margin: 0.5rem ;
  margin-right:1rem;
  justify-content:center;
`
const Item = styled.div`
border-top:${props=>props.pri ? 'solid 2px #c4c3c3': ''};
display:flex;
flex-direction:${props=>props.pri ? '':'column'} ;
margin:${props=> props.pri ? '':'0rem 4rem'};
`

const Link = styled.a`
text-decoration: none;
margin:0.5rem;
`
const Pa = styled.p`
  font-size:0.8rem;
  color:#818181;
  justify-content:center;
  align-items:center;
`
function App() {
  return (
    <div>
      <ImageContainer>
      <IMG  src={Img}  />
      <Layer>
        <IMGlil src={Imglil} />
        <Item>
          <Form>
              <div >
                <div>
                  <Input                
                    type="text"
                    placeholder="Нэвтрэх нэр"
                  />
                </div>
                <div >
                  <Input
                    type="text"
                    placeholder="Нууц үг"
                  />
                </div>
                <div >
                  <Button >Нэвтрэх</Button>
                </div>
                <Item>
                  <Link href="#">Нууц үгээ мартсан уу?</Link>
                </Item>
                <Item pri>
                  <Icon src={icon}/>
                  <Button pri>Бүртгүүлэх</Button>
                </Item>
              </div>
          </Form>
          <Item>
            <Pa>Hotel management system version 0.2.1</Pa>
          </Item>
        </Item>
      </Layer>
      </ImageContainer>
    </div>
  );
}

export default App;
