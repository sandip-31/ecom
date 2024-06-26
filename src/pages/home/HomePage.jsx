import { useState } from "react";
import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <Layout>
      <HeroSection />
      <Category onSelectCategory={handleCategorySelect} />
      <HomePageProductCard category={selectedCategory} />
    </Layout>
  );
};

export default HomePage;
