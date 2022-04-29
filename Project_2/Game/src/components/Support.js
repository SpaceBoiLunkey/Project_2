import React from 'react'
import {
    Container,
    Row,
    Column,
    } from "./FooterStyles";
    import { Link } from "react-router-dom";
export default function Support() {
  return (
    <form  className="flex justify-content max-w-xs mx-auto mt-5 "  >

    <h1 className="pt-5">
      Zombie Apocalypse
    </h1>
    <Container>
      <Row>
        <Column>
          <h3>Game Help</h3>
        </Column>
        <Column>
          <h3>Feed Back</h3>
        </Column>
        <Column>
          <h3>Password Reset</h3>
        </Column>
      </Row>
    </Container>

  </form>
  )
}
