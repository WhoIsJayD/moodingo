import Head from 'next/head';
import Link from 'next/link';
import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {Button, Modal} from 'antd';
import router from 'next/router'
import {SyncOutlined} from '@ant-design/icons';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ok, setOk] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState("You have successfully registered");
    const [loading, setLoading] = useState(false);
    const handleOk = () => {
        setModalText('Redirecting to login page...');
        setConfirmLoading(true);
        setTimeout(() => {
            router.push('/login');

        }, 2000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API}/register`, {
                name, email, password
            })
            setName("")
            setEmail("")
            setPassword("")
            setOk(data.ok);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            toast.error(e.response.data)
        }
    }


    return (<div className="register">
        <Head>
            <title>Register</title>
            {/*<link rel="stylesheet" href="/css/auth.css"/>*/}
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
                            {loading ? <SyncOutlined style={{
                            fontSize:40,
                            color: '#fff'}
                            } rotate={180} spin={true} /> : <input type="submit" value="Register"/>}

                        </div>
                    </form>
                </div>
            </div>

            <Link href="/login" className="btn signup"> Login </Link>
        </div>
        <div className="row">
            <div className="col">
                <Modal
                    open={ok}
                    onCancel={() => setOk(false)}
                    title={modalText}
                    bodyStyle={{
                        textAlign: 'center', alignContent: 'center'
                    }}
                    closable={false}
                    maskClosable={false}
                    centered
                    footer={null}
                >
                    <Button type="link" onClick={handleOk}>Login</Button>
                </Modal>
            </div>
        </div>
    </div>)
}
export default Register;