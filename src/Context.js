import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import paginate from "./paginate";

import pastry from "./data/pastry";
import sweets from "./data/sweets";
import soups from "./data/soups";

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
  const according_to_query_render_heading = () => {
    if (state.query === pastry) {
      return <h1>Hamur İşi</h1>;
    }
    if (state.query === sweets) {
      return <h1>Tatlılar</h1>;
    }
    if (state.query === soups) {
      return <h1>Çorbalar</h1>;
    }
  };
  const according_to_query_render_heading2 = () => {
    if (state.query === pastry) {
      return "pastry";
    }
    if (state.query === sweets) {
      return "sweets";
    }
    if (state.query === soups) {
      return "soups";
    }
  };

  useEffect(() => {
    fetchData(state.query);
  }, [state.query]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        changeQuery,
        increaseFunc,
        decreaseFunc,
        pastry,
        sweets,
        soups,
        according_to_query_render_heading,
        according_to_query_render_heading2,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
