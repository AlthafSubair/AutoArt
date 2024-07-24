import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SchForm = ({ setSch, issch, id }) => {
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = { date, amount };

            const response = await axios.post(`http://localhost:3001/api/admin/shedule/${id}`, formData);

            console.log(response.data);
            if (response.data) {
                navigate('/adminenquire');
            }

        } catch (err) {
            console.log(`ERROR REACT ${err}`);
        }
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-500 font-bold mb-2" htmlFor="date">
                        Date
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                        id="date"
                        type="date"
                        required
                        min={today}
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-500 font-bold mb-2" htmlFor="amount">
                        Amount
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="amount"
                        type="text"
                        pattern="^\d+(\.\d{1,2})?$"
                        required
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className='uppercase hover:bg-[#eff3ee] hover:text-green-500 bg-green-500 text-white font-bold py-2 px-4 rounded-md'
                        type="submit"
                    >
                        Schedule
                    </button>
                    <button
                        type="button"
                        onClick={() => setSch(!issch)}
                        className='uppercase hover:bg-[#eff3ee] hover:text-red-500 bg-red-500 text-white font-bold py-2 px-4 rounded-md'
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SchForm;
