import React from "react";
import Layout from "../style/Layout";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Layout>
  );
};

export default Router;
