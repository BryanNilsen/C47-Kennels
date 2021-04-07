import React, { useState, useEffect } from 'react';
//import the components we will need
import { EmployeeCard } from './EmployeeCard';
import { deleteEmployee, getAllEmployees } from '../../modules/EmployeeManager';

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        return getAllEmployees().then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        });
    };

    const handleDeleteEmployee = id => {
        deleteEmployee(id)
            .then(getAllEmployees)
            .then(setEmployees);
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <div className="container-cards">
            {employees.map(employee =>
                <EmployeeCard key={employee.id}
                    employee={employee}
                    handleDeleteEmployee={handleDeleteEmployee}
                />)}
        </div>
    );
};