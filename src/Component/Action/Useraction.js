import userlist from '../data/heliverse_mock_data.json'

export const loadUser = () => async (dispatch) => {
    try {
    //   dispatch({ type: "LOAD_USER_REQUEST" });
  
     
  
      const  data  = userlist
      
  
      dispatch({ type: "LOAD_USER_SUCCESS", payload: data });
    } catch (error) {
    //   dispatch({ type: "LOAD_USER_FAIL", payload: error.message });
    }
  };

  export const teamListAdd = (list,data) => async (dispatch) => {
    try {
      dispatch({ type: "LOAD_TEAM_REQUEST" });
       
       
        list.push(data)
      dispatch({ type: "LOAD_TEAM_SUCCESS", payload:list });
    } catch (error) {
      dispatch({ type: "LOAD_TEAM_FAIL", payload: error.message });
    }
  };
  export const teamListdel = (list,data) => async (dispatch) => {
    try {
      dispatch({ type: "LOAD_TEAM_REQUEST" });
       
        
      list.splice(list.indexOf(data), 1)
      dispatch({ type: "LOAD_TEAM_SUCCESS", payload:list });
    } catch (error) {
      dispatch({ type: "LOAD_TEAM_FAIL", payload: error.message });
    }
  };


  export const filterUser = ({name,gender,domain,available}) => async (dispatch) => {
    try {
      dispatch({ type: "FILTER_USER_REQUEST" });
      let  data ;
     
      if(typeof(available)=="boolean"){
      data = userlist.filter((item)=>{
       return (name?item.first_name.toLocaleLowerCase().match(name.toLocaleLowerCase()):true)&&(gender?gender===item.gender:true)
       &&(domain?domain===item.domain:true)&&(item.available==available)
      })}else{
        data  = userlist.filter((item)=>{
            return (name?item.first_name.toLocaleLowerCase().match(name.toLocaleLowerCase()):true)&&(gender?gender===item.gender:true)
            &&(domain?domain===item.domain:true)
           })
    }
  
      dispatch({ type: "FILTER_USER_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FILTER_USER_FAIL", payload: error.message });
    }
  };