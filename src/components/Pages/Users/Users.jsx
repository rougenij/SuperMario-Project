import React, { useState, useEffect } from "react";
import mockApi from "../../API/mockApi";

function Users() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await mockApi.get("users");
    setData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await mockApi.delete(`users/${id}`);
    fetchData();
  };

  const handleEdit = (id) => {
    mockApi.put(`users/${id}`);
    fetchData();
  };

  const displayUser = () => {
    return data.map((user) => {
      return (
        <div className="card-container" key={user.id}>
          <h1>Player's ID: {user.id}</h1>
          <div className="card-img-container">
            <img src={user.profileimg} alt="userprofile" />
          </div>
          <input placeholder="username" value={user.username}></input>
          <input placeholder="score" value={user.score}></input>
          <input placeholder="email" value={user.email}></input>
          <button onClick={() => handleEdit(user.id)}>Edit</button>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      );
    });
  };

  return <div>{data && displayUser()}</div>;
}

export default Users;
