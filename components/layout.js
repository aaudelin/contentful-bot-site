import Footer from './footer'
import Meta from './meta'
import Script from "next/script";

export default function Layout({preview, children}) {
    return (
        <>
            <Meta/>
            <Script async strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-BSJT1Q7WMN"></Script>
            <Script strategy="lazyOnload" type="text/javascript">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
    
                    gtag('config', 'G-BSJT1Q7WMN');
                `}
            </Script>
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <Script async strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=UA-235375056-1">
            </Script>
            <Script strategy="lazyOnload" type="text/javascript">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-235375056-1');
                `}
            </Script>
            <div className="min-h-screen">
                <main>{children}</main>
            </div>
            <Footer/>
        </>
    )
}