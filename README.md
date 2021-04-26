# app-framework

![build](https://github.com/aheeva/app-framework/workflows/build/badge.svg) [![npm version](https://badge.fury.io/js/%40aheeva%2Fapp-framework.svg)](https://badge.fury.io/js/%40aheeva%2Fapp-framework) ![minzip](https://badgen.net/bundlephobia/minzip/@aheeva/app-framework)

🚀  Seamlessly integrate AheevaCCS into your application, written in TypeScript

## Getting started

This documentation assumes you have an existing AheevaCCS installation at your premise or in the cloud. Please read the following information carefully. It is advised to backup your existing application before moving forward with the changes.

### Steps:

1. Include the provided library in your web application. This can be done adding a script tag inside `<head></head>` tags in the HTML page. The library is extremely small ~2.1 KB (minified). It should load almost instantly.

```html
<head>
  ...
  <script src="path/to/aheeva.min.js"></script>
  ...
</head>
```

If you are using `npm` to install packages, you can also install this library by typing:
```bash
npm install --save @aheeva/app-framework
```

Include `./node_modules/@aheeva/app-framework/dist/aheeva.min.js` to your gulp/grunt/webpack configuration as needed.

2. Initialize the framework as follows

```javascript
// Some function in your application that deals with the setup process
function setupAH() {
  AH.init({
    url: 'YOUR_AHEEVA_AWA_URL', // example: https://awa.aheeva.com
    realm: 'YOUR_TENANT_REALM', // example: tenant1
    hidden: true,
    elementId: 'ELEMENT_ID',    // Element where you want to inject the iframe
  });
}
```

The above snippet of code will initialize the agent application in a hidden iframe. For agents using WebRTC, make sure the `url` field in the init configuration is `https`. 

Use the following syntax (instead of the one above) to open your application inside the AWA.
```javascript
// Some function in your application that deals with the setup process
function setupAH() {
  AH.init();
}
```

Once this step is done, you are ready to send and receive events from the AheevaCCS application through this app-framework library.

The following section provides description of all the events currently supported by this framework.

## Events

Supported list of events:

1. LoginAgent
2. LogoutAgent
3. GetCurrentUser
4. SetAgentStatus
5. HangupAllCalls
6. TransferToIVR
7. TransferToPhone
8. Call
9. ToggleCallRecordingStatus
10. ToggleCallHoldStatus
11. SetupConferenceCallWithAgent
12. SetupConferenceCallWithPhoneNumber
13. LeaveConference
14. ClearBlockingModes
15. GetCurrentCallList
16. GetCallHistory
17. GetMessages
18. GetAccounts
19. ComposeEmailMessage
20. ComposeSMSMessage
21. MarkInteractionAsRead
22. AddInteraction
23. AutoConfirmExtension
24. GetDispositionList
25. SetDisposition

Usage:

#### Login an agent

```javascript
/**
 * Login an agent
 * @param {String} username Username of the agent
 * @param {String} password Password of the agent
 * @param {String} requestId Request UUID
 */
AH.LoginAgent(username, password, requestId);
```
#### Logout an agent

```javascript
/**
 * Logout an agent
 * @param {String} requestId Request UUID
 */
AH.LogoutAgent(requestId);
```
#### Get Current User Details

```javascript
/**
 * Get Current User Details
 * @param {String} requestId Request UUID
 * @returns {Promise<any>} A promise that resolves to the response
 */
AH.GetCurrentUser(requestId);
```
#### Set agent status

```javascript
/**
 * Set agent status
 * @param {String} status Status of the agent (Allowed values: 'active', 'inactive')
 * @param {String} status Reason
 * @param {String} requestId Request UUID
 */
AH.SetAgentStatus(status, reason, requestId);
```
#### Hang up all calls

```javascript
/**
 * Hang up all calls
 * @param {String} requestId Request UUID
 */
AH.HangupAllCalls(requestId);
```
#### Transfer call to an IVR

```javascript
/**
 * Transfer call to an IVR
 * @param {String} IVR IVR to transfer the call to
 * @param {String} requestId Request UUID
 */
AH.TransferToIVR(IVR, requestId);
```
#### Transfer call to a phone number

```javascript
/**
 * Transfer call to a phone number
 * @param {String} phoneNumber Phone Number
 * @param {String} requestId Request UUID
 */
AH.TransferToPhone(phoneNumber, requestId);
```
#### Call a phone number

```javascript
/**
 * Call a phone number
 * @param {String} phoneNumber Phone Number
 * @param {String} requestId Request UUID
 */
AH.Call(phoneNumber, requestId);
```
#### Toggle call recording status

```javascript
/**
 * Toggle call recording status
 * @param {String} requestId Request UUID
 * @param {String} tracknum Tracking Number (optional)
 */
AH.ToggleCallRecordingStatus(requestId, tracknum);
```
#### Toggle call hold status

```javascript
/**
 * Toggle call hold status
 * @param {String} requestId Request UUID
 * @param {String} tracknum Tracking Number (optional)
 */
AH.ToggleCallHoldStatus(requestId, tracknum);
```
#### Start a conference with an agent by his/her ID

```javascript
/**
 * Start a conference with an agent by his/her ID
 * @param {String} agentID Agent ID
 * @param {String} requestId Request UUID
 */
AH.SetupConferenceCallWithAgent(agentID, requestId);
```
#### Start a conference with a phone number

```javascript
/**
 * Start a conference with a phone number
 * @param {String} phoneNumber Phone Number
 * @param {String} requestId Request UUID
 */
AH.SetupConferenceCallWithPhoneNumber(phoneNumber, requestId);
```
#### Leave a conference

```javascript
/**
 * Leave a conference
 * @param {String} requestId Request UUID
 */
AH.LeaveConference(requestId);
```
#### Clear blocking modes of the status switcher

```javascript
/**
 * Clear blocking modes of the status switcher
 * @param {String} requestId Request UUID
 */
AH.ClearBlockingModes(requestId);
```
#### Get current list of calls

```javascript
/**
 * Get current list of calls
 * @param {String} requestId Request UUID
 * @returns {Promise<any>} A promise that resolves to the response
 */
AH.GetCurrentCallList(requestId);
```
#### Get history of calls handled

```javascript
/**
* Get history of calls handled
* @param {String} requestId Request UUID
* @returns {Promise<any>} A promise that resolves to the response
*/
AH.GetCallHistory(requestId);
```
#### Get list of messages

```javascript
/**
 * Get list of messages
 * @param {String} channelType Channel Type (Allowed values: 'SMS', 'Whatsapp', 'Twitter', 'Facebook', 'Email', 'ALL')
 * @param {String} requestId Request UUID
 * @returns {Promise<any>} A promise that resolves to the response
 */
AH.GetMessages(channelType, requestId);
```
#### Get list of accounts

```javascript
/**
 * Get list of accounts
 * @param {String} channelType Channel Type (Allowed values: 'SMS', 'Whatsapp', 'Twitter', 'Facebook', 'Email', 'ALL')
 * @param {String} requestId Request UUID
 * @returns {Promise<any>} A promise that resolves to the response
 */
AH.GetAccounts(channelType, requestId);
```
#### Create Outbound Email

```javascript
/**
 * Create Outbound Email
 * @param {String} recipient Recipient email address
 * @param {String} firstName First Name of the recipient
 * @param {String} lastName Last Name of the recipient
 * @param {String} subject Subject
 * @param {String} cc CC
 * @param {String} bcc BCC
 * @param {String} text Message body
 * @param {String} channelAccountID Channel Account to use
 * @param {String} requestId Request UUID
 */
AH.ComposeEmailMessage(recipient, firstName, lastName, subject, cc, bcc, text, channelAccountID, requestId);
```
#### Create Outbound SMS

```javascript
/**
 * Create Outbound SMS
 * @param {String} recipient Recipient Phone Number
 * @param {String} firstName First Name of the recipient
 * @param {String} lastName Last Name of the recipient
 * @param {String} text Message Body
 * @param {String} channelAccountID Channel Account to use
 * @param {String} requestId Request ID
 */
AH.ComposeSMSMessage(recipient, firstName, lastName, text, channelAccountID, requestId);
```
#### Mark interaction as read

```javascript
/**
 * Mark Interaction As Read
 * @param {String} interactionID Interaction ID
 * @param {String} requestId Request UUID
 */
AH.MarkInteractionAsRead(interactionID, requestId);
```
#### Add interation

```javascript
/**
 * Add Interation/Reply
 * @param {String} threadID Thread ID
 * @param {String} interactionID Interaction ID
 * @param {String} to To address (required only for email)
 * @param {String} text Message body
 * @param {String} requestId Request UUID
 */
AH.AddInteraction(threadID, interactionID, to, text, requestId);
```
#### Auto Confirm Extension

```javascript
/**
 * Confirm Default Extension of the agent
 * @param {String} requestId Request UUID
 */
AH.AutoConfirmExtension(requestId);
```

#### Get list of dispositions

```javascript
/**
 * Get list of dispositions
 * @param {String} requestId Request UUID
 * @returns {Promise<any>} A promise that resolves to the response
 */
AH.GetDispositionList(requestId);
```
#### Set Disposition

```javascript
/**
 * Set Disposition
 * @param {String} dispositionID Disposition ID
 * @param {String} threadID Thread ID
 * @param {String} requestId Request UUID
 */
AH.SetDisposition(dispositionID, threadID, requestId);
```
## Example

For a sample integration, refer to the example in the `docs` folder.
