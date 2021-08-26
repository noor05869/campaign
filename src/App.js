import "./App.css";
import React,{useState,useEffect} from 'react';
import Login from "./components/Login/Login";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import YourCampaigns from "./components/YourCampaigns/YourCampaigns";
import CreateCampaign3 from "./components/CreateCampaign/CreateCampaign3";
import CreateCampaign4 from "./components/CreateCampaign/CreateCampaign4";
import MarketingPlan from "./components/MarketingPlan/MarketingPlan";
import SignUPForm from "./CreateUser/SignUPForm"
import UserList from "./users/UserList";
// import Edit from "./Edit/EditScreen";
import EditForm from "./Edit/edit";
import Company from "./Create_company/comapny";
import FormCampaign from "./components/CreateCampaign/FormCampaign";
import FormCampaign2 from "./components/CreateCampaign/Formcampaign2";



function App() {
  const [role, setrole] = useState()
  useEffect(() => {
    function Roles (){
      
      const data =JSON.parse(localStorage.getItem("login"));
      // setrole(data.isAdmin)
      setrole(data.isAdmin);
      console.log("role",data.isAdmin)
      
    }
    
    Roles();
   
  }, [])
  console.log("res",role)
  return (

    
      <Router>
      
      
        <>
        <Route exact path="/">
        <Login />
      </Route>
      <Route path="/your-campaigns">
        <YourCampaigns />
      </Route>
      <Route path="/create-campaign">
        <FormCampaign />
      </Route>
      <Route path="/create-campaign2">
        <FormCampaign2/>
      </Route>
      <Route path="/create-campaign3">
        <CreateCampaign3 />
      </Route>
      <Route path="/create-campaign4">
        <CreateCampaign4 />
      </Route>
      <Route path="/marketing-plan">
        <MarketingPlan />
        </Route>
      </>
      
<Switch>
        <Route path="/Create-User">
          <SignUPForm/>
        </Route>
        <Route path="/User-List">
          <UserList/>
        </Route>
        <Route path="/User/:id">
          <EditForm/>
        </Route>
        <Route path="/user-company/:id">
          <Company/>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
