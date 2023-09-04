import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';

const createForm = () => {
    const [users, setUsers] = useState({});
    const dispatch = useDispatch();

    const inputHandler = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
        console.log(users);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("UserData: ", users);
        const data = await dispatch(createUser(users));
        console.log("data", data.type);
    }

    return (
        <>

            <div className="container mt-5">
                <h2>Registration Form</h2>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label >Name:</label>
                        <input type="text" onChange={inputHandler} className="form-control" name="name" id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label >Email:</label>
                        <input type="email" onChange={inputHandler} className="form-control" name="email" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label>Age:</label>
                        <input type="number" onChange={inputHandler} className="form-control" name="age" id="age" placeholder="Enter your age" required />
                    </div>
                    <div className="form-group">
                        <label >Gender:</label>
                        <select className="form-control" onChange={inputHandler} name='gender' id="gender" required>
                            <option value="">Select your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default createForm