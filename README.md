# app-framework

![build](https://github.com/aheeva/app-framework/workflows/build/badge.svg) ![release](https://github.com/aheeva/app-framework/workflows/release/badge.svg) [![npm version](https://badge.fury.io/js/%40aheeva%2Fapp-framework.svg)](https://badge.fury.io/js/%40aheeva%2Fapp-framework)

Seemlessly integrate AheevaCCS into your application, written in TypeScript

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

The library is extremely small ~2.0 KB (minified). It should load almost instantly.

2. Initialize the framework as follows

```javascript
// Some function in your application that deals with the setup process
function setupAH() {
  AH.init({
    url: 'YOUR_AHEEVA_AWA_URL', // example: https://awa.aheeva.com
    realm: 'YOUR_TENANT_REALM', // example: tenant1
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

#### HangupAllCalls

```javascript
/**
 * Hang up all calls
 */
AH.HangupAllCalls();
```

#### TransferToIVR

```javascript
/**
 * Transfer call to an IVR
 * @param IVR IVR to transfer the call to
 */
AH.TransferToIVR(IVR);
```

#### TransferToPhone

```javascript
/**
 * Transfer call to a phone number
 * @param phoneNumber Phone Number
 */
AH.TransferToPhone(phoneNumber);
```

#### Call

```javascript
/**
 * Call a phone number
 * @param phoneNumber Phone Number
 */
AH.Call(phoneNumber);
```

#### ToggleCallRecordingStatus

```javascript
/**
 * Toggle call recording status
 * @param tracknum Tracking Number (optional)
 */
AH.ToggleCallRecordingStatus(tracknum); // With tracking number
AH.ToggleCallRecordingStatus(); // Without tracking number
```

#### ToggleCallHoldStatus

```javascript
/**
 * Toggle call hold status
 * @param tracknum Tracking Number (optional)
 */
AH.ToggleCallHoldStatus(tracknum); // With tracking number
AH.ToggleCallHoldStatus(); // Without tracking number
```

#### SetupConferenceCallWithAgent

```javascript
/**
 * Start a conference with an agent by his/her ID
 * @param agentID Agent ID
 */
AH.SetupConferenceCallWithAgent(agentID);
```

#### SetupConferenceCallWithPhoneNumber

```javascript
/**
 * Start a conference with a phone number
 * @param phoneNumber Phone Number
 */
AH.SetupConferenceCallWithPhoneNumber(phoneNumber);
```

#### LeaveConference

```javascript
/**
 * Leave a conference
 */
AH.LeaveConference();
```

#### ClearBlockingModes

```javascript
/**
 * Clear blocking modes of the status switcher
 */
AH.ClearBlockingModes();
```
