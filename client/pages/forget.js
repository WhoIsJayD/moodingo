import Head from 'next/head';
import Link from 'next/link';
import {useState} from 'react';

const Forget = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="forget">
            <Head>
                <title>Forget</title>
            </Head>
            <div className="container">
                <div className="drop">
                    <div className="content">
                        <h2 className='animate__heartBeat'>Moodingo</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="input-box">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"
                                       placeholder="Email"/>
                            </div>
                            <div className="input-box">
                                <input type="submit" value="Send OTP"/>
                            </div>
                        </form>
                    </div>
                </div>

                <Link href="/login" className="btn signup"> Login </Link>
            </div>

        </div>
    )
}
export default Forget;
