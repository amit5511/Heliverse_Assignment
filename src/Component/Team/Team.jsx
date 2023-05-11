import React from 'react'
import { useSelector } from 'react-redux'
import './Team.css'
const Team = () => {
  const { teams } = useSelector(state => state.teams);
  const { users } = useSelector(state => state.users);

  return <>
    <div>
      <h1 className='title'>Teams List</h1>
      <div className='scroll_horizontal'>
        <div className=' headers'>
          <td>Id.</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Email</td>
          <td>Gender</td>
          <td>Demain</td>
          <td>Available</td>
          <td>Avatar</td>
        </div>
        <div className='teams_list'>



          {
            teams.map(ind => (


              <>
                <td>{users[ind].id}</td>
                <td>{users[ind].first_name}</td>
                <td>{users[ind].last_name}</td>
                <td>{users[ind].email}</td>
                <td>{users[ind].gender}</td>
                <td>{users[ind].domain}</td>

                <td>{users[ind].available ? "YES" : "NO"}</td>
                <td><img alt="avatat" width="15px" src={users[ind].avatar} /></td>
              </>


            ))
          }
        </div>
      </div>
    </div>
  </>
}

export default Team