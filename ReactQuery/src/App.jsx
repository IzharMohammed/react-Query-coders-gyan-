import { Link } from 'react-router-dom'
import './App.css'
import MainRoutes from './Routes/MainRoutes'
function App() {

  return (
<>
<Link to='/'><h1>React-Query</h1></Link>
<div>
  <Link to='/products' >Products</Link>
</div>
<MainRoutes />
</>
  )
}

export default App
