import React, { useState, useEffect } from 'react'
import Table from './components/Table'

const Main = () => {
  const [usersState, setUsersState] = useState();
  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => setUsersState(data));
  }, []);

  return (
    <>
      <h1>
        {usersState && <Table data={usersState} />}
      </h1>
    </>
  )
}

export default Main;