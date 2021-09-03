import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navigation = () => {
  return (
    <nav className="stick">
      <ul>
        <li className="to-hide-on-mobi"><Link href="/"><a >Home</a></Link></li>
        <li className="to-hide-on-mobi"><Link href="#music"><a>Music</a></Link></li>
        <li className="to-hide-on-mobi"><Link href="#photos"><a>Photos</a></Link></li>
        <li><Link href="/" ><a className="logo"><Image src="/images/logo.svg" alt="Logo" height="50" width="200" /></a></Link></li>
        <li className="to-hide-on-mobi"><Link href="#youtube"><a>Vidoes</a></Link></li>
        <li className="to-hide-on-mobi"><Link href="#contact"><a>Contact</a></Link></li>
      </ul>
    </nav>
  )
}

export default Navigation
