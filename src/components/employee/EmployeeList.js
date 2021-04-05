import React, { useState, useEffect } from 'react';
//import the components we will need
import { EmployeeCard } from './EmployeeCard';
import { getAllEmployees } from '../../modules/EmployeeManager';

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        return getAllEmployees().then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        });
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <div className="container-cards">
            {employees.map(employee => <EmployeeCard key={employee.id} employee={employee} />)}
        </div>
    );
};