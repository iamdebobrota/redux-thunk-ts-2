import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Todo from "../pages/Todo";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
