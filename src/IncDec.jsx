import React, { useState } from 'react'

function IncDec() {

   // value // function  = useState()

   const [count, setCount] = useState(0)

   const inc = () => {
      setCount(count + 1)
      if (count >= 5) {
         setCount(0)
      }
   }

   const dec = () => {
      setCount(count - 1)
      if (count <= 0) {
         if(count <= 0)
            setCount(5)
         setCount(5)
      }
   }

   return (
      <>
         <button onClick={inc}>inc</button>
         <h1>{count}</h1>
         <button onClick={dec}>dec</button>

      </>
   )
}

export default IncDec
