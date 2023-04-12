import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleEmailRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        console.log(email , password);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Registered Successfully");
                navigate('/');
            })
            .catch(error => console.error(error));


    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <form onSubmit={handleEmailRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                ALready Have an Account?<Link to='/login' href="#" className="label-text-alt link link-hover">Login</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value='Register' className="btn btn-primary"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;