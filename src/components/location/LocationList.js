import React, { useState, useEffect } from 'react';
//import the components we will need
import { LocationCard } from './LocationCard';
import { deleteLocation, getAllLocations } from '../../modules/LocationManager';

export const LocationList = () => {
    const [locations, setLocations] = useState([]);

    const getLocations = () => {
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        });
    };
    const handleDeleteLocation = id => {
        deleteLocation(id)
            .then(getAllLocations)
            .then(setLocations);
    };
    useEffect(() => {
        getLocations();
    }, []);


    return (
        <div className="container-cards">
            {locations.map(location =>
                <LocationCard
                    key={location.id}
                    location={location}
                    handleDeleteLocation={handleDeleteLocation}
                />)}
        </div>
    );
};