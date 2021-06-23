// TODO B: Finish responsive navbar
import React, { useState } from 'react';

import Navbar from './Navbar';

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </div>
      <Navbar />
    </>
  )
};
export default Burger
