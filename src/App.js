import './App.css';
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
      <Personal/>
      <Plans/>
      <AddOn/>
      <Finish/>
      <Thankyou/>
      <Footer/>
    </div>
  );
}

export default App;
