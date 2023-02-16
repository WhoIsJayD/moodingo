import Head from 'next/head';
import Link from "next/link";
import {useState} from "react";

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, password);
    }
    return (
        <div className="register">
            <Head>
                <title>Login</title>
                <link rel="stylesheet" href="/css/login.css"/>
            </Head>
            <div className="container">
                <div className="drop">
                    <div className="content">
                        <h2 className='animate__heartBeat'>Moodingo</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="input-box">
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text"
                                       placeholder="Username"/>
                            </div>
                            <div className="input-box">
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"
                                       placeholder="Password"/>
                            </div>
                            <div className="input-box">
                                <input type="submit" value="Login"/>
                            </div>
                        </form>
                    </div>
                </div>

                <Link href="register" className="btn signup"> Register </Link>

                <Link href="forget" className="btn"> Forget Password </Link>
            </div>

        </div>
    )
}
export default Login;