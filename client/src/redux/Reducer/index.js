import {
  SEARCH_DRIVERS,
  GET_DETAIL,
  GET_DRIVERS,
  ORDER_ALPHA,
  ORDER_DOB,
  // FILTER_BY_TEAMS,
  GET_TEAMS,
  // CREATE_DRIVER,
  FILTER_BY_TEAM,
  FILTER_BY_ORIGIN,
  POST_DRIVERS,
} from '../actions/actionsTypes';

const initialState = {
  drivers: [],
  allDrivers: [],
  teams: [],
  details: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
        allDrivers: action.payload,
      };
    case SEARCH_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        details: action.payload,
      };
    case ORDER_ALPHA:
      let orderAlpha =
        action.payload === 'A-Z'
          ? state.drivers.sort((a, b) => {
              if (a.name.forename > b.name.forename) {
                return 1;
              }
              if (a.name.forename < b.name.forename) {
                return -1;
              }
              return 0;
            })
          : state.drivers.sort((a, b) => {
              if (a.name.forename > b.name.forename) {
                return -1;
              }
              if (a.name.forename < b.name.forename) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        drivers: orderAlpha,
      };
    case ORDER_DOB:
      const dob =
        action.payload === 'High'
          ? state.drivers.sort((a, b) => a.dob - b.dob)
          : state.drivers.sort((a, b) => b.dob - a.dob);
      return {
        ...state,
        drivers: dob,
      };
    // case FILTER_BY_TEAMS:
    //   const allDrivers2 = state.allDrivers;
    //   const TeamsFilter =
    //     action.payload === 'All'
    //       ? allDrivers2
    //       : allDrivers2.filter(
    //           (drivers) =>
    //             drivers.teams &&
    //             drivers.teams
    //               .map((element) => element.season)
    //               .includes(action.payload)
    //         );
    //   return {
    //     ...state,
    //     drivers: TeamsFilter,
    //   };

    case FILTER_BY_TEAM:
      const allDrivers2 = state.allDrivers;
      const filteredByTeam =
        action.payload === 'All'
          ? allDrivers2
          : allDrivers2.filter(
              (drivers) =>
                drivers.teams &&
                drivers.teams
                  .map((element) => element.teams)
                  .includes(action.payload)
            );
      return {
        ...state,
        drivers: filteredByTeam,
      };

    case FILTER_BY_ORIGIN:
      const selectedOrigin = action.payload;
      const filteredByOrigin =
        selectedOrigin === 'All'
          ? state.allDrivers
          : state.allDrivers.filter(
              (driver) => driver.origin === selectedOrigin
            );

      return {
        ...state,
        drivers: filteredByOrigin,
      };
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    // case CREATE_DRIVER:
    //   return {
    //     ...state,
    //     allDrivers: action.payload,
    //   };
    case POST_DRIVERS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default rootReducer;
