import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../features/userDetailSlice";

const getUser = () => {
    const dispatch = useDispatch();

    const { users, loading } = useSelector((state) => state.app);

    const fetchApi = async () => {
        const data = await dispatch(getAllUser());
        return data;
    };

    useEffect(() => {
        const data = fetchApi();
        console.log(data);
    }, []);

    return (
        <>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-body">
                        {
                            loading ? <h5 className="card-title">loading</h5> : <h5 className="card-title">Card Title</h5>
                        }
                        <p className="card-text">
                            This is a sample card created using Bootstrap.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default getUser;
