import React from "react";
import "./App.css";

// Components
import { HeaderLayout } from "./components/HeaderLayout";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

// context
import { OptimizationProvider } from "./context/Optimization";
import { Optimization } from "./components/Optimization";

function App() {
  return (
    <OptimizationProvider>
      <HeaderLayout>
        <Navbar />
        <Hero />
      </HeaderLayout>
      <Optimization />
    </OptimizationProvider>
  );
}

export default App;
