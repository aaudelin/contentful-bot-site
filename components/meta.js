import Head from 'next/head'
import {CMS_NAME, HOME_OG_IMAGE_URL} from '../lib/constants'
import Script from "next/script";

export default function Meta() {
    return (
        <Head>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicon/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="/favicon/site.webmanifest"/>
            <link
                rel="mask-icon"
                href="/favicon/safari-pinned-tab.svg"
                color="#000000"
            />
            <link rel="shortcut icon" href="/favicon/favicon.ico"/>
            <meta name="msapplication-TileColor" content="#000000"/>
            <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
            <meta name="theme-color" content="#000"/>
            <meta charSet="utf-8"/>
            <link rel="alternate" type="application/rss+xml" href="/feed.xml"/>
            <meta
                name="description"
                content={`Contenful Bot automates workflows between apps using the power of Zapier or Make`}
            />
            <meta property="og:image" content={HOME_OG_IMAGE_URL}/>
            <Script strategy="lazyOnload" async ßsrc="https://www.googletagmanager.com/gtag/js?id=G-BSJT1Q7WMN"></Script>
            <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-BSJT1Q7WMN');
                `}
            </Script>
        </Head>
    )
}
