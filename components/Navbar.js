import Link from 'next/link'

function Navbar() {
    return (
        <div className="py-6 md:px-20 px-5 flex justify-between items-center">
            <h1 className="text-3xl font-semibold">Brilian.</h1>
            <div className="flex">
                <Link href="/">
                    <a className="px-4">Home</a>
                </Link>
                <Link href="/portfolio">
                    <a className="px-4">Portfolio</a>
                </Link>
                <Link href="/contact">
                    <a className="px-4">Contact</a>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
