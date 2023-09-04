// Add a room
export const addRoom = async roomData => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/room`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(roomData),
    })

    const data = await response.json()
    return data
};

// Get all rooms
export const getAllRooms = async (size, page) => {
    console.log(size, page)
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms?page=${page}&size=${size}`)
    const data = await response.json()
    return data
};

//Get total room count
export const getCountRoom = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/roomCount`)
    const data = await response.json()
    return data
}


// get price filtered room
export const getPricesRooms = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/filter`)
    const data = await response.json()
    return data
};

//get filtered rooms for hosts
export const getRooms = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${email}`)
    const data = await response.json()
    return data
}

// Get single room
export const getRoom = async id => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/room/${id}`)
    const data = await response.json()
    return data
}

// Delete a room
export const deleteRoom = async id => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    })
    const result = await response.json()
    return result
};

// update a room
export const updateRoom = async (roomData, id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
        body: JSON.stringify(roomData),
    })

    const data = await response.json()
    return data
}

