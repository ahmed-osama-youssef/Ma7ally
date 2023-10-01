import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useProducts } from "../../hooks/product.hooks";

function ProductList() {
    const { isLoading, error, products } = useProducts();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Grid container spacing={2}>
            {products.map((product) => (
                <Grid item xs={4} key={product.id}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={product.images[0]}
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
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default ProductList;