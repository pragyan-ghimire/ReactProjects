"use client"
import React, { use } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const Navbar = () => {
  const {status, data: session} = useSession();
  console.log(status);
  return (
    <div className='flex bg-slate-200 p-4 gap-4'>
      <Link href="/">Logo</Link>
      <Link href="/users">Users</Link>
      {status === "loading" && <p>Loading...</p>}
      {status === "authenticated" && 
      <div>
        Welcome, {session.user?.name}
        <Link href="/api/auth/signout" className='ml-4'>Sign out</Link>
      </div>
      }
      {status === "unauthenticated" && <Link href="/api/auth/signin">Sign in</Link>}
      
    </div>
  )
}

export default Navbar
