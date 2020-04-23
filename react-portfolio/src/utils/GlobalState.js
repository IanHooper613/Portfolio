import React, { createContext, useReducer, useContext } from 'react';
import projects from './projects.json';

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case 'getall':
      return {
        ...state,
        projects
      }
    default:
      return state
  }
};

const StoreProvider = ({ ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    projects: projects
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => useContext(StoreContext);

export { StoreProvider, useStoreContext };