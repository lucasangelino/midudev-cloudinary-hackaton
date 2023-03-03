import React, {useEffect, useState} from "react";
import { optimizeImg } from "../services/optimizeImg";

export const useImage = ({imgToOptimize}) => {
    const [imageNode, setImageNode] = useState(imgToOptimize);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [imageData, setImageData] = useState({
        originalSize: 0,
        optimizedSize: 0,
        secure_url: '',
        alt: '',
        title: '',
        nodeName: '',
        outerHtml: '',
        resource_type: '',
        asset_id: '',
        original_filename: '',
        created_at: '',
        bytes: 0,
        originalSize: 0,
        oldFormat: '',
        newFormat: '',
    });

    const changeImageFormat = (url, format) => {
        return url.replace(/\.([^.]+)$/, `.${format}`);
    }

    useEffect(() => {
        async function getImgNode() {
            setIsLoading(true);
            console.log('loading', 'true');
            try {
                const optimizedImg = await optimizeImg(imageNode.src, 'default');
                console.log('optimizedImg: --> ', optimizedImg);
                return setImageData({
                    ...imageData,
                    optimizedSize: getImageSizeInKb(optimizedImg.secure_url),
                    secure_url: optimizedImg.secure_url.replace('.jpg', '.webp'),
                    alt: imageNode.alt,
                    nodeName: imageNode.nodeName,
                    outerHtml: optimizedImg.outerHtml,
                    resource_type: optimizedImg.resource_type,
                    asset_id: optimizedImg.asset_id,
                    original_filename: optimizedImg.original_filename,
                    created_at: optimizedImg.created_at,
                    bytes: optimizedImg.bytes,
                    oldFormat: 'JPG',
                    newFormat: 'WEBP',
                });
            } catch (error) {
                setHasError(false);
                throw new Error(error);
            } finally {
                console.log('done', 'done');
                setIsLoading(false);
            }
        }
        getImgNode();
    }, [imageNode]);

    const getImageSizeInKb = async (url) => {
        try {
            const img = new Image();

            img.onload = () => {
                const sizeInKB = Math.round(img.src.length / 1024);
                console.log('size: --> ', sizeInKB);
                return sizeInKB;
            };

            img.onerror = () => {
                new Error('Error al cargar la imagen');
            };

            img.src = url;

        } catch (error) {
            console.log('error: --> ', error);
            return 'N/A'
        }
    }

    return {
        isLoading, 
        hasError, 
        imageData,
        changeImageFormat,
    }
};