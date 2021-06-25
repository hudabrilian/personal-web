import Navbar from "./Navbar"
import Footer from "./Footer"
import Head from 'next/head'

function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Brilian.</title>
                <meta name="description" content="Brilian personal website" />
                <meta name="robots" content="index, follow" />
                <meta name="copyright" content="Huda Brilian" />
                <meta name="language" content="EN" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="min-h-screen h-screen">
                <Navbar />
                { children }
                <Footer />
            </div>
        </>
    )
}

export default Layout
