import Navbar from "./Navbar"
import Footer from "./Footer"

function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Brilian.</title>
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
