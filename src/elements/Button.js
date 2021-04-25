import styled from 'styled-components'

const Button = styled.button`
  text-align: center;
  font-size: 1rem;
  color: #fcfafa;
  border: none;
  background-color:${props => props.pri ?'blue' :'#e24d4d'};
  justify-content:center;
  border-radius: 5px;
  padding: ${props=>props.pri ? '':'0.8rem 0rem'};
  width:${props =>props.pri ? '12.5rem': '20rem'};
  cursor: pointer;
  transition: 0.2s;
  margin: 0.5rem 0;
  margin-top:${props => props.pri ? '1.5rem ': '0.5rem'};
`

export default Button;