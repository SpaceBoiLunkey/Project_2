import React from 'react'
import {
    Container,
    Row,
    Column,
    } from "./FooterStyles";
export default function Store() {
  return (
    <form  className="flex justify-content max-w-xs mx-auto mt-5 "  >

    <h1 className="pt-5">
      Zombie Apocolypse
    </h1>
    <Container>
      <Row>
        <Column>
          <h3>Welcome to our Store</h3>
        </Column>
        <Column>
          <h3>Apparel</h3>
        </Column>
        <Column>
          <h3>Collectables</h3>
        </Column>
      </Row>
    </Container>

  </form>
  )
}