// pages/ProductPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Fetch product details using the id
  return <div>Product Page - {id}</div>;
};

export default ProductPage;