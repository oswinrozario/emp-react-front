import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [employeeTotal, setemployeeTotal] = useState(0);
  const [salaryTotal, setSalaryTotal] = useState(0);

  useEffect(() => {
    employeeCount();
    salaryCount();
  }, []);

  const employeeCount = () => {
    axios.get("http://127.0.0.1:8000/api_4/employee_api/").then((result) => {
      if (result.data) {
        setemployeeTotal(Object.keys(result.data).length);
      }
    });
  };
  const salaryCount = () => {
    axios.get("http://127.0.0.1:8000/api_4/employee_api/").then((result) => {
      if (result.data) {
        let valueAdded = 0;
        for (let i = 0; i < Object.keys(result.data).length; i++) {
          let count = parseInt(result.data[i].salary);
          valueAdded += count;
        }
        setSalaryTotal(valueAdded);
      } else {
        alert(result.data.Error);
      }
    });
  };
  return (
    <div>
      <div className="p-3 d-flex justify-content-around mt-3">
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Employee</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>{employeeTotal}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Salary</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>${salaryTotal}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
