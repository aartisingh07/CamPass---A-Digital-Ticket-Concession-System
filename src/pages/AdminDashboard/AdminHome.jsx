import React from "react";
import students from "../../data/students";
import "../../styles/AdminDashboard/admin.css";

const AdminHome = () => {

  const pendingStudents = students.filter(
    (student) => student.status !== "Approved"
  );

  return (
    <>
        {/* DASHBOARD CARDS */}
          <div className="cards">
            <div className="card">
              <h4>Total Students Registered</h4>
              <h2>{students.length}</h2>
            </div>

            <div className="card">
              <h4>Approved Applications</h4>
              <h2>None</h2>
            </div>

            <div className="card">
              <h4>Pending Approvals</h4>
              <h2>None</h2>
            </div>

            <div className="card">
              <h4>Total Concessions (This Year)</h4>
              <h2>None</h2>
            </div>
          </div>

          {/* FILTER BAR */}
          <div className="filter-bar">
            <div className="filter-left">
              <span className="filter-text">Filter By:</span>

              <div className="filter-group">
                <select>
                  <option>Semester</option>
                  <option>1st Semester</option>
                  <option>2nd Semester</option>
                  <option>3rd Semester</option>
                  <option>4th Semester</option>
                  <option>5th Semester</option>
                  <option>6th Semester</option>
                  <option>7th Semester</option>
                  <option>8th Semester</option>
                </select>

                <select>
                  <option>Academic Year</option>
                </select>

                <select>
                  <option>Caste</option>
                  <option>Open</option>
                  <option>SC</option>
                  <option>ST</option>
                </select>
              </div>
            </div>

            <div className="search-container">
              <span className="search-label">Search:</span>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Student Name / Student ID"
                />
                <i className="fas fa-search"></i>
              </div>
            </div>
          </div>

          {/* STUDENT TABLE */}
          <div className="table-section">
            <h3>Applications Awaiting Review</h3>

            {pendingStudents.length === 0 ? (
              <p className="no-data">
                All applications have been reviewed 🎉
              </p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>Semester</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {pendingStudents.map((student) => (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.semester}</td>
                      <td>
                        <span
                          className={`status ${student.status.toLowerCase()}`}
                        >
                          {student.status}
                        </span>
                      </td>
                      <td>
                        <button className="view-btn">
                          View Application
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
    </>
    );
};
export default AdminHome