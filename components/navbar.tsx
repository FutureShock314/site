import styles from "@/styles/components/navbar.module.css"
import Link from 'next/link'
import React from "react"

// interface props {
//   children: React.ReactNode
// }

export default function Navbar(
  // { children, }: props
) {

  const links = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/contact', text: 'Contact' },
  ]

  return (
    <>
      <div className={ styles.bar }>
        {
          links.map( ( link ) => {
            return (
              <Link key={ link.href } href={ link.href } className={ styles.link }>
                { link.text }
              </Link>
            )
          })
        }
      {/* { children } */}
      </div>
    </>
  )
}
