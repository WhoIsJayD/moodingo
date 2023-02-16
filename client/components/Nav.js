import Link from 'next/Link';

const Nav = () => {
    return (

        <nav className="nav  bg-dark  d-flex justify-content-between">
            <Link className="nav-link text-light" aria-current="page" href="/">Home</Link>
            <Link className="nav-link text-light" href="/login">Login</Link>
            <Link className="nav-link text-light" href="/register">Register</Link>
        </nav>
    )
}

export default Nav;