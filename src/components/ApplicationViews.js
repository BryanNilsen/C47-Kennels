import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { EmployeeCard } from "./employee/EmployeeCard"
import { LocationCard } from "./location/LocationCard"
import { CustomerCard } from "./customer/CustomerCard"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the home view when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalCard />
            </Route>
            <Route path="/employees">
                <EmployeeCard />
            </Route>
            <Route path="/locations">
                <LocationCard />
            </Route>
            <Route path="/customers">
                <CustomerCard />
            </Route>
        </>
    )
}