import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import app from '../../firebase/firebase.config';
import { CSVDownload, CSVLink } from 'react-csv';

const ScorePanel = () => {
    const { user } = useContext(AuthContext);
    const db = getFirestore(app);
    const [admin, setAdmin] = useState(null);
    const [grades, setGrades] = useState({});

    useEffect(() => {
        fetchItems();
        getItemsByEmail(user?.email);
    }, [user?.email]);

    const fetchItems = async () => {
        const querySnapshot = await getDocs(collection(db, 'users'));
        let items = {};
        querySnapshot.forEach((doc) => {
            items = { id: doc.id, ...doc.data() };
        });

        setAdmin(items)
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
            <h1 className="text-2xl font-bold text-center mt-4 mb-2 text-accent">Individual Scores</h1>

            {grades && (
                <table className="table-auto w-[310px] lg:w-[600px] mx-auto mt-4">
                    <thead className='text-amber-200'>
                        <tr>
                            <th className="px-4 py-2">English</th>
                            <th className="px-4 py-2">Math</th>
                            <th className="px-4 py-2">Science</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center px-4 py-2 border-2 border-amber-200 text-orange-400 font-semibold text-2xl">{grades.english}</td>
                            <td className="text-center px-4 py-2 border-2 border-amber-200 text-teal-400 font-semibold text-2xl">{grades.math}</td>
                            <td className="text-center px-4 py-2 border-2 border-amber-200 text-fuchsia-400 font-semibold text-2xl">{grades.science}</td>
                        </tr>
                    </tbody>
                    <CSVLink className='btn btn-accent mt-4' data={
                        [
                            {
                                email: grades?.email,
                                english: grades?.english,
                                math: grades?.math,
                                science: grades?.science,
                                average: grades?.average
                            }
                        ]
                    } target="_blank" filename={grades?.email + '_marks_sheet.csv'}>Download</CSVLink>
                </table>
            )}
        </div>
    );
};

export default ScorePanel;