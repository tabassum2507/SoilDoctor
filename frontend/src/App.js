import { Form } from "react-bootstrap";
import FormRe from "./pages/Form/FormRe";


import Home from "./pages/Home/Home";
import Report from "./pages/Report/Report";
import TableData from "./pages/Report2/TableData";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Both from "./pages/Both/Both";






function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/form" element={<FormRe />}/>
      <Route path="/graph" element={ <Report />} />
      <Route path="/report" element={ <TableData />}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/both" element={<Both />}/>
       </Routes>
      </Router>
    </div>
  );
}

export default App;
