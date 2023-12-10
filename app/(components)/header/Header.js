import React from 'react'
import Link from 'next/link'
export default function Header() {
  return (
    <div>
          <nav>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/Patient">
          Patient Registration
          </Link>
        </li>
        <li>
          <Link href="/Doctor">
          Doctor Rgistration
          </Link>
        </li>
        <li>
          <Link href="/About">
          About us
          </Link>
        </li>
        <li>
          <Link href="/Contact">
          Contact us
          </Link>
        </li>
        <li>
          <Link href="/Log">
          Log in
          </Link>
        </li>
        {/* Add more categories as needed */}
      </ul>
    </nav>
    </div>
  )
}
