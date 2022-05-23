import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components";
import {SliderItems} from "./Data";
import { useState } from "react";

const Container = styled.div`
width:100%;
height:80vh;
display:flex;
position:relative;
overflow:hidden;
`
const Arrow = styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content : center;
position:absolute;
top:0;
bottom:0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
`
const Wrapper = styled.div`
height:100%;
display:flex;
transition: all 1.5s ease;
transform:translateX(${(props)=>props.slideIndex * -100}vw);
z-index:-2;
`
const Slide = styled.div`
display:flex;
align-items:center;
width:100vw;
height:100vh;
background-color:#${props=>props.bg}
`;
const ImgContainer = styled.div`
flex:1;
height:100%;
`;
const InfoContainer = styled.div`
flex:1;
margin:25px;
align-items: flex-start;

`;
const Img = styled.img`
 height:80%;
 
 `
const Title = styled.h1`
 font-size:70px;
 `;
const Desc = styled.p`
 margin:50px 0px;
 font-size:20px;
 font-weight:500;
 letter-spacing:2px;
 `
const Button = styled.button`
 padding:10px;
 font-size:20px;
 background-color:transparent;
 cursor:pointer;
 `
const Slider = () => {
    const [slideIndex,setslideIndex]=useState(0);

    const handleClick=(direction)=>{
        if(direction==="left"){
            setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2 );
        }else{
            setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }

    }
    return (
        <>
            <Container>
                <Arrow direction="left" onClick={()=>handleClick("left")}>
                    <ArrowLeftOutlined />
                </Arrow>
                <Wrapper slideIndex={slideIndex}>
                {SliderItems.map((item)=>(
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Img src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
                </Wrapper>
                <Arrow direction="right" onClick={()=>handleClick("right")}>
                    <ArrowRightOutlined />
                </Arrow>
            </Container>
        </>
    )
}

export default Slider