import React from "react";
import "./App.css";

// Components
import { MainLayout } from "./components/MainLayout";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
    </MainLayout>
  );
}

export default App;
