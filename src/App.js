import { useSessionStorage } from 'react-unique-hooks';
import './App.css';
import Login from './components/Login';
import Admin from './components/Admin';


function App() {
  const[auth,setAuth,removeAuth] = useSessionStorage("authStatus",null)
  return (
    <div className="App">
      {auth?<Admin removeAuth={removeAuth}/>:<Login setAuth={setAuth}/>}
      
    </div>
  );
}

export default App;
