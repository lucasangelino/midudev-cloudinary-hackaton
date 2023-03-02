import {Cloudinary} from "@cloudinary/url-gen";

// cloudinary.config({
//     cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
//     api_key: import.meta.env.CLOUDINARY_API_KEY,
//     api_secret: import.meta.env.CLOUDINARY_API_SECRET
// });

  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: "lucasangelinodev",
    },
    url: {
      secure: true,
    },
  })

export async function optimizeImg(url) {
    const res = await fetch("https://api.cloudinary.com/v1_1/lucasangelinodev/upload",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            // api key

        },
        body: JSON.stringify({
            file: "https://picsum.photos/50/50",
            upload_preset: "bazoobaraz",
            folder: "hackathon"
    })
    })
    const data = await res.json()
    console.log('data: ', data)
    return data.secure_url
}