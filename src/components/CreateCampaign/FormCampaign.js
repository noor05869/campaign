import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import useApi from "../../hooks/useApi";
import * as api from "../../api/api"
import CampForm from "./CreateCampaign";
const initialValues = {
    Campaign: "",
    Thematic: "",
    startDate:"",
    EndDate:"",
    Action:"",
    age:"",
    target:"",
    Gender:""
  
  };

const FormCampaign = () => {
  const history = useHistory();
    // const { error, request } = useApi(api.loginUser);
useEffect(() => {
    async function fetchData(){
     const data =JSON.parse(localStorage.getItem("data"));
    //  console.log("data",data.Thematic)
   if (localStorage.getItem("data")){
      initialValues.Campaign=data.Campaign;
      initialValues.Thematic=data.Thematic;
      initialValues.startDate=data.startDate;
      initialValues.EndDate=data.EndDate;
      initialValues.Action=data.Action;
      initialValues.age=data.age;
      initialValues.Gender=data.Gender;
      initialValues.target=data.target
   }
   else{
    initialValues.Campaign="";
    initialValues.Thematic="";
    initialValues.startDate="";
    initialValues.EndDate="";
    initialValues.Action="";
    initialValues.age="";
    initialValues.Gender="";
    initialValues.target=""
   }
    }
   fetchData();
}, [])
  async function handleSubmit({ ...formValues }) {
    history.push("/create-campaign2");
    console.log("form1", formValues);
    
    try {
    
      localStorage.setItem("form1",JSON.stringify(formValues));
     
    } catch (_) {}
  }

  return (
    <div>
      <CampForm
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        // error={error}
      />
    </div>
  );
};

export default FormCampaign;
