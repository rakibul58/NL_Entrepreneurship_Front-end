import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Header2 from '../Pages/Header/Header2';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Header2/>
            <div className="drawer drawer-mobile">
                <input id="dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-accent text-xl font-bold gap-3">

                        {/* <li><Link className='bg-base-300 bg-opacity-60 hover:bg-opacity-20' to='/dashboard'>My Profile</Link></li> */}

                        <li><Link className='bg-base-300 bg-opacity-60 hover:bg-opacity-20' to='/dashboard'>Profile</Link></li>
                        <li><Link className='bg-base-300 bg-opacity-60 hover:bg-opacity-20' to='/dashboard'>Score Panel</Link></li>


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;