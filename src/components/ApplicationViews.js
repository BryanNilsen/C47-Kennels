import React from "react"
import { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { LocationDetail } from "./location/LocationDetail"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const ApplicationViews = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

    const checkIsAuthenticated = () =>
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)


    return (
        <>
            {console.log("Appviews Rendered")}
            {/* Render the home view when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}

            <Route exact path="/animals">
                {isAuthenticated
                    ? <AnimalList />
                    : <Redirect to="/login" />
                }
            </Route>

            <Route path="/login">
                <Login checkIsAuthenticated={checkIsAuthenticated} />
            </Route>

            <Route path="/register">
                <Register checkIsAuthenticated={checkIsAuthenticated} />
            </Route>
            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>
            <Route path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/locations">
                <LocationList />
            </Route>
            <Route path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>
            <Route path="/customers">
                <CustomerList />
            </Route>
        </>
    )
}