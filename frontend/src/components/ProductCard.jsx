import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";

function ProductCard({ product }) {
    return (
        <StyledCard>
            <CardMedia
                component="img"
                height="340"
                image={product.imageUrl}
                alt={product.name}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ${product.price}
                </Typography>
            </CardContent>
        </StyledCard>
    );
}

// create a styled component for the Card
const StyledCard = styled(Card)`
    width: 300px;
    height: 400px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export default ProductCard;
