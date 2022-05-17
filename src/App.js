import Contacts from "./components/Contacts";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Edit from "./components/Edit";


function App() {
  return (
    <div className="App">
      <Router>
    
        <Routes>
          <Route path="/" element={<Contacts/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
