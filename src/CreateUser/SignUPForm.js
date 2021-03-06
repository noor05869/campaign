
import React from "react";
import { useHistory } from "react-router-dom";
import SignUp from "./SignUpScreen"
import { useParams } from "react-router";
import useApi from "../hooks/useApi";
import * as api from "../api/api"
const initialValues = {
    username: "",
    
    password: "",
  };
function SignUPForm() {
  const { id } = useParams();  
    const history = useHistory();
    const { error, request,data } = useApi(api.CreateUser);

  async function handleSubmit({ formValues }) {
    alert(id);
    // console.log("form", formValues);
    try {
      const { data } = await request({ ...formValues });
      localStorage.setItem("token", data.token);
    } catch (_) {}
  }

  return (
    <div>
      <SignUp
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        error={error}
        data={data}
      />
    </div>
  );
}

export default SignUPForm
