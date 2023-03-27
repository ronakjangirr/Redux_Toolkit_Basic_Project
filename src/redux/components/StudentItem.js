import React from 'react';
import { useDispatch } from "react-redux";

function StudentItem({ student }){
    const { id, firstName, lastName, email, phone, address } = student;
    const dispatch = useDispatch();
    return(
        <>
        <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
        </tr>
        </thead>
        <tbody>
                <tr>
                    <td></td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{address}</td>
                </tr>
        </tbody>
    </table>
        </>
    )
}

export default StudentItem;