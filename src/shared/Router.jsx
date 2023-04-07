import React from "react";
import Layout from "../style/Layout";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";
import NewPost from "../pages/NewPost";

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/newpost" element={<NewPost />} />
      </Routes>
    </Layout>
  );
};

export default Router;
