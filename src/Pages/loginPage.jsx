import ubig from '../Assets/images/UBIG HD.png';
import lks from '../Assets/images/LKSLOGO.png';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import client from '../Utils/client';
import { sessionId, sessionName, sessionToken } from '../Constants/localStorage';

export const LoginPage = () => {

    const inputUsername = useRef();
    const inputPassword = useRef();
    const nav = useNavigate();

    const [errorMessage, setErrorMessage] = useState();

    const login = (e) => {
        e.preventDefault();

        let body = {
            username: inputUsername.current.value,
            password: inputPassword.current.value,
        }

        client.post('auth/login', body).then(({data}) => {
            console.log('berhasil');
            console.log(data);

            localStorage.setItem(sessionId, data.data.id);
            localStorage.setItem(sessionName, data.data.NamaPengguna);
            localStorage.setItem(sessionToken, data.data.token);

            nav('/dashboard');
        }).catch((error) => {
            console.error(error);
            setErrorMessage(error.response.data.message);
        })
    }


    return (
        <>
            <div className="brands mt-4 ms-4">
                <img style={{width: '60px'}} src={ubig} alt="" />
                <img style={{width: '60px'}} src={lks} alt="" />
            </div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="login-container">

                    <h3 className='fw-bold text-center mb-4'>SIMULASI LKS #3</h3>

                    {errorMessage && (
                        <div className="alert alert-danger">{errorMessage}</div>
                    )}

                <div class="card shadow" style={{width: '26rem'}}>
                    <div class="card-body mx-3">
                        <h5 class="card-title mt-5 mb-4 text-center" style={{fontWeight: '500'}}>Masuk ke akun anda</h5>
                        <div class="mb-4">
                            <label for="" class="form-label">Nama Pengguna</label>
                            <input
                                type="text"
                                class="form-control"
                                name=""
                                id=""
                                aria-describedby="helpId"
                                placeholder="Username"
                                ref={inputUsername}
                            />
                        </div>
                        <div class="">
                            <label for="" class="form-label">Kata sandi</label>
                            <input
                                type="text"
                                class="form-control"
                                name=""
                                id=""
                                aria-describedby="helpId"
                                placeholder="Password"
                                ref={inputPassword}
                            />
                        </div>
                        <div className="mt-5 mb-5">
                            <button onClick={login} className="btn w-100" style={{backgroundColor: '#345EA8'}}>Masuk</button>
                        </div>
                        
                    </div>
                </div>
                </div>
                
            </div>
        </>
    )
}