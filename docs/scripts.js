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
  return new Date().getTime();
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
  AH.LogoutAgent();
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

function GetMessages(channelType) {
  AH.GetMessages(channelType, generateRequestId());
}

function GetAccounts(channelType) {
  AH.GetAccounts(channelType, generateRequestId());
}
