import Head from 'next/head';
import Link from 'next/link';
import {useState} from "react";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name, email, password);
        axios.post("http://localhost:8000/api/register", {
            name, email, password
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (<div className="register">
        <Head>
            <title>Register</title>
            <link rel="stylesheet" href="/css/register.css"/>
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
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"
                                   placeholder="Email"/>
                        </div>
                        <div className="input-box">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"
                                   placeholder="Password"/>
                        </div>
                        <div className="input-box">
                            <input type="submit" value="Register" href='#'/>
                        </div>
                    </form>
                </div>
            </div>

            <Link href="/login" className="btn signup"> Login </Link>
        </div>

    </div>)
}
export default Register;