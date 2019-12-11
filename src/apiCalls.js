export const getReservations = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
}

// export const postReservation = (newRes) => {
//     const options = {
//         method: 'POST',
//         body: JSON.stringify(newRes),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };
//     return fetch('', options)
//     .then(res => res.json())
// }