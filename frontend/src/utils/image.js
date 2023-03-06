const getImageSizeInKb = async (url) => {
    try {
        const img = new Image();

        img.onload = () => {
            const sizeInKB = Math.round(img.src.length / 1024);
            return sizeInKB;
        };

        img.onerror = () => {
            new Error('Error al cargar la imagen');
        };

        img.src = url;

    } catch (error) {
        throw new Error('Error al obtener el tamaño de la imagen');
        return 'N/A'
    }
}

function getImageExtension( url ) {
    return url.split(/[#?]/)[0].split('.').pop().trim().toUpperCase();
}

export {
    getImageSizeInKb,
    getImageExtension
}