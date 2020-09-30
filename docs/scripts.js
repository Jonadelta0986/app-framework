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
  AH.init({
    url: 'http://127.0.0.1:3000',
    realm: 'aheeva',
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
  AH.GetCurrentUser(generateRequestId());
}

function SetAgentStatus(status) {
  AH.SetAgentStatus(status, generateRequestId());
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
  AH.GetCurrentCallList(generateRequestId());
}

function GetCallHistory() {
  AH.GetCallHistory(generateRequestId());
}

function GetMessages(channelType) {
  AH.GetMessages(channelType, generateRequestId());
}

function GetAccounts(channelType) {
  AH.GetAccounts(channelType, generateRequestId());
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
