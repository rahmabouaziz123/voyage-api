import logo from "./logo.svg";
import "./App.css";
import { fetchUsers } from "./redux/user/userAction";
import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { ListArticles } from "./components/ListArticles";

import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";

import { Footer } from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Aceuil } from "./components/Aceuil";
import { Contact } from "./components/Contact";
import { Service } from "./components/Service";
import { Detail } from "./components/Detail";
import { Profil } from "./components/Profil";


function App({ userData, fetchUsers }) {
  console.log(userData);

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(userData);

  


  return (
    <div>
      <div>
        {/* <h2>List Articles</h2> */}
        {/* <div>
          {userData &&
            userData.users &&
            userData.users.articles &&
            React.Children.toArray(
              userData.users.articles.map((el) => (
                <h5 >{el.source.name}</h5>
              ))
            )}
        </div> */}

        <div>
          <Router>
            <NavBar  />
          
            
           <Routes>
           
              <Route
                path="/"
                element={<div style={{marginTop:"0%"}}>   <Home /> <ListArticles info={userData.users.articles} />  </div>}
              ></Route> 

             {/* <Route
                path="/"
                element={<div style={{marginTop:"0%"}}>   <Home /> <ListArticles info={userData.users.articles.filter(el=>el.source.name.toLocaleLowerCase().includes(searching.toLocaleLowerCase()))} />  </div>}
              ></Route> */}

              <Route path="/Aceuil" element={ <Aceuil/> }> </Route>
              <Route path="/contact"  element={<Contact/>}> </Route>
              <Route path="/service" element={<Service/>}></Route>

              <Route path="/article/:author"   element={<Detail data={userData.users.articles}/>}> </Route>

              
              
            </Routes>
            <Footer />
            <Profil/>
           
          
          </Router>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user1,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

// export default App;

export default connect(mapStateToProps, mapDispatchToProps)(App);
