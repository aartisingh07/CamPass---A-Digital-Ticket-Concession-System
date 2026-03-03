import React from "react";
import "../../styles/AdminDashboard/admin.css";

const approvedStudents = [
  { id: "S2021001", name: "Amit Sharma", branch: "CSE", year: "3rd Year", semester: "Semester 5" },
  { id: "S2021002", name: "Divya Patel", branch: "IT", year: "3rd Year", semester: "Semester 5" },
  { id: "S2021003", name: "Rahul Verma", branch: "Mechanical", year: "3rd Year", semester: "Semester 5" },
  { id: "S2021004", name: "Sneha Kapoor", branch: "CSE", year: "3rd Year", semester: "Semester 5" },
  { id: "S2021005", name: "Vikram Singh", branch: "IT", year: "3rd Year", semester: "Semester 5" },
  { id: "S2021006", name: "Pooja Reddy", branch: "Mechanical", year: "3rd Year", semester: "Semester 5" },
];

const StudentsList = () => {
  return (
    <div className="main-content">

      <h2 className="page-title">Approved Students</h2>

      {/* Filters */}
      <div className="approved-filter-bar">
        <select>
          <option>Branch: CSE</option>
        </select>

        <select>
          <option>Year: 3rd Year</option>
        </select>

        <select>
          <option>Academic Year: 2021-2022</option>
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
              <th>Year</th>
              <th>Semester</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {approvedStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.branch}</td>
                <td>{student.year}</td>
                <td>{student.semester}</td>
                <td>
                  <span className="approved-badge">Approved</span>
                </td>
                <td>
                  <button className="edit-btn">
                    <i className="fas fa-pen"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default StudentsList;