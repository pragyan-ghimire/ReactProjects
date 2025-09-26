import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex bg-slate-200 p-4 gap-4'>
      <Link href="/">Logo</Link>
      <Link href="/users">Users</Link>
      <Link href="/api/auth/signin">Sign in</Link>
    </div>
  )
}

export default Navbar
