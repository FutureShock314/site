import 'react'
import React from 'react'

interface PageProps {
  children?: React.ReactNode
  className?: string
}

const Page: React.FC<PageProps> = () => {
    return (
        <>
            <h1 className={ `text-8xl` }>DNS woo</h1>
            <p>
                so basically<br />
                user type thing, like google.com<br />
                then the compooter send request with thing to DNS server like 1.1.1.1<br />
                then DNS find IP of thing across DNS sevrers<br />
                then DNS send back IP<br />
                then compooter send req to to IP<br />
                then IP return page in HTML<br />
                then compooter show :)<br />
            </p>
        </>
    )
}

export default Page
