import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Firstpart = () => {
    let data = useSelector((state)=> state.product.value)
  return (
    <Container>
        <h2>About part {data}</h2>
    </Container>
  )
}

export default Firstpart
