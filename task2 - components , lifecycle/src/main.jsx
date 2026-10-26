import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import DidUpdate from './lifecycle/didUpdate'


createRoot(document.getElementById('root')).render(
  <div>
    < DidUpdate/>
  </div>
)
