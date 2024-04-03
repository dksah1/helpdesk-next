'use client'
import Link from 'next/link'
import React from 'react'
import Logo from './dojo-logo.png'
import Image from 'next/image'
const Navbar = () => {
  return (
<nav>
    <Image src={Logo} alt="Dojo logo " width={70}  quantity={100} placeholder='blur' />
   <h1>Dojo Helpdesk</h1>
      <Link href={"/"}>Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
</nav>
    
    )
}

export default Navbar