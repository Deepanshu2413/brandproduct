import React from 'react'
import Grid from './Grid'



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Product';

function Home() {
  return (
    <>
      <Grid/>
      <Product />
      

    </>
  )
}

export default Home