import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HomePage, NotFound } from "./components/pages";
import { HOME_PAGE, BASE_URL, ERROR_PAGE } from "./constants/routes";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={BASE_URL} element={<Navigate to={HOME_PAGE}/>}/>

        <Route path={HOME_PAGE} element={<HomePage />}/>

        <Route path={ERROR_PAGE} element={<NotFound />}/>
        <Route />
      </Routes>
    </Router>
  );
};

export default App;
