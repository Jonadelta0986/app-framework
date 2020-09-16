# app-framework
![build](https://github.com/aheeva/app-framework/workflows/build/badge.svg) ![release](https://github.com/aheeva/app-framework/workflows/release/badge.svg)

Seemlessly integrate your application with AheevaCCS

## Getting started

This documentation assumes you have an existing AheevaCCS installation at your premise or in the cloud. Please read the following information carefully. It is advised to backup your existing application before moving forward with the changes.


### Steps:

1. Include the provided library in your web application. This can be done adding a script tag inside `<head></head>` tags in the HTML page.

```html
<head>

...
<script src="path/to/aheeva.min.js"></script>
...

</head>
```

The library is extremely small (4.43KB). It should load almost instantly.

2. Initialize the framework as follows

```javascript
// Some function in your application that deals with the setup process
function init() {
	AH.init({
		url: "YOUR_AHEEVA_AWA_URL", // example: https://awa.aheeva.com
		realm: "YOUR_TENANT_REALM"  // example: tenant1
	});
}
```

The above snippet of code will initialize the agent application in a hidden iframe. For agents using WebRTC, make sure the `url` field in the init configuration is `https`. Once this step is done, you are ready to send and receive events from the AheevaCCS application through this app-framework library.

The following section provides description of all the events currently supported by this framework.

## Events

Supported list of events:

1. LoginAgent
2. LogoutAgent
3. SetAgentStatus
4. HangupAllCalls
5. TransferToIVR
6. TransferToPhone
7. Call
8. ToggleCallRecordingStatus
9. ToggleCallHoldStatus
10. SetupConferenceCallWithAgent
11. SetupConferenceCallWithPhoneNumber
12. LeaveConference
13. ClearBlockingModes


Usage:

#### LoginAgent

```javascript
/**
 * Login an agent
 * @param username Username of the agent
 * @param password Password of the agent
 */
AH.LoginAgent(username, password);
```

#### LogoutAgent

```javascript
/**
 * Logout an agent
 */
AH.LogoutAgent();
```

#### SetAgentStatus

```javascript
/**
 * Set agent status
 * @param status Status of the agent (Allowed values: 'active', 'inactive')
 */
AH.SetAgentStatus(status);
```
