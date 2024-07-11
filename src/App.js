import './App.css';
import './classComponent';
import ClassComponent from './classComponent';
import Counter from "./counter";
import CounterFunction from './components/counter/counter_function';
import GreetComponent from './components/props/greetComponent';
import GreetSoraComponent from './components/props/greetSoraComponent';
import SoraComponent from './components/props/SoraComponent';
import ParentToggleComponent from './Assignment/ParentToggleComponent';
import CounterParent from './Assignment/CounterParent';
import ParentMsgComponent from './Assignment/ParentMsgComponent';


function App() {
  return (
    
    <div>
        {/* <ClassComponent/> */}
        {/* <Counter/> */}
        {/* <CounterFunction/> */}
        {/* <GreetComponent name='sora'/> */}
        {/* <GreetSoraComponent/> */}
        {/* <SoraComponent/> */}
        <ParentToggleComponent/>
        <CounterParent/>
        <ParentMsgComponent />

    </div>
  );
}

export default App;
