import React from "react";
import {
  Container,
  RowTwo,
  Box,
  BoxTwo,
  ColumnTwo,
  } from "./FooterStyles";
  import { Link } from "react-router-dom";

function Home() {
  return (
    <form  className="flex justify-content max-w-xs mx-auto mt-5 "  >
            
      <h1 className="pt-5 text-center font-link">
      
        Zombie Apocalypse
      </h1>
      
      <Container className="pt-5 ">
        <Box >
        <RowTwo>
         <ColumnTwo >
         <br></br>
            <h3>Welcome to your Nightmare</h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.   <img
      src='./img/zombie.png'
      className='img-thumbnail img-fluid shadow-2-strong'
      alt='...'
      style={{ maxWidth: '24rem' }}
    />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            <div className="text-end"><Link to="/Login" type="submit" className="btn btn-secondary btn-lg "><h5>Play Now</h5></Link></div>
            </ColumnTwo>
         </RowTwo>
         </Box>
         <BoxTwo>
        <RowTwo>
          <ColumnTwo>
          <br></br>
            <h3>Playing the Game</h3><p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining <div className="text-start"><Link to="/Support" type="submit" className="">Get help</Link></div></p>
            </ColumnTwo>
          </RowTwo> 
          </BoxTwo>
          <Box>   
         <RowTwo>        
          <ColumnTwo>
          <br></br>
            <h3>Create an Account</h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <div className="text-end"><Link to="/Register" type="submit" className="btn btn-secondary btn-lg "><h5>Register</h5></Link></div>
            </ColumnTwo>
            </RowTwo>
            </Box>
            <BoxTwo>
            <RowTwo>
            <ColumnTwo>
            <br></br>
            <h3>New Features</h3><img
      src='./img/door.png'
      className='img-thumbnail img-fluid shadow-2-strong'
      alt='...'
      style={{ maxWidth: '24rem'}}
    />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            <div className="text-end"><Link to="/Store" type="submit" >Store</Link></div>
            </ColumnTwo>
        </RowTwo>
        </BoxTwo>
      </Container>
   
    </form>
  );
}

export default Home