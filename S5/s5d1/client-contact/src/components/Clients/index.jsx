import React from 'react'
import faker from 'faker'
import Client from '../Client'

const Clients = () => {

  const clientsList = Array.from({length:100}, () => ({
  id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  job: faker.name.jobTitle(),
  avatar: faker.image.avatar(),
  phoneNumber : faker.phone.phoneNumber(),
  }))

  console.log(clientsList);

  return(
    <ul>{clientsList.map((clientData) => (
        <Client data={clientData} key={clientData.id} />
    ))}
    </ul>
  )
}

export default Clients;