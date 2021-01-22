function onSignIn() {
	var accessToken = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse(true).access_token;

	logLine("Attempting PlayFab Sign-in");
	PlayFabClientSDK.LoginWithGoogleAccount({
		AccessToken: accessToken,
		CreateAccount : true,
		TitleId: "2111C",
	}, onPlayFabResponse);
}
function onPlayFabResponse(response, error) {
    if (response)
        logLine("Response: " + JSON.stringify(response));
    if (error)
        logLine("Error: " + JSON.stringify(error));
}
function logLine(message) {
    var textnode = document.createTextNode(message);
    document.body.appendChild(textnode);
    var br = document.createElement("br");
    document.body.appendChild(br);
}