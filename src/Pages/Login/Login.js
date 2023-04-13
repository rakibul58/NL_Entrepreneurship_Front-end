import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import google from '../../assets/images/google.png';
import { toast } from 'react-hot-toast';
import { addDoc, collection, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import app from '../../firebase/firebase.config';



const Login = () => {
    const db = getFirestore(app);
    const { logIn, googleLogin, user, setUser, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [admin, setAdmin] = useState(null);

    let from = location.state?.from?.pathname || '/';

    useEffect(()=>{
        fetchItems();
    },[]);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (user) {
            toast("Your are already logged in", { icon: '⚠️' });
        }

        else if (email.length === 0 || password.length === 0) {
            toast.error("Enter Your Email and Password");
        }

        else if (admin?.id) {
            if (admin?.user === email && admin.password === password) {
                logIn(admin?.user, admin?.password);
                navigate('/admin-dashboard');
            }
        }

        else {
            form.reset();
            logIn(email, password)
                .then(result => {

                    navigate('/dashboard');
                })
                .catch(error => console.error(error));
        }


    }

    const fetchItems = async () => {
        const querySnapshot = await getDocs(collection(db, 'users'));
        let items = {};
        querySnapshot.forEach((doc) => {
            items = { id: doc.id, ...doc.data() };
        });

        setAdmin(items)
    };


    const handleGoogleLogin = () => {
        // setError('');
        if (user) {
            toast("Your are already logged in", { icon: '⚠️' });
        }
        else {
            googleLogin()
                .then(result => {
                    toast.success("Login Successfully");
                    navigate('/dashboard');
                })
                .catch(error => console.error(error.message));
        }
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                Don't Have and Account?<Link to='/register' href="#" className="label-text-alt link link-hover">Register</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input value="Login" type='submit' className="btn btn-primary" />
                        </div>
                        <div className="divider">Or</div>
                        <div className='flex justify-center mb-8'>
                            <button onClick={handleGoogleLogin} className='btn w-full flex items-center gap-3 bg-gradient-to-r from-blue-50 font-bold to-blue-200 mt-5 text-primary hover:text-opacity-50'><img src={google} alt="" /> Join With Google</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;