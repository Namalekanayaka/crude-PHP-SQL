import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Read() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/read/id`)
      .then((res) => {
        console.log(res.data);
        setStudent(res.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching student details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!student) {
    return <div>No student data found</div>;
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Student Details</h2>
        <h2>{student.ID}</h2>
        <h2>{student.name}</h2>
        <h2>{student.email}</h2>

        <Link to="/" className="btn btn-primary">
          Back
        </Link>
        <button className="btn btn-primary">Edit</button>
      </div>
    </div>
  );
}

export default Read;
