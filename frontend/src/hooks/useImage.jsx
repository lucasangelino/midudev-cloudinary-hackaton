import React, {useEffect, useState} from "react";
import { optimizeImg } from "../services/optimizeImg";
import { getImageSizeInKb, getImageExtension } from "../utils/image";

export const useImage = ({imgToOptimize}) => {
    const [imageNode, setImageNode] = useState(imgToOptimize);
    const [isLoading, setIsLoading] = useState(true);
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
        oldFormat: '',
        newFormat: '',
    });

    const changeImageFormat = (url, format) => {
        return url.replace(/\.([^.]+)$/, `.${format}`);
    }

    useEffect(() => {
        async function getImgNode() {
            try {
                const optimizedImg = await optimizeImg(imageNode.src, 'default');
                return setImageData({
                    ...imageData,
                    optimizedSize: getImageSizeInKb(optimizedImg.secure_url),
                    secure_url: optimizedImg.secure_url.replace(/\.([^.]+)$/, `.webp`),
                    alt: imageNode.alt,
                    nodeName: imageNode.nodeName,
                    outerHtml: optimizedImg.outerHtml,
                    resource_type: optimizedImg.resource_type,
                    asset_id: optimizedImg.asset_id,
                    original_filename: optimizedImg.original_filename,
                    created_at: optimizedImg.created_at,
                    bytes: optimizedImg.bytes,
                    oldFormat: getImageExtension(imageNode.src),
                    newFormat: 'WEBP',
                });
            } catch (error) {
                setHasError(false);
                throw new Error(error);
            } finally {
                setIsLoading(false);
            }
        }
        getImgNode();
    }, [imageNode]);

    

    return {
        isLoading, 
        hasError, 
        imageData,
        changeImageFormat,
    }
};