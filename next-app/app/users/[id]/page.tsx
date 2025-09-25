import { notFound } from 'next/navigation'
import React from 'react'

interface UserDetailPageProps {
  params: {
    id: string
  }
}
const UserDetailPage = (props: UserDetailPageProps) => {
  if (props.params.id > "10") notFound();
  return (
    <div>
      <h1>UserDetailPage{props.params.id}</h1>
    </div>
  )
}

export default UserDetailPage
