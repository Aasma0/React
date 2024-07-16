import './App.css';
import ClassComponent from './classComponent';
import Counter from "./counter";
import CounterFunction from './components/counter/counter_function';
import GreetComponent from './components/props/greetComponent';
import GreetSoraComponent from './components/props/greetSoraComponent';
import SoraComponent from './components/props/SoraComponent';
import ParentToggleComponent from './Assignment/ParentToggleComponent';
import CounterParent from './Assignment/CounterParent';
import ParentMsgComponent from './Assignment/ParentMsgComponent';
import NavbarComponent from './components/Navbar/NavbarComponent';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import HomeComponent from './components/Home/HomeComponent';
import ShopComponent from './components/Shop/ShopComponent';
import AboutComponents from './components/About/AboutComponents';
import ProductComponent from './components/ProductComponent/ProductComponent';


function App() {
  return (

    <Router>
      <NavbarComponent/>
      <Routes>
      <Route path="/" element={<HomeComponent/>}/>
      <Route path="/shop" element={<ShopComponent/>}/>
      <Route path="/about" element={<AboutComponents/>}/>
      <Route path="/product" element={<ProductComponent/>}/>

      </Routes>
    </Router>
    
    // <div>
    //     {/* <ClassComponent/> */}
    //     {/* <Counter/> */}
    //     {/* <CounterFunction/> */}
    //     {/* <GreetComponent name='sora'/> */}
    //     {/* <GreetSoraComponent/> */}
    //     {/* <SoraComponent/> */}
    //     {/* <ParentToggleComponent/>
    //     <CounterParent/>
    //     <ParentMsgComponent /> */}
    //     {/* <NavbarComponent/> */}



    // </div> 

  );
}

export default App;
