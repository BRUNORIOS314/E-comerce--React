import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";


export const CardWidget = styled.div`
margin-left: 0.5rem;
display: flex;
align-items: center;
font-size: 1.2rem;
font-family: sans-serif;

p{
  color: #fff;
    }

svg{
    color: #fff;
    margin-right: 0.5rem;
      }
`;

 export const CardIcon = () => {
  return(
    <div>
      <AiOutlineShoppingCart size={"3rem"}></AiOutlineShoppingCart>
    </div>
  );
};