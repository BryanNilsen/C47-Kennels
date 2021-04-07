import React, { useState, useEffect } from 'react';
import { getLocationById, deleteLocation } from '../../modules/LocationManager';
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
    const [location, setLocation] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const { locationId } = useParams();
    const history = useHistory();

    const handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        setIsLoading(true);
        deleteLocation(locationId).then(() =>
            history.push("/locations")
        );
    };

    useEffect(() => {
        getLocationById(locationId)
            .then(location => {
                setLocation(location);
                setIsLoading(false)
            });
    }, [locationId]);

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Close Location
        </button>
        </section>
    );
}