// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
function onSignIn() {
    var accessToken = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse(true).access_token;

    logLine("Attempting PlayFab Sign-in");
    PlayFabClientSDK.LoginWithGoogleAccount({
        AccessToken: accessToken,
        CreateAccount : true,
        TitleId: "YOUR_PLAYFAB_TITLE", // TODO: PUT YOUR TITLE ID HERE!
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