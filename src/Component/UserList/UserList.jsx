
import React, { useEffect, useState } from 'react'
import { filterUser, loadUser, teamList, teamListAdd, teamListdel } from '../Action/Useraction';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';



const UserList = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user)
  const { users } = useSelector(state => state.users)
  const { teams } = useSelector(state => state.teams)

  useEffect(() => {
    dispatch(filterUser({}));
    dispatch(loadUser())

  }, [dispatch])


  const [page, setpage] = useState(0);


  //filter user as required
  const [name, setname] = useState("");
  const [gender, setgender] = useState("");
  const [domain, setdomain] = useState("");
  const [available, setavailable] = useState("")

  const options = new Set();
  users.map((d) => {
    options.add(d.domain)

  })

  //creating new array of user for current page

  let result_per_page = 20;
  let e = Math.min(page * result_per_page + 20, user.length)
  let curpageuser = user.slice(page * result_per_page, e);





  const searchHandler = () => {
    console.log(domain)
    dispatch(filterUser({ name, gender, domain, available }))
    // setavailable("")
    // setdomain("")
    // setgender("")
    // setname("")
    setpage(0)
  }

  const filterClearHandler = () => {
    dispatch(filterUser({}));
    setavailable("")
    setdomain("")
    setgender("")
    setname("")
    setpage(0)
  }



  const checkBoxHandler = (id, val) => {
    if (val == true) {
      let check=true;
      teams.map(item => {

        if (users[id].domain == users[item].domain) {
          alert("Domain type " + users[id].domain + " already added");
           check=false
        }
      })
   if(check){
      dispatch(teamListAdd(teams, id))}
    }
    else {
      dispatch(teamListdel(teams, id));

    }

  }


  const navigate = useNavigate();
  const navigateToListPage = () => {


    navigate('/team')
  }



  return <>
    <div className='filter_header'>

      <input placeholder='Entre User Name' value={name} onChange={(e) => { setname(e.target.value); /*searchHandler()*/ }} />
      <div>
        <label> M &nbsp; </label>
        <input style={{ cursor: "pointer" }} type='radio' onChange={() => { setgender("Male");/* searchHandler()*/ }} name="gender" />
        <label> &nbsp; F &nbsp; </label>

        <input style={{ cursor: "pointer" }} type='radio' onChange={() => { setgender("Female");/* searchHandler() */ }} name="gender" />
      </div>
      <select
        value={domain}
        onChange={async (e) => { setdomain(e.target.value)/*; searchHandler()*/ }}

      >
        <option value="">domain</option>
        {

          [...options].map((item) => <option value={item}>{item}</option>

          )
        }


      </select>


      <div style={{ flexDirection: 'column' }}>
        <label style={{ marginBottom: '5px' }}> Available </label>
        <div >
          <label>Yes &nbsp;</label>
          <input style={{ cursor: "pointer" }} type='radio' onChange={() => { setavailable(true);/* searchHandler() */ }} name="ava" />
          <label> &nbsp;No &nbsp;</label>

          <input style={{ cursor: "pointer" }} type='radio' onChange={() => { setavailable(false)/*; searchHandler() */ }} name="ava" />
        </div>
      </div>
      <input type='button' value="Search" onClick={() => searchHandler()} />
      <input type='button' value="Clear Filter" onClick={() => filterClearHandler()} />
    </div>
    <div className='scroll_horizontal'>

      <div className=' headers'>
       
        <th>Id.</th>
        <th>First_name</th>
        <th>Last_name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Domain</th>
        <th>Available</th>
      
        <th>Make Team</th>
        
      </div>
      <div className='teams_list'>
        {
          curpageuser.map(user => (

            <>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.domain}</td>

              <td>{user.available ? "YES" : "NO"}</td>
              
              <td><input type="checkbox" onChange={(e) => checkBoxHandler(user.id-1, e.target.checked)} /></td>
            </>


          ))
        }
      </div>

    </div>
    <div className='pagination'>
      <input disabled={page < 1 ? true : false} onClick={() => setpage(page - 1)} type="button" value="Prev" />
      <span>{page + 1}</span>
      <input disabled={user.length / (20 * (page + 1)) >= 1 ? false : true} onClick={() => setpage(page + 1)} type="button" value="Next" />
    </div>
    <div className='create_list'>
      <input type='button' value="create team" onClick={() => navigateToListPage()} />
    </div>
  </>
}

export default UserList