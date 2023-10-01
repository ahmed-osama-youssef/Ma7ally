import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductList from "./pages/productList/ProductList";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;