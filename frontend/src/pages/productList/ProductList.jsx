import React from "react";
import { Grid } from "@mui/material";
import { useProducts } from "../../hooks/product.hooks";
import ProductCard from "../../components/ProductCard";
import styled from "styled-components";



function ProductList() {
    const { isLoading, error, products } = useProducts();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <GridContainer container spacing={2}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </GridContainer>
    );
}

// create GridContainer styled component
const GridContainer = styled(Grid)`
    display: flex;
    width: 100%;
    padding: 50px;
    justify-content: center;
    align-items: center;
`;




export default ProductList;