// import './App.css';
// import NavbarComponent from './components/Navbar/NavbarComponent';
// import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import HomeComponent from './components/Home/HomeComponent';
// import ShopComponent from './components/Shop/ShopComponent';
// import AboutComponents from './components/About/AboutComponents';
// import ProductComponent from './components/ProductComponent/ProductComponent';
// import DoComponents from './components/To-do/TodoApp';
// import Login from './components/Form/Login';
// import Register from './components/Form/Register';
// import ContactUs from './components/Form/ContactUs';
// import FormValidation from './components/FormValidation/FormValidation';
// import Event from './components/EventEnter/Event';


// function App() {
//   return (

//     <Router>
//       <NavbarComponent/>
//       <Routes>
//       <Route path="/" element={<HomeComponent/>}/>
//       <Route path="/shop" element={<ShopComponent/>}/>
//       <Route path="/about" element={<AboutComponents/>}/>
//       <Route path="/product" element={<ProductComponent/>}/>
//       <Route path="/todo" element={<DoComponents/>}/>
//       <Route path="/login" element={<Login/>}/>
//       <Route path="/registration" element={<Register/>}/>
//       <Route path="/contact" element={<ContactUs/>}/>
//       <Route path="/formvalidation" element={<FormValidation/>}/>
//       <Route path="/enter" element={<Event/>}/>
//       </Routes>
//     </Router>
    

//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {RegistrationProvider} from './components/EventEnter/RegistrationContext'
import PersonalInfo from './components/EventEnter/PersonalInfo';
import ContactInfo from './components/EventEnter/ContactInfo';
import EventSelect from './components/EventEnter/EventSelect';
import Confirmation from './components/EventEnter/Confirmation';


function App() {
  return (
    <RegistrationProvider>
      <Router>
        <div className="bg-slate-50 min-h-screen">
          <Routes>
            <Route path="/" element={<PersonalInfo />} />
            <Route path="/step-two" element={<ContactInfo />} />
            <Route path="/step-three" element={<EventSelect />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </div>
      </Router>
    </RegistrationProvider>
  );
}

export default App;
