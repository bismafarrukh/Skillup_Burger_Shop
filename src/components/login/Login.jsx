// Write all the code here
import React, { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Login = () => {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const toggleTab = (tab) => {
    if (justifyActive !== tab) {
      setJustifyActive(tab);
    }
  };

  const styling={
    padding:"20px",
  }

  return (
    <MDBContainer style={styling}>
      <MDBTabs justify pills>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => toggleTab("tab1")} active={justifyActive === "tab1"}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => toggleTab("tab2")} active={justifyActive === "tab2"}>
            Signup
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <div className="text-center mb-3">
            <p>Sign in with:</p>
            <div className="d-flex justify-content-between mx-auto" style={{ width: "40%" }}>
            </div>
            <p className="text-center mt-3">or:</p>
          </div>
          <MDBInput wrapperClass="mb-4" label="Email address" id="form1" type="email" />
          <MDBInput wrapperClass="mb-4" label="Password" id="form2" type="password" />
          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
            <a href="!#">Forgot password?</a>
          </div>
          <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
          <p className="text-center">
            Not a member? <a href="#!">Register</a>
          </p>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab2"}>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
};

export default Login;
