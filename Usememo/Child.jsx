import React, { memo } from 'react'

 function Child(value) {
  console.log(value);
  return (
    <>
    </>
  )
}export default  memo(Child)
