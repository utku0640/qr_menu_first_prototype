import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import paginate from "./paginate";
import pastry from "./pastry";
import sweets from "./sweets";
import soups from "./soups";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    query: pastry,
    isLoading: true,
    data: [],
    page: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = (data) => {
    dispatch({ type: "SET_LOADING" });

    //console.log(data.data);
    //dispatch({ type: "SET_DATA", payload: data.data });
    dispatch({
      type: "SET_OTHER_DATA",
      payload: paginate(data),
    });
    //console.log(data.data);
  };
  const changeQuery = (value) => {
    dispatch({ type: "CHANGE_QUERY", payload: value });
  };
  const increaseFunc = () => {
    dispatch({ type: "INC", payload: state.data.length });
  };
  const decreaseFunc = () => {
    dispatch({ type: "DEC", payload: state.data.length });
  };

  useEffect(() => {
    fetchData(state.query);
  }, [state.query]);

  return (
    <AppContext.Provider
      value={{ ...state, changeQuery, increaseFunc, decreaseFunc }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
