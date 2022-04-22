import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const data: { [key: string]: string } = {
  client_id:
    "974951979749-1nj8kbls25sbdjfeu69noa9r7hdpqqmd.apps.googleusercontent.com",
  redirect_uri: "http://localhost:3000/auth",
  response_type: "token",
  state: "state_parameter_passthrough_value",
  scope: "https://mail.google.com",
  include_granted_scopes: "true",
  //   state: "pass-through value",
};

/*
 * Create form to request access token from Google's OAuth 2.0 server.
 */
function oauthSignIn() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  const oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  const form = document.createElement("form");
  form.setAttribute("method", "GET"); // Send as a GET request.
  form.setAttribute("action", oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.

  // Add form parameters as hidden input values.
  for (const p in data) {
    var input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", p);
    input.setAttribute("value", data[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}

const Auth = () => {
  const [accessToken, setAccessToken] = useState("");
  const hc = () => {
    oauthSignIn();
  };
  const loca = useLocation();

  useEffect(() => {
    if (loca.hash) {
      const hash = loca.hash.substring(1);
      console.log(hash);
      const matchedStr = hash.match(/access_token=.*?&/);
      const accStr = matchedStr ? matchedStr[0] : "";
      console.log(accStr);
      const accList = accStr.split("=");
      const accessTokenValue = accList[1].substring(0, accList[1].length - 1);
      setAccessToken(accessTokenValue);
    }
  }, []);
  useEffect(() => {
    console.log("accesstoken: ", accessToken);
    const fetchData = async () => {
      const d = await axios.post("http://localhost:5001/post-token", {
        body: {
          token: accessToken,
        },
      });
      console.log("what the heck", d);
    };
    fetchData();
  }, [accessToken]);

  return <button onClick={hc}>Auth</button>;
};

export default Auth;
