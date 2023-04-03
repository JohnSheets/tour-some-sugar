const dataBase = {
    Bands: [ {
        id: 1,
        name: "", 
        memberNumber: 4, 
        musicalGenre: ""
    }, {
        id: 2, 
        name: "",
        memberNumber: 5,
        musicalGenre: ""
    }, {
        id: 3, 
        name: "",
        memberNumber: 5,
        musicalGenre: ""
    }, {
    id: 4, 
    name: "",
    memberNumber: 3,
    musicalGenre: ""
    }], 

    Venues: [ {
        id: 1,
        name: "",
        adress: "",
        sqareFootage: 3000,
        maxOccupancy: 250
    }, {
        id: 2, 
        name: "", 
        adress: "",
        squareFootage: 4500,
        maxOccupancy: 350
    }, {
        id: 3,
        name: "",
        adress: "",
        sqareFootage: 5100,
        maxOccupancy: 400
    }],

    Bookings: [ {
        id: 1,
        bandName: "",
        venueName: "",
        bookingDate: ""
    }, {
        id: 2,
        bandName: "",
        venueName: "",
        bookingDate: ""
    }]

}


export const getBands = () => {
    return dataBase.Bands.map(band => ({...band}))
}

export const getVenues = () => {
    return dataBase.Venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return dataBase.Bookings.map(booking => ({...booking}))
}