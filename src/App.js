import logo from './logo.svg';
import React ,{useReducer}from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ClassCounter from './components/state-hook/ClassCounter';
import HookCounter from './components/state-hook/HookCounter';
import HookCounterTwo from './components/state-hook/HookCounterTwo';
import HookCounterThree from './components/state-hook/HookCounterThree';
import HookCounterFour from './components/state-hook/HookCounterFour';
import ClassConunterOne from './components/effet-hook/ClassConunterOne';
import HookCounterOne from './components/effet-hook/HookCounterOne';
import ClassMouse from './components/effet-hook/ClassMouse';
import HookMouse from './components/effet-hook/HookMouse';
import MouseContainer from './components/effet-hook/MouseContainer';
import IntervalClassCounter from './components/effet-hook/IntervalClassCounter';
import IntervalHookCounter from './components/effet-hook/IntervalHookCounter';
import DataFetching from './components/effet-hook/DataFetching';
import { UserProvider } from './components/userContext';
import ComponentC from './components/ComponentC';
import FcomponentC from './components/context-hook/FcomponentC';
import CounterOne from './components/reducer-hook/CounterOne';
import CounterTwo from './components/reducer-hook/CounterTwo';
import CounterThree from './components/reducer-hook/CounterThree';
import Componenta from './components/reducer-hook/Componenta';
import Componentb from './components/reducer-hook/Componentb';
import Componentc from './components/reducer-hook/Componentc';
import DataFetchingOne from './components/reducer-hook/DataFetchingOne';
import DataFetchingTwo from './components/reducer-hook/DataFetchingTwo';
import ClickCounter from './components/higher-ordercomponents/ClickCounter';
import HoverCounter from './components/higher-ordercomponents/HoverCounter';
import UpdatedComponent from './components/higher-ordercomponents/withCounter';
import NameList from './components/rendering/NameList';

export const CountContext = React.createContext()

//import Counter from './components/Counter';

 export const UserContext = React.createContext()     //create the context
 export const ChannelContext = React.createContext()

 const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
  const[count,dispatch]=useReducer(reducer,initialState)
  return (
    // <CountContext.Provider 
    // value={{countState:count, countDispatch:dispatch}}>
     <div className="App">
      <NameList />
      {/* <UpdatedComponent /> */}
      {/* <ClickCounter name='Mandara'/>
      <HoverCounter /> */}
       {/* <DataFetchingOne />
       <DataFetchingTwo /> */}
      {/* Count - {count}
      <Componenta />
      <Componentb />
      <Componentc /> */}
      {/* <CounterThree /> */}
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}
      {/* <UserContext.Provider value={'Mandara'}>
        <ChannelContext.Provider value={'code evolution'}>
        <FcomponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
  
      {/* <UserProvider value="Mandara">
        <ComponentC />
      </UserProvider> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <IntervalClassCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <ClassMouse /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassConunterOne /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind/> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick /> */}
      {/* <Greet name='Mandara' surName='renu'/>
      <Greet name='Manasa' surName='dev'/>
      <Greet name='Mahesha'surName='rane'/>  */}
      {/* <Message/> */}
      {/* <Counter/> */}
     {/*  <Welcome/>
      <Hello/> */}
      
    </div>
    // </CountContext.Provider>
  );
}

export default App;
