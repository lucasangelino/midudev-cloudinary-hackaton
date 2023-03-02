import React, {useEffect, useState} from "react";
import { optimizeImg } from "../services/optimizeImg";

export const useImage = (url) => {
    const [imageUrl, setImageUrl] = useState(url);
    const [imageData, setImageData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async () => {
        setIsLoading(true);
        const res = await optimizeImg(imageUrl);
        const imageData = await res.json();
        setImageData(imageData);
        setIsLoading(false);
    }, [imageUrl]);

    return {isLoading, imageData}
};