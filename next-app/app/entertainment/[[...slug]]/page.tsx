import React from 'react'

interface Props{
    params:{
        slug: string[]
    };
    searchParams: {
      type: string
    }
}

const Entertainment = async({params, searchParams}: Props) => {
    const {slug} = await params;
    const {type} = await searchParams;
  return (
    <div>
      Entertainment {slug}: {type}
    </div>
  )
}

export default Entertainment
