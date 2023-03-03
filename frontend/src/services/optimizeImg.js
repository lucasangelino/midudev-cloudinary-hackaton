export async function optimizeImg(url, optimizationId) {

console.log("url", url)
    if (!url) return null;

    try {
        const res = await fetch("https://api.cloudinary.com/v1_1/lucasangelinodev/upload/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    file: url,
                    upload_preset: "bazoobaraz",
                    folder: optimizationId
            })
        })
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error("Error when optimizing image")
    }

    
}