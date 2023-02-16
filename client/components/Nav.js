import Head from "next/head";
import Link from "next/link";

const Nav = () => {
    return (
        <div className="nav-container">
            <Head>
                <link rel="stylesheet" href="/css/nav.css"/>
            </Head>
            <nav className="navbar">
                <ul className="nav-items">
                    <Link className="nav-item nav-link" href="/"> Home </Link>
                    <Link className="nav-item nav-link" href="/login"> Login </Link>
                    <Link className="nav-item nav-link" href="/register"> Register </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;