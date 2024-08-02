'use client'
import React, { useEffect, useState } from 'react';
import "../components/css/datatable.css"
import axios from 'axios';

const data1 = [
    {
        name: "Ayush Pratap Singh",
        email: "ayush@example.com",
        phoneNumber: "+91 XXXX XX XXXX",
        interest: "Web Development",
        message: "Looking for a website redesign.",
    },
    {
        name: "Ayush Pratap Singh",
        email: "ayush@example.com",
        phoneNumber: "+91 XXXX XX XXXX",
        interest: "Web Development",
        message: "Looking for a website redesign.",
    },
    {
        name: "Ayush Pratap Singh",
        email: "ayush@example.com",
        phoneNumber: "+91 XXXX XX XXXX",
        interest: "Web Development",
        message: "Looking for a website redesign.",
    },
    {
        name: "Ayush Pratap Singh",
        email: "ayush@example.com",
        phoneNumber: "+91 XXXX XX XXXX",
        interest: "Web Development",
        message: "Looking for a website redesign.",
    },
    {
        name: "Ayush Pratap Singh",
        email: "ayush@example.com",
        phoneNumber: "+91 XXXX XX XXXX",
        interest: "Web Development",
        message: "Looking for a website redesign.",
    },
    {
        name: "Ayush Pratap Singh",
        email: "ayush@example.com",
        phoneNumber: "+91 XXXX XX XXXX",
        interest: "Web Development",
        message: "Looking for a website redesign.",
    },
];

export default function Datatable() {
    const [data,setData] = useState([])
    const [renError,setRenError] = useState("")
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get("http://localhost:3000/contactus/getallData");
    //             setData(response.data.contactInfo); // Ensure you're accessing the correct part of the response
    //             console.log(response.data.contactInfo); // Log the correct data
    //         } catch (error) {
    //             setRenError(error.message);
    //         }
    //     };
    
    //     fetchData(); // Call the async function
    // }, []);
    
    return (
        <div className="datatable-container">
            {renError}
            <h2 className="datatable-title">IndiBus Software Solutions Private Limited</h2>
            <table className="datatable-table">
                <thead className="datatable-thead">
                    <tr className="datatable-th">
                        <th className="contact-table-header">Name</th>
                        <th className="contact-table-header">Email</th>
                        <th className="contact-table-header">Phone Number</th>
                        <th className="contact-table-header">Interest</th>
                        <th className="contact-table-header">Message</th>
                    </tr>
                </thead>
                <tbody className="datatable-tbody">
                    {data1.map((item,index) => (
                        <tr key={index} className="datatable-tr">
                            <td className="contact-table-data">{item.name}</td>
                            <td className="contact-table-data">{item.email}</td>
                            <td className="contact-table-data">{item.phoneNumber}</td>
                            <td className="contact-table-data">{item.interest}</td>
                            <td className="contact-table-data">{item.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="datatable-pagination">
                <button className="datatable-pagination-btn datatable-pagination-prev">Previous</button>
                <span className="datatable-pagination-info">Page 1 of 10</span>
                <button className="datatable-pagination-btn datatable-pagination-next">Next</button>
            </div>
        </div>
    );
}
