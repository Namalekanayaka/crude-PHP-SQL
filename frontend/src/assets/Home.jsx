import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
      <div className="card shadow-lg w-75">
        <div className="card-header bg-primary text-white">
          <h2 className="text-center">Students List</h2>

          <div className="d-flex justify-content-end">
            <Link to="/create" className="btn btn-success">
              Create +
            </Link>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead className="table-primary">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((student, index) => {
                return (
                  <tr key={index}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>
                      <Link
                        to={`/read/${student.id}`}
                        className="btn btn-sm btn-info me-2"
                      >
                        <i className="bi bi-eye"></i> Read
                      </Link>
                      <button className="btn btn-sm btn-warning me-2">
                        <i className="bi bi-pencil"></i> Edit
                      </button>
                      <button className="btn btn-sm btn-danger">
                        <i className="bi bi-trash"></i> Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
