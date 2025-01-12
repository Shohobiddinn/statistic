import React from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPage, HomePage } from "@/pages";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}
