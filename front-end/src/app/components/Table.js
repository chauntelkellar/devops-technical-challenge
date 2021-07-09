import React from "react"
import styled from "styled-components"

const Head = styled.div`
color: white;
background-color: #181818;
font-size: x-large;
display: grid;
grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;
`
const Body = styled.div`
display: grid;
font-size: small;
grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;
`

const Table = (props) => {
  console.log(props.data)
  const parseRows = props.data.map(user => {
    return (<>
      <div>{user.username}</div>
      <div>{user.first_name}</div>
      <div>{user.last_name}</div>
      <div>{user.telephone}</div>
      <div>{user.street}</div>
      <div>{user.state}</div>
      <div>{user.zipcode}</div>
    </>)
  })

  return (
    <>
      <Head>
        <div>Username</div>
        <div>First Name</div>
        <div>Last Name</div>
        <div>Telephone</div>
        <div>Street</div>
        <div>State</div>
        <div>Zipcode</div>
      </Head>
      <Body>{parseRows}</Body>
    </>
  )
}


export default Table