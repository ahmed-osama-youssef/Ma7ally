import { useQuery } from "react-query";

export const useProducts = () => {
    const { isLoading, error, data } = useQuery("getProducts", async () => {
        const response = await fetch("http://localhost:3000/api/products");
        return await response.json();
    });

    return { isLoading, error, products: data };
}

