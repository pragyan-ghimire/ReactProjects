import { Props } from 'next/script'
import React from 'react'

interface UserDetailPageProps {
  params: {
    id: string
  }
}
const UserDetailPage = (props: UserDetailPageProps) => {
  return (
    <div>
      <h1>UserDetailPage{props.params.id}</h1>
    </div>
  )
}

export default UserDetailPage
