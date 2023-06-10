import React from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <h1>Product Information</h1>
        <ProductList />
        <ProductForm />
      </div>
    </ProductProvider>
  );
}

export default App;
