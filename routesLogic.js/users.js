import { v4 as uuidv4 } from 'uuid';

const apiKey = process.env.SECRET_PERSON_DATA

let personData = [
    {
        "firstName": "Tanya",
        "lastName": "Bogisich",
        "email": "tanya.bogisich@email.com",
        "avatar": "https://robohash.org/ducimuseumdolores.png?size=300x300&set=set1",
        "work": "Technology Coordinator",
        "state": "Alaska",
        "id": "553025fd-6c78-44e2-9f62-9068a602f643"
    },
    {
        "firstName": "Marya",
        "lastName": "Stracke",
        "email": "marya.stracke@email.com",
        "avatar": "https://robohash.org/quiahicqui.png?size=300x300&set=set1",
        "work": "Direct Accounting Assistant",
        "state": "Alaska",
        "id": "12c5e077-1724-40b7-a3d6-90f3940ae706"
    },
    {
        "firstName": "Jason",
        "lastName": "Bradtke",
        "email": "kerry.bradtke@email.com",
        "avatar": "https://robohash.org/explicaboinventorecommodi.png?size=300x300&set=set1",
        "work": "Hospitality Agent",
        "state": "Connecticut",
        "id": "7b08749a-1404-4e4f-96ff-17f5e2196995"
    }
]

/*
    ================================================================
                    SAMPLE DATA GENERATE VIA API
    ================================================================
*/
// axios(apiKey)
//     .then(response => {
//         const datas = response.data
//         // console.log(datas)
//         datas.forEach(data => {
//             let firstName = data.first_name
//             let lastName = data.last_name
//             let email = data.email
//             let avatar = data.avatar
//             let work = data.employment.title
//             let state = data.address.state

//             personData.push({
//                 "firstName": firstName,
//                 "lastName": lastName,
//                 "email": email,
//                 "avatar": avatar,
//                 "work": work,
//                 "state": state,
//                 "id": uuidv4()
//             })
//         })
//     })
//     .catch(() => console.log('No response returned'))

export const getData = (req, res) => {
    res.send(personData)
}

export const postData = (req, res) => {
    const person = req.body
    // const userWithId = { ...user, id: uuidv4() }
    // personData.push({ ...user, id: uuidv4() })

    personData.push({ ...person, id: uuidv4() })
    res.send(`${person.firstName} Signed in and his/her data was added to the database`)
}

export const foundData = (req, res) => {
    const { id } = req.params
    const foundPerson = personData.find((person) => person.uuidv4 === id)

    // console.log(req.params)
    res.send(foundPerson)
}

export const deleteData = (req, res) => {
    const { id } = req.params
    personData = personData.filter((person) => person.id !== id)
    
    res.send(`User with the id ${id} deleted from the database`)
}

export const patchData = (req, res) => {
    const { id } = req.params
    const { firstName, lastName, email, avatar, work, state } = req.body
    const personToBeUpdated = personData.find((person) => person.id === id)

    if(firstName) personToBeUpdated.firstName = firstName
    if(lastName) personToBeUpdated.lastName = lastName
    if(email) personToBeUpdated.email = email
    if(avatar) personToBeUpdated.avatar = avatar
    if(work) personToBeUpdated.work = work
    if(state) personToBeUpdated.state = state

    res.send(`User with the id ${id} has been updated`)
}