import './App.css';
import {Routes, Route} from 'react-router-dom';
import { AddOn } from './Components/AddOn';
import { Finish } from './Components/Finish';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Personal } from './Components/Personal';
import { Plans } from './Components/Plans';
import { Thankyou } from './Components/Thankyou';
function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path='/' element={<Personal/>} />
            <Route path='/Plans/*' element={<Plans/>}/>
            <Route path='/AddOn/*' element={<AddOn/>} />
            <Route path='/Finish/*' element={<Finish/>}/>
        </Routes>
      <Thankyou/>

      <Footer/>
    </div>
  );
}

export default App;
