import React, {
  createContext, useContext, useState, useEffect,
} from 'react';
import { set } from 'sim/lib/cookies';

const UserContext = createContext({});

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({});

  const putUserData = async (userInfoData) => {
    setUserData(userInfoData);

    await localStorage.setItem('codeburguer:userData', JSON.stringify(userInfoData));
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('codeburguer:userData');

      if (clientInfo) {
        setUserData(JSON.parse(clientInfo));
      }
    };

    loadUserData();
  }, []);

  return (
    <UserContext.Provider value={{ putUserData, userData }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser deve ser com useContext!');
  }

  return context;
};
