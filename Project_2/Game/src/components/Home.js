import React from "react";
import {
  Container,
  Row,
  Column,
  } from "./FooterStyles";


function Home() {
  return (
    <form  className="flex justify-content max-w-xs mx-auto mt-5 "  >
            
      <h1 className="pt-5 text-center">
      
        Zombie Apocolypse
      </h1>
      
      <Container className="">
        <Row>
          
         <div>
         <br></br>
            <h3>Welcome to your Nightmare</h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </div>
         
          <div>
          <br></br>
            <h3>Playing the Game</h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </div>
        
          
          <div>
          <br></br>
            <h3>Create an Account</h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </div>
            <div>
            <br></br>
            <h3>New Features</h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </div>
        </Row>
      </Container>
   
    </form>
  );
}

export default Home