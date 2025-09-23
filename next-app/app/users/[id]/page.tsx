import { notFound } from 'next/navigation'
import { Props } from 'next/script'
import React from 'react'

interface UserDetailPageProps {
  params: {
    id: number
  }
}
const UserDetailPage = (props: UserDetailPageProps) => {
  if (props.params.id > 10) notFound();
  return (
    <div>
      <h1>UserDetailPage{props.params.id}</h1>
    </div>
  )
}

export default UserDetailPage
