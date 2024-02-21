import React, { useState } from 'react'
import { Pruthvesh } from './Pruthvesh';

export const Landing = () => {
  const [showComponent, setshowComponent] = useState(false);

  const handleclick = () => {
    setshowComponent(true);
  }
  return (
    <div>
      <button onClick={handleclick}> Click Here </button>
      {showComponent && <Pruthvesh />}
    </div>
  )
}
