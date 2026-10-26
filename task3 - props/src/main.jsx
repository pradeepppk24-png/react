import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Parent from './props/parent'

createRoot(document.getElementById('root')).render(
  <div>
    < Parent/>
  </div>
)
