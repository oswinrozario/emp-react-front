import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../../service/EmployeeService";

const ListEmployeeComponent = () => {
  const [employeeArray, setEmployeeArray] = useState([]);

  useEffect(() => {
    getAllEmployee();
  }, []);

  function getAllEmployee() {
    EmployeeService.getAllEmployee()
      .then((res) => {
        setEmployeeArray(res.data);
        console.log(res);
      })
      .catch((e) => console.log(e));
  }
  function deleteEmployee(e, id) {
    e.preventDefault();
    EmployeeService.deleteEmployee(id)
      .then(getAllEmployee())
      .catch((e) => console.log(e));
  }

  return (
    <div className="container">
      <Link to={"/add-employee"} className="btn btn-primary mb-2 mt-3" href="">
        Add Employee
      </Link>
      <h2 className="text-center mb-4">List Employee</h2>
      <table className="table table-bordered table striped">
        <thead>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Employee Profile</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {employeeArray.map((employee) => (
            <tr id={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.profile}</td>
              <td>
                <Link
                  to={`/add-employee/${employee.id}`}
                  className="btn btn-info"
                  href=""
                >
                  Update
                </Link>{" "}
                <a
                  onClick={(e) => deleteEmployee(e, employee.id)}
                  className="btn btn-danger"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
