const data: { [key: string]: string } = {
    client_id:
        "974951979749-1nj8kbls25sbdjfeu69noa9r7hdpqqmd.apps.googleusercontent.com",
    redirect_uri: `${process.env.REACT_APP_REDIRECT_URI}`,
    response_type: "token",
    state: "state_parameter_passthrough_value",
    scope: "https://mail.google.com https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
    include_granted_scopes: "true",
};

/*
 * Create form to request access token from Google's OAuth 2.0 server.
 */
export const oauth2SignIn = () => {
    // Google's OAuth 2.0 endpoint for requesting an access token
    const oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    const form = document.createElement("form");
    form.setAttribute("method", "GET"); // Send as a GET request.
    form.setAttribute("action", oauth2Endpoint);

    // Parameters to pass to OAuth 2.0 endpoint.

    // Add form parameters as hidden input values.
    for (const p in data) {
        const input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("name", p);
        input.setAttribute("value", data[p]);
        form.appendChild(input);
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
};
