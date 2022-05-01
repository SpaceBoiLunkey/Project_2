import React from 'react'
import {
    Container,
    Row,
    Column,
    } from "./FooterStyles";
export default function Community() {
  return (
    <form  className="flex justify-content max-w-xs mx-auto mt-5 "  >

    <h1 className="pt-5">
      Zombie Apocalypse
    </h1>
    <Container>
      <Row>
        <Column>
          <h3>Community</h3>
        </Column>
        <Column>
          <h3>Press</h3>
        </Column>
        <Column>
          <h3>Testimonials</h3>
        </Column>
      </Row>
    </Container>

  </form>
  )
}
