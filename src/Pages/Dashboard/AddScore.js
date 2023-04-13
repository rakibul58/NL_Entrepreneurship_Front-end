import { Firestore, addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import app from '../../firebase/firebase.config';
import { toast } from 'react-hot-toast';

const AddScore = () => {
    const [email, setEmail] = useState('');
    const [english, setEnglish] = useState(0);
    const [math, setMath] = useState(0);
    const [science, setScience] = useState(0);

    const db = getFirestore(app);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}`);
        console.log(`English: ${english}`);
        console.log(`Math: ${math}`);
        console.log(`Science: ${science}`);

        const newItem = {
            email,
            english: parseInt(english),
            math: parseInt(math),
            science: parseInt(science),
            average: ((parseInt(english)+parseInt(math)+parseInt(science))/3)
        }

        addItem(newItem);

        setEmail("");
        setEnglish("");
        setMath("");
        setScience("");

    };

    const addItem = async (newItem) => {
        const docRef = await addDoc(collection(db, 'grades'), newItem);
        toast.success("Grades Added Successfully");   
    };

    return (
        <div className='w-full'>
            <form className="bg-base-300 mt-4 p-6 rounded-lg mx-auto w-[320px] md:w-1/2 border border-accent" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        className="block text-gray-400 font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="appearance-none border border-accent rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-400 font-bold mb-2"
                        htmlFor="english"
                    >
                        English
                    </label>
                    <input
                        className="appearance-none border border-accent rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                        id="english"
                        type="number"
                        placeholder="English marks"
                        value={english}
                        onChange={(event) => setEnglish(event.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-400 font-bold mb-2" htmlFor="math">
                        Math
                    </label>
                    <input
                        className="appearance-none border border-accent rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                        id="math"
                        type="number"
                        placeholder="Math marks"
                        value={math}
                        onChange={(event) => setMath(event.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-400 font-bold mb-2"
                        htmlFor="science"
                    >
                        Science
                    </label>
                    <input
                        className="appearance-none border border-accent rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                        id="science"
                        type="number"
                        placeholder="Science marks"
                        value={science}
                        onChange={(event) => setScience(event.target.value)}
                    />
                </div>
                <input className='btn btn-accent' type="submit" value="Add Score" />
            </form>
        </div>
    );
};

export default AddScore;