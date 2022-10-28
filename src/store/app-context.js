import React from "react";


const AppContext = React.createContext({
  lang: 'en',
  theme: 'ligth',
  toggleLang: () => {},
});

export default AppContext;