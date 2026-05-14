import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addusers, deleteusers, editusers, getusers } from './reducer';

function Userapi() {

    const[name,setName]=useState("");
    const API =  "https://jsonplaceholder.typicode.com/users";

    const users = useSelector(state=>state.usersData);
    const dispatch = useDispatch();
    
    // fetch users data
    
    const fetchusers = async ()=>{
        const res = await axios.get(API);
        dispatch(getusers(res.data));
    }

    //delete user

    const deleteuser = async (id)=>{
        const res = await axios.post(API,{name:name});
        dispatch(deleteusers(id));
    }
    
    //adduser

    const adduser = async ()=>{
        const res = await axios.post(API,{name:name});
        dispatch(addusers(res.data));
    }

    //edituser

    const edituser = async (id)=>{
        const res = await axios.post(API,{name:name});
        dispatch(editusers(id));
    }


    useEffect(()=>{
        fetchusers()
    },[])
  return (
    <>
    Add: <input type="text" 
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />
    <button onClick={()=>{adduser()}}>Add User</button>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((val,index)=>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{val.name}</td>
                    <td>
                        <button onClick={()=>{edituser()}}>Edit</button>
                        <button onClick={()=>{deleteuser(val.id)}}>Delete</button>
                    </td>
                </tr>
            )
            }
        </tbody>
      </table>
    </>
  )
}

export default Userapi
