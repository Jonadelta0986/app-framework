import { IConfig } from './models/IConfig';

/**
 * Initialize the framework
 */
export class AH {
  private static url: string = '';
  private static realm: string = '';
  private static iframe: HTMLIFrameElement;
  private static hidden: boolean = true;
  private static elementId: string = 'body';
  /**
   * Instantiate Aheeva App
   * @param config App Configuration
   */
  public static init = (config: IConfig) => {
    window.addEventListener('message', AH.HandleEvent, false);
    const { url, realm, elementId, hidden } = config;
    if (url && realm) {
      AH.url = url;
      AH.realm = realm;
      AH.hidden = hidden;
      if (elementId) {
        AH.elementId = elementId;
      }
      AH.iframe = AH.Setup();
      console.log('Initialized Aheeva App Framework');
    } else {
      console.error('Fields: url, realm are required');
    }
  };

  /**
   * Handle New Events
   */
  public static HandleEvent = (event: any) => {
    const { eventType, module, direction, message, response } = event.data;
    const text = JSON.stringify({ module, eventType, direction, message, response });
    if (text.indexOf('WakeUp') == -1) {
      try {
        let d = document.createElement('div');
        d.innerText = `${new Date().toISOString()}: ${JSON.stringify({ module, eventType, direction, message, response })}`;
        let console = document.getElementById('console');
        if (console) {
          console.appendChild(d);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  /**
   * Setup the iframe element
   */
  private static Setup = (): HTMLIFrameElement => {
    let iframe = document.createElement('iframe');
    iframe.id = 'aheeva_frame';
    iframe.setAttribute(
      'sandbox',
      'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts',
    );
    iframe.setAttribute('allow', 'camera;microphone');
    iframe.style.visibility = AH.hidden ? 'hidden' : 'visible';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.src = `${AH.url}?${AH.realm}`;
    if (AH.elementId === 'body') {
      document.body.appendChild(iframe);
    } else {
      document.getElementById(AH.elementId)?.appendChild(iframe);
    }
    return <HTMLIFrameElement>document.getElementById(iframe.id);
  };

  /**
   * Send event to Aheeva App
   * @param body Body of the event
   */
  private static SendMessage = (body: any): void => {
    AH.iframe.contentWindow?.postMessage(
      {
        ...body,
        requester: 'AheevaAppFrameWork',
      },
      '*',
    );
  };

  /**
   * Login an agent
   * @param username Username of the agent
   * @param password Password of the agent
   * @param requestId Request UUID
   */
  public static LoginAgent = (
    username: string,
    password: string,
    requestId: string,
  ): void => {
    AH.SendMessage({
      requestId,
      action: 'LoginAgent',
      message: {
        username,
        password,
      },
    });
  };

  /**
   * Logout an agent
   * @param requestId Request UUID
   */
  public static LogoutAgent = (requestId: string): void => {
    AH.SendMessage({
      requestId,
      action: 'LogoutAgent',
    });
  };

  /**
   * Get Current User Details
   * @param requestId Request UUID
   */
  public static GetCurrentUser = (requestId: string): void => {
    AH.SendMessage({
      requestId,
      action: 'GetCurrentUser',
    });
  };

  /**
   * Set agent status
   * @param status Status of the agent (Allowed values: 'active', 'inactive')
   * @param requestId Request UUID
   */
  public static SetAgentStatus = (status: string, requestId: string): void => {
    AH.SendMessage({
      requestId,
      action: 'SetAgentStatus',
      message: {
        status,
      },
    });
  };

  /**
   * Hang up all calls
   * @param requestId Request UUID
   */
  public static HangupAllCalls = (requestId: string): void => {
    AH.SendMessage({
      requestId,
      action: 'HangupAllCalls',
    });
  };

  /**
   * Transfer call to an IVR
   * @param IVR IVR to transfer the call to
   * @param requestId Request UUID
   */
  public static TransferToIVR = (
    IVR: string | number,
    requestId: string,
  ): void => {
    AH.SendMessage({
      requestId,
      action: 'TransferToIVR',
      message: {
        IVR,
      },
    });
  };

  /**
   * Transfer call to a phone number
   * @param phoneNumber Phone Number
   * @param requestId Request UUID
   */
  public static TransferToPhone = (
    phoneNumber: string | number,
    requestId: string,
  ): void => {
    AH.SendMessage({
      requestId,
      action: 'TransferToPhone',
      message: {
        phoneNumber,
      },
    });
  };

  /**
   * Call a phone number
   * @param phoneNumber Phone Number
   * @param requestId Request UUID
   */
  public static Call = (
    phoneNumber: string | number,
    requestId: string,
  ): void => {
    AH.SendMessage({
      requestId,
      action: 'Call',
      message: {
        phoneNumber,
      },
    });
  };

  /**
   * Toggle call recording status
   * @param requestId Request UUID
   * @param tracknum Tracking Number (optional)
   */
  public static ToggleCallRecordingStatus = (
    requestId: string,
    tracknum?: string,
  ): void => {
    AH.SendMessage({
      requestId,
      action: 'ToggleCallRecordingStatus',
      message: {
        tracknum,
      },
    });
  };

  /**
   * Toggle call hold status
   * @param requestId Request UUID
   * @param tracknum Tracking Number (optional)
   */
  public static ToggleCallHoldStatus = (
    requestId: string,
    tracknum?: string,
  ): void => {
    AH.SendMessage({
      requestId,
      action: 'ToggleCallHoldStatus',
      message: {
        tracknum,
      },
    });
  };

  /**
   * Start a conference with an agent by his/her ID
   * @param agentID Agent ID
   * @param requestId Request UUID
   */
  public static SetupConferenceCallWithAgent = (
    agentID: string | number,
    requestId: string,
  ): void => {
    AH.SendMessage({
      requestId,
      action: 'SetupConferenceCallWithAgent',
      message: {
        agentID,
      },
    });
  };

  /**
   * Start a conference with a phone number
   * @param phoneNumber Phone Number
   * @param requestId Request UUID
   */
  public static SetupConferenceCallWithPhoneNumber = (
    phoneNumber: string | number,
    requestId: string,
  ): void => {
    AH.SendMessage({
      requestId,
      action: 'SetupConferenceCallWithPhoneNumber',
      message: {
        phoneNumber,
      },
    });
  };

  /**
   * Leave a conference
   * @param requestId Request UUID
   */
  public static LeaveConference = (requestId: string): void => {
    AH.SendMessage({
      requestId,
      action: 'LeaveConference',
    });
  };

  /**
   * Clear blocking modes of the status switcher
   * @param requestId Request UUID
   */
  public static ClearBlockingModes = (requestId: string): void => {
    AH.SendMessage({
      requestId,
      action: 'ClearBlockingModes',
    });
  };

  /**
   * Get list of messages
   * @param channelType Channel Type (Allowed values: 'SMS', 'WhatsApp', 'Twitter', 'Facebook', 'Email', 'ALL')
   */
  public static GetMessages = (channelType: string, requestId: string): void => {
    AH.SendMessage({
      requestId,
      action: 'GetMessages',
      message: {
        channelType,
      }
    });
  };

  /**
   * Compose an Outbound Email
   * @param recipient Recipient
   * @param text Message body
   * @param requestId Request UUID
   */
  public static ComposeEmailMessage = (
    recipient: string,
    text: string,
    requestId: string,
  ): void => {
    AH.SendMessage({
      requestId,
      action: 'ComposeEmailMessage',
      message: {
        recipient,
        text,
      },
    });
  };

  /**
   * Compose an Outbound SMS
   * @param recipient Recipient
   * @param text Message body
   * @param requestId Request UUID
   */
  public static ComposeSMSMessage = (
    recipient: string,
    text: string,
    requestId: string,
  ): void => {
    AH.SendMessage({
      requestId,
      action: 'ComposeSMSMessage',
      message: {
        recipient,
        text,
      },
    });
  };
}
