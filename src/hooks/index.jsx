import React from 'react';

import { UserProvider } from './UserContext';

function AppProvider({ children }) {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
}

export default AppProvider;
