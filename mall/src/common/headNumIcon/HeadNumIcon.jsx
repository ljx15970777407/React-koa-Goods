import React from 'react'
import styled from 'styled-components'

const Icon=styled.div`
    position:absolute;
    border-radius:0.3rem;
    overflow:hidden;
    border:0.046rem solid white ;
    text-align:center;
    >span{
        display:inline-block;
        border-radius:0.3rem;
        height:0.5rem;
        width:0.5rem;
        background-color:red;
        font-size:0.35rem;
        color:white;
    }
`;

const HeadNumIcon=(porps)=>{

    const {top,bottom,left,right,num}=porps;
    let display="none";
    if(num>0) display= ""

    return(
        <Icon style={{display:`${display}` , top:`${top}` ,bottom:`${bottom}` , left:`${left}` ,right:`${right}` }}>
            <span>{num}</span>
        </Icon>
    )
    
}
export default HeadNumIcon;
