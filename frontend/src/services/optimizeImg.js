import {Cloudinary} from "@cloudinary/url-gen";
  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: "lucasangelinodev",
    },
    url: {
      secure: true,
    },
  })

export async function optimizeImg({url = "https://picsum.photos/50/50", optimizationId = "default"}) {
    if (!url) return null;

    try {
        const res = await fetch("https://api.cloudinary.com/v1_1/lucasangelinodev/upload",
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
        console.log('data: ', data)
        return data.secure_url
    } catch (error) {
        throw new Error("Error when optimizing image")
    }

    
}