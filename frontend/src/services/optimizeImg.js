export async function optimizeImg(url, optimizationId) {

    if (!url) return null;

    try {
        const res = await fetch("https://api.cloudinary.com/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    file: url,
                    folder: optimizationId,
            })
        })
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error("Error when optimizing image")
    }

    
}