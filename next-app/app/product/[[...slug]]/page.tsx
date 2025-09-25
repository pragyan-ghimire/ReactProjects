import React from 'react'

interface Props{
    params:{
        slug: string[]
    };
    searchParams: {
      name: string
    }
}

const Product = async({params, searchParams}: Props) => {
    const {slug} = await params;
    const {name} = await searchParams;
  return (
    <div>
      Entertainment {slug}: {name}
    </div>
  )
}

export default Product
