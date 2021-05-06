const tabs = [
  'general',
  'calls',
  'email',
  'sms',
  'whatsapp',
  'twitter',
  'facebook',
  'aheeva'
]
function setTab(tab) {
  try {
    document.getElementById(tab).style.display = 'block';
  } catch (error) {
    console.error(error);
  }
  for (let t of tabs.filter(tt => tt !== tab)) {
    try {
      document.getElementById(t).style.display = 'none';
    } catch (error) {
      console.error(error);
    }
  }
}

function generateRequestId() {
  return uuidv4(); // Use if UUID module is imported; else use timestamp as id.
  //return new Date().getTime();
}

function setupAH() {
  // For opening your App inside AWA
  // AH.init();

  // For opening the AWA inside your application in an iframe
  AH.init({
    url: 'http://127.0.0.1:3000',
    realm: 'aveeha',
    hidden: false,
    elementId: 'aheeva',
  });
  setTab('general');
}

function LoginAgent(username, password) {
  AH.LoginAgent(username, password, generateRequestId());
}

function LogoutAgent() {
  AH.LogoutAgent(generateRequestId());
}

function GetCurrentUser() {
  AH.GetCurrentUser(generateRequestId()).then((response) => {
    const json = response;
    console.warn('Response:', json);
  }).catch((error) => {
    console.error(error);
  });
}

function SetAgentStatus(status, reason) {
  AH.SetAgentStatus(status, reason, generateRequestId());
}

function HangupAllCalls() {
  AH.HangupAllCalls(generateRequestId());
}

function TransferToIVR(ivr) {
  AH.TransferToIVR(ivr, generateRequestId());
}

function TransferToPhone(phone) {
  AH.TransferToPhone(phone, generateRequestId());
}

function Call(phone) {
  AH.Call(phone, generateRequestId());
}

function ToggleCallRecordingStatus(phone) {
  AH.ToggleCallRecordingStatus(generateRequestId(), phone);
}

function ToggleCallHoldStatus(phone) {
  AH.ToggleCallHoldStatus(generateRequestId(), phone);
}

function SetupConferenceCallWithAgent(agentID) {
  AH.SetupConferenceCallWithAgent(agentID, generateRequestId());
}

function SetupConferenceCallWithPhoneNumber(phone) {
  AH.SetupConferenceCallWithPhoneNumber(phone, generateRequestId());
}

function LeaveConference() {
  AH.LeaveConference(generateRequestId());
}

function ClearBlockingModes() {
  AH.ClearBlockingModes(generateRequestId());
}

function GetCurrentCallList() {
  AH.GetCurrentCallList(generateRequestId()).then((response) => {
    const json = response;
    console.warn('Response:', json);
  }).catch((error) => {
    console.error(error);
  });
}

function GetCallHistory() {
  AH.GetCallHistory(generateRequestId()).then((response) => {
    const json = response;
    console.warn('Response:', json);
  }).catch((error) => {
    console.error(error);
  });
}

<<<<<<< HEAD
function AnswerNonForcedCall() {
  AH.AnswerNonForcedCall(generateRequestId());
=======
function AnswerNonForcedCall(message="") {
  AH.AnswerNonForcedCall(generateRequestId(), message);
>>>>>>> bb80dd8... CCS8-459 - Agent Application Front end API: Add accept and reject actions for non forced or preview mode
}

function RejectNonForcedCall() {
  AH.RejectNonForcedCall(generateRequestId());
}

function GetMessages(channelType) {
  AH.GetMessages(channelType, generateRequestId()).then((response) => {
    const json = response;
    console.warn('Response:', json);
  }).catch((error) => {
    console.error(error);
  });
}

function GetDispositionList() {
  AH.GetDispositionList(generateRequestId()).then((response) => {
    const json = response;
    console.warn('Response:', json);
  }).catch((error) => {
    console.error(error);
  });
}

function SetDisposition(dispositionID, threadID) {
  AH.SetDisposition(dispositionID, threadID, generateRequestId());
}

function GetAccounts(channelType) {
  AH.GetAccounts(channelType, generateRequestId()).then((response) => {
    const json = response;
    console.warn('Response:', json);
  }).catch((error) => {
    console.error(error);
  });
}

function ComposeSMSMessage(
  recipient,
  firstName,
  lastName,
  text,
  channelAccountID
) {
  AH.ComposeSMSMessage(
    recipient,
    firstName,
    lastName,
    text,
    channelAccountID,
    generateRequestId(),
  )
}

function ComposeEmailMessage(
  recipient,
  firstName,
  lastName,
  subject,
  cc,
  bcc,
  text,
  channelAccountID,
) {
  AH.ComposeEmailMessage(
    recipient,
    firstName,
    lastName,
    subject,
    cc,
    bcc,
    text,
    channelAccountID,
    generateRequestId(),
  )
}

function MarkInteractionAsRead(interactionID) {
  AH.MarkInteractionAsRead(interactionID, generateRequestId());
}

function AddInteraction(threadID, interactionID, to, text) {
  AH.AddInteraction(threadID, interactionID, to, text, generateRequestId());
}
