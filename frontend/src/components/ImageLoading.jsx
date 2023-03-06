import React from "react"
import ContentLoader from "react-content-loader"

export const ImageLoading = (props) => (
  <ContentLoader 
    speed={2}
    width={1000}
    height={110}
    viewBox="0 0 900 110"
    backgroundColor="#c2c1c2"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="119" y="5" rx="10" ry="10" width="587" height="28" /> 
    <rect x="9" y="0" rx="10" ry="10" width="95" height="108" /> 
    <rect x="119" y="48" rx="10" ry="10" width="592" height="54" />
  </ContentLoader>
  )
