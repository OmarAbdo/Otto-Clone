// pages/HomePage.tsx
import React from "react";
import Header from "../components/Header";

const HomePage: React.FC = () => {
  // Fetch products from API and display them
  return (
    <div>
      <Header />
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
};

export default HomePage;
