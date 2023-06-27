import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let user:{
  name: string;
  age: number;
  isloggedIn: boolean;
};

function LoginPage() {
  return (
    <>
      <h1>Please Login</h1>
    </>
  );  
}




function Admin() {
  return (
    <>
      <h1>Welcome {user.name}</h1>
    </>
  );
}



user = {
  name: "Shawn",
  age: 18,
  isloggedIn: true
};

function App() {
  const [count, setCount] = useState(0)
  
  let content: any;
  if(user.isloggedIn){
    content = <Admin />
  }else{
    content = <LoginPage />
  }

  
  if (count == 5){
    let setCount = () => {count}
  }

  return (
    <>
      <button onClick={setCount}>

      </button>
      {content};
    </>
  )
}

export default App
