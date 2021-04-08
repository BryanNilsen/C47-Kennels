const remoteURL = "http://localhost:5002"

export const getAnimalById = (animalId) => {
    //be sure your animals have good data and related to a location and customer
    return fetch(`${remoteURL}/animals/${animalId}?_expand=location&_expand=customer`)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else if (res.status === 404) {
                return Promise.reject('error 404')
            } else {
                return Promise.reject('some other error', res.status)
            }
        })
        .then(data => {
            console.log('data is', data)
            return data
        })
        .catch(error => console.log('error is', error))
}

export const getAllAnimals = () => {
    return fetch(`${remoteURL}/animals`)
        .then(res => res.json())
}

export const deleteAnimal = (id) => {
    return fetch(`${remoteURL}/animals/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}