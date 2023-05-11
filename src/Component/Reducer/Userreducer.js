


export const userReducer = (state = { user:[]}, action) => {
    switch (action.type) {

     
        case "FILTER_USER_REQUEST":
        return {
          loading: true,
        };

    
        case "FILTER_USER_SUCCESS":
        return { 
          ...state,
          loading: false,
          user: action.payload,
        };
       

      //load user fail
   
   
    case  "FILTER_USER_FAIL":
      return {
        loading: false,
        user:[],
        error: action.payload,
      }

      default:
        return state;
    }
  };
  export const teamReducer = (state = { teams:[]}, action) => {
    switch (action.type) {

     
        case "LOAD_TEAM_REQUEST":
        return {
          loading: true,
        };

    
        case "LOAD_TEAM_SUCCESS":
        return { 
          ...state,
          loading: false,
          teams: action.payload,
        };
       

      //load user fail
   
   
    case  "LOAD_TEAM_FAIL":
      return {
        loading: false,
        teams:[],
        error: action.payload,
      }

      default:
        return state;
    }
  };
  export const loaduserReducer = (state = { users:[]}, action) => {
    switch (action.type) {

   case "LOAD_USER_SUCCESS":
        return { 
            ...state,
            loading: false,
            users: action.payload,
          };
       
      default:
        return state;
    }
  };