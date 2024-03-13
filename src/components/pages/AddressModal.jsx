import React from 'react'
import { useSelector } from 'react-redux'

function AddressModal() {
    const { address } = useSelector((state) => state.app)

    return (
        <div className=' bg-blue-600'>
           
            <table className="w-full">
                <thead>
                    <tr className='text-start'>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Street</th>
                        <th>City</th>
                        
                        <th>Zipcode</th>
                    </tr>
                </thead>
                <tbody>
                    {address.data.map((ele, index) => (
                        <tr key={index}>
                            <td>{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>{ele.address.street}</td>
                            <td>{ele.address.city}</td>
                          
                            <td>{ele.address.zipcode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AddressModal
