import React, { useEffect, useState } from "react";
import "../../styles/AdminDashboard/admin.css";

const StudentsList = () => {

  const [approvedStudents, setApprovedStudents] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/admin/approved-students")
      .then(res => res.json())
      .then(data => setApprovedStudents(data))
      .catch(err => console.error(err));

  }, []);

  return (
    <div className="main-content">

      <h2 className="page-title">Approved Students</h2>

      {/* Filters */}
      <div className="approved-filter-bar">
        <select>
          <option>Branch</option>
        </select>

        <select>
          <option>Year</option>
        </select>

        <select>
          <option>Academic Year</option>
        </select>

        <select>
          <option>Status: Approved</option>
        </select>

        <div className="approved-search">
          <input placeholder="Search Student Name / ID" />
          <i className="fas fa-search"></i>
        </div>
      </div>

      {/* Table */}
      <div className="approved-table">
        <table>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Branch</th>
              <th>From Station</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {approvedStudents.length === 0 ? (
              <tr>
                <td colSpan="6">No approved students yet</td>
              </tr>
            ) : (

              approvedStudents.map((student) => (
                <tr key={student._id}>

                  <td>{student.studentId.prn}</td>
                  <td>{student.studentId.name}</td>
                  <td>{student.studentId.branch}</td>
                  <td>{student.fromStation}</td>
                  <td>{student.category}</td>

                  <td>
                    <span className="approved-badge">Approved</span>
                  </td>

                </tr>
              ))

            )}

          </tbody>

        </table>
      </div>

    </div>
  );
};

export default StudentsList;