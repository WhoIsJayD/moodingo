import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    const url=`${process.env.NEXT_PUBLIC_API}/auth.css`

    return (
        <Html>
            <Head>
                <link rel="stylesheet" href={url}/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
