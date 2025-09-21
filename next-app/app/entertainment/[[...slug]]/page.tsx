import React from 'react'

interface Props{
    params:{
        slug: string[]
    }
}

const Entertainment = async({params}: Props) => {
    const {slug} = await params;
  return (
    <div>
      Entertainment {slug}
    </div>
  )
}

export default Entertainment
