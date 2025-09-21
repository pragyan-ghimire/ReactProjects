import React from 'react'

interface PhotoDetailPageProps {
  params: {
    id: string,
    photoId: string
  }
}

const PhotoDetailPage = async({params}: PhotoDetailPageProps) => {
  const {id, photoId} = await params;
  return (
    <div>
        <h1>PhotoDetailPage {id} {photoId}</h1>
    </div>
  )
}

export default PhotoDetailPage
