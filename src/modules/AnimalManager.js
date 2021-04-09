const remoteURL = "http://localhost:5002"

export const getAnimalById = (animalId) => {
    //be sure your animals have good data and related to a location and customer
    return fetch(`${remoteURL}/animals/${animalId}?_expand=location&_expand=customer`)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else if (res.status === 404) {
                const errorMsg = `${res.status}: ${res.statusText}`
                return Promise.reject(errorMsg)
            } else {
                return Promise.reject('some other error just happened!!!!', res.status)
            }
        })
        .catch(error => console.log('error', error))
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