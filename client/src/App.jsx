import logo from './images/logo.svg';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route ,Link} from 'react-router-dom';

function App() {
  return (
	
	
  	<BrowserRouter>
	
    <div className="App">
		<Routes>
			<Route exact path="/" element={<Login />} />
			<Route exact path="/Signup" element={<Signup/>}/>
			<Route exact path="/Login" element={<Login/>}/>
		</Routes>
	</div>
	</BrowserRouter>
	
  );
}
 
export default App;
