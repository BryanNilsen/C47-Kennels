import React, { useState, useEffect } from 'react';
import { getAnimalById, deleteAnimal } from '../../modules/AnimalManager';
import './AnimalDetail.css';
import { useParams, useHistory } from "react-router-dom"

export const AnimalDetail = () => {
    // state variables
    const [animal, setAnimal] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // routing helpers
    const { animalId } = useParams();
    const history = useHistory();

    const handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        setIsLoading(true);
        deleteAnimal(animalId).then(() =>
            history.push("/animals")
        );
    };

    useEffect(() => {
        //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
        console.log("useEffect", animalId)
        getAnimalById(animalId)
            .then(animal => {
                if (animal) {
                    setAnimal(animal);
                    setIsLoading(false)
                } else {
                    history.push('/404')
                }
            });
    }, [animalId]);

    return (
        <section className="animal">
            <h3 className="animal__name">{animal.name}</h3>
            <div className="animal__breed">{animal.breed}</div>
            {/* What's up with the question mark???? See below.*/}
            <div className="animal__location">Location: {animal.location?.name}</div>
            <div className="animal__owner">Customer: {animal.customer?.name}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Discharge
        </button>
        </section>
    );
}