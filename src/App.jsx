import { Navbar } from "./component/Navbar";
import {Home} from "./Pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Posts } from "./Pages/Posts";
export const App=()=> {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post" element={<Posts/>} />
        </Routes>
      </Router>
      
      <h1> Hello World !</h1>
    </div>
  )
}
