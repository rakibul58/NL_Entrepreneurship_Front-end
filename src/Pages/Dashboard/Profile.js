import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import app from '../../firebase/firebase.config';
import { CSVLink } from 'react-csv';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const db = getFirestore(app);
    const [admin, setAdmin] = useState(null);
    const [grades, setGrades] = useState({});
    const [allGrades , setAllGrades] = useState([]);

    useEffect(() => {
        fetchItems();
        getItemsByEmail(user?.email);
        fetchGrades();
    }, [user?.email]);

    const fetchItems = async () => {
        const querySnapshot = await getDocs(collection(db, 'users'));
        let items = {};
        querySnapshot.forEach((doc) => {
            items = { id: doc.id, ...doc.data() };
        });

        setAdmin(items)
    };

    const fetchGrades = async () => {
        const querySnapshot = await getDocs(collection(db, 'grades'));
        let items = [];
        querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
        });

        setAllGrades(items);
        console.log(items);
    };

    const getItemsByEmail = async (email) => {
        const q = query(collection(db, "grades"), where("email", "==", email));
        const querySnapshot = await getDocs(q);

        const items = [];
        querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
        });

        setGrades(items[0]);
    };

    console.log("user --->", user);


    return (
        <div>
            <header className="shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Profile Page</h1>
                    <img className="h-12 w-12 rounded-full" src={user?.photoURL ? user?.photoURL : "https://picsum.photos/id/1011/200/200"} alt="Profile" />
                </div>
            </header>
            <div className="shadow overflow-hidden sm:rounded-lg border">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium">
                        Personal Information
                    </h3>
                </div>
                <div className="border-t px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y">

                        <div className="sm:flex sm:items-center sm:justify-between px-4 py-3 sm:px-6">
                            <dt className="text-sm font-medium">Email address</dt>
                            <dd className="mt-1 text-sm  sm:mt-0 sm:col-span-2">{user?.email}</dd>
                        </div>
                        {
                            (admin?.user === user?.email) && <>
                                <div className="sm:flex sm:items-center sm:justify-between px-4 py-3 sm:px-6">
                                    <dt className="text-sm font-medium">Phone number</dt>
                                    <dd className="mt-1 text-sm  sm:mt-0 sm:col-span-2">+880 1850415714</dd>
                                </div>
                                <div className="sm:flex sm:items-center sm:justify-between px-4 py-3 sm:px-6">
                                    <dt className="text-sm font-medium">Download Result</dt>
                                    <dd className="mt-1 text-sm  sm:mt-0 sm:col-span-2">
                                        <CSVLink className='btn btn-accent mt-4' data={allGrades} target="_blank" filename={'all_user_marks_sheet.csv'}>Download</CSVLink>
                                    </dd>
                                </div>

                            </>
                        }
                        {
                            (admin?.user !== user?.email) && <div className="sm:flex sm:items-center sm:justify-between px-4 py-3 sm:px-6">
                                <dt className="text-sm font-medium">Average Mark</dt>
                                <dd className="mt-1 text-sm  sm:mt-0 sm:col-span-2">{grades?.average}</dd>
                            </div>
                        }
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Profile;