import React from 'react';
// import './serversearchinput.css'
import imgAdd from '@/assets/images/serveradd.png'
import SearchBox from './SearchBox.jsx';

const ServerSearchInput=(props)=> {
    const {handlenOnclick}=props;
    return (
        <>
         <SearchBox icon={()=>{
             return(
                
                <img   
                style={
                    { marginLeft :".3889rem" , 
                    width:".7315rem",
                    height: ".7315rem"}} 
                     src={imgAdd} 
                     onClick={()=>{handlenOnclick()}}/>
               
             )
         }}/>
        </>
    );

}
export default ServerSearchInput;
