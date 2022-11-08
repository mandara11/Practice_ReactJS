// useffect with cleanup
import React, { useState } from 'react'
import { cleanup } from '@testing-library/react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const[display, setDisplay]=useState(true)
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>Toggle display</button>
      {display && <HookMouse />}
    </div>
  )
}

export default MouseContainer
