import React, { useEffect, useState } from 'react'
import ColorAddForm from '../../components/Admin/ColorAddForm'
import ListColorOptions from '../../components/Admin/ListColorOptions'
import axios from 'axios';

const AddColor = () => {
    const [color, setColor] = useState([]);

useEffect(()=>{
    axios.get('http://localhost:3001/api/admin/getcolors')
    .then(response =>{
        setColor(response.data)
    })
    .catch(error => {
        console.error("error: ", error)
    })
}, [])

    return (
        <div className=''>
            <div className='flex items-center justify-center p-4'><h3 className='text-2xl font-bold text-slate-800'>ADD <span className='font-chiller text-red-600 text-4xl'>C</span>
            <span className='font-chiller text-green-600 text-4xl'>O</span>
            <span className='font-chiller text-yellow-600 text-4xl'>l</span>
            <span className='font-chiller text-blue-600 text-4xl'>O</span>
            <span className='font-chiller text-red-600 text-4xl'>R</span> OPTIONS</h3></div>

            <div className='flex items-center justify-center p-4'>
                <ColorAddForm />
            </div>
            <div className='flex items-center justify-center p-4'>
                <p className='text-2xl font-bold text-slate-800'>Added Color Options</p>
            </div>
            <div className=''>
           <ListColorOptions color={color} setColor={setColor}/>
            </div>
            
        </div>
    )
}

export default AddColor