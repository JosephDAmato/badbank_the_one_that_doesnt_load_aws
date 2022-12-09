import "./App.css";
import React from "react";
//import components
import BadBankNav from "./components/Menu/Menu"
import Footer from "./components/Footer/Footer";
import UserContext from "./components/context/Context";



function App() {
  const ctx = React.useContext(UserContext);
  return (
    <>
    <UserContext.Provider value={ctx}>
    <BadBankNav />
    
    <Footer />
    </UserContext.Provider>
    </>

  );
}

export default App;