import './App.css'
import { Routes, Route } from 'react-router-dom';
import UserRouter from './routes/userRouter';

function App() {


  return (
    <>
     <Routes>
      <Route path='/*' element={<UserRouter/>}/>
      
     </Routes>
    </>
  )
}

export default App
