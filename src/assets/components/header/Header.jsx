import React, { useState } from 'react'
import "./header.css"
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slice/ProductSlice'

const Header = () => {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.product.value);
  console.log(data);
  

  let handleIncrement = () => {
    dispatch(increment());
    
  }
  return (
    <Container>
      <div className="two">

        <h2>Increment</h2>
        <button onClick={handleIncrement}>+</button>
        <div className="one">{data}</div>
        <button onClick={()=> dispatch(decrement())}>-</button>
      </div>
    </Container>
  )
}

export default Header
