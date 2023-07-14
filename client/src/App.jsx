import { useState } from "react";
import Table from "./Components/Table";
import Form from "./Components/Form";
import ViewUserDetails from "./Components/ViewUserDetails";

import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <main> */}
      {/* <div className='main'> */}
      <div className="gradient" />
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/page2" element={<Form />} />
        <Route path="/page3" element={<ViewUserDetails />} />
       
      </Routes>
      {/* </div> */}

      {/* </main> */}
    </>
  );
}

export default App;
