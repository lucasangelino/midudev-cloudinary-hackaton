import React from "react";
import "./App.css";

// Components
import { MainLayout } from "./components/MainLayout";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

// context
import { OptimizationProvider } from "./context/Optimization";
import { Optimization } from "./components/Optimization";

function App() {
  return (
    <MainLayout>
      <Navbar />
      <OptimizationProvider>
        <Hero />
        <Optimization />
      </OptimizationProvider>
    </MainLayout>
  );
}

export default App;
