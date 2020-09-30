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
   * @param {String} config App Configuration
   */
  public static init = (config: IConfig) => {
    if (!(window as any).isListenerSet) {
      window.addEventListener('message', AH.HandleEvent, false);
      (window as any).isListenerSet = true;
    }
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
        d.innerText = `↑ ${new Date().toISOString()}: ${JSON.stringify({ module, eventType, direction, message, response })}`;
        let console = document.getElementById('console');
        if (console) {
          console.insertBefore(d, console.firstChild);
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
   * @param {String} body Body of the event
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
   * @param {String} username Username of the agent
   * @param {String} password Password of the agent
   * @param {String} requestId Request UUID
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
   * @param {String} requestId Request UUID
   */
  public static LogoutAgent = (requestId: string): void => {
    AH.SendMessage({
      requestId,
      action: 'LogoutAgent',
    });
  };

  /**
   * Get Current User Details
   * @param {String} requestId Request UUID
   */
  public static GetCurrentUser = (requestId: string): void => {
    AH.SendMessage({
      requestId,
      action: 'GetCurrentUser',
    });
  };

  /**
   * Set agent status
   * @param {String} status Status of the agent (Allowed values: 'active', 'inactive')
   * @param {String} reason Reason
   * @param {String} requestId Request UUID
   */
  public static SetAgentStatus = (status: string, reason: string, requestId: string): void => {
    AH.SendMessage({
      requestId,
      action: 'SetAgentStatus',
      message: {
        status,
        reason,
      },
    });
  };

  /**
   * Hang up all calls
   * @param {String} requestId Request UUID
   */
  public static HangupAllCalls = (requestId: string): void => {
    AH.SendMessage({
      requestId,
      action: 'HangupAllCalls',
    });
  };

  /**
   * Transfer call to an IVR
   * @param {String} IVR IVR to transfer the call to
   * @param {String} requestId Request UUID
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
   * @param {String} phoneNumber Phone Number
   * @param {String} requestId Request UUID
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
   * @param {String} phoneNumber Phone Number
   * @param {String} requestId Request UUID
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
   * @param {String} requestId Request UUID
   * @param {String} tracknum Tracking Number (optional)
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
   * @param {String} requestId Request UUID
   * @param {String} tracknum Tracking Number (optional)
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
   * @param {String} agentID Agent ID
   * @param {String} requestId Request UUID
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
   * @param {String} phoneNumber Phone Number
   * @param {String} requestId Request UUID
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
   * @param {String} requestId Request UUID
   */
  public static LeaveConference = (requestId: string): void => {
    AH.SendMessage({
      requestId,
      action: 'LeaveConference',
    });
  };

  /**
   * Clear blocking modes of the status switcher
   * @param {String} requestId Request UUID
   */
  public static ClearBlockingModes = (requestId: string): void => {
    AH.SendMessage({
      requestId,
      action: 'ClearBlockingModes',
    });
  };

  /**
   * Get current list of calls
   * @param {String} requestId Request UUID
   */
  public static GetCurrentCallList = (requestId: string): void => {
    AH.SendMessage({
      requestId,
      action: 'GetCurrentCallList',
    });
  };

    /**
   * Get history of calls handled
   * @param {String} requestId Request UUID
   */
  public static GetCallHistory = (requestId: string): void => {
    AH.SendMessage({
      requestId,
      action: 'GetCallHistory',
    });
  };

  /**
   * Get list of messages
   * @param {String} channelType Channel Type (Allowed values: 'SMS', 'WhatsApp', 'Twitter', 'Facebook', 'Email', 'ALL')
   * @param {String} requestId Request UUID
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
   * Get list of accounts
   * @param {String} channelType Channel Type (Allowed values: 'SMS', 'WhatsApp', 'Twitter', 'Facebook', 'Email', 'ALL')
   * @param {String} requestId Request UUID
   */
  public static GetAccounts = (channelType: string, requestId: string): void => {
    AH.SendMessage({
      requestId,
      action: 'GetAccounts',
      message: {
        channelType,
      }
    });
  };

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
  public static ComposeEmailMessage = (
    recipient: string,
    firstName: string,
    lastName: string,
    subject: string,
    cc: string,
    bcc: string,
    text: string,
    channelAccountID: string,
    requestId: string,
  ): void => {
    AH.SendMessage({
      requestId,
      action: 'ComposeEmailMessage',
      message: {
        recipient,
        firstName,
        lastName,
        subject,
        cc,
        bcc,
        text,
        channelAccountID,
      },
    });
  };

  /**
   * Create Outbound SMS
   * @param {String} recipient Recipient Phone Number
   * @param {String} firstName First Name of the recipient
   * @param {String} lastName Last Name of the recipient
   * @param {String} text Message Body
   * @param {String} channelAccountID Channel Account to use
   * @param {String} requestId Request ID
   */
  public static ComposeSMSMessage = (
    recipient: string,
    firstName: string,
    lastName: string,
    text: string,
    channelAccountID: string,
    requestId: string,
  ): void => {
    AH.SendMessage({
      requestId,
      action: 'ComposeSMSMessage',
      message: {
        recipient,
        firstName,
        lastName,
        channelAccountID,
        text,
      },
    });
  };

  /**
   * Mark interaction as read
   * @param {String} interactionID Interaction ID
   * @param {String} requestId Request UUID
   */
  public static MarkInteractionAsRead = (
    interactionID: string,
    requestId: string
  ) => {
    AH.SendMessage({
      requestId,
      action: 'MarkInteractionAsRead',
      message: {
        interactionID
      },
    });
  }

  /**
   * Add interation
   * @param {String} threadID Thread ID
   * @param {String} interactionID Interaction ID
   * @param {String} to To address (required only for email)
   * @param {String} text Message body
   * @param {String} requestId Request UUID
   */
  public static AddInteraction = (
    threadID: string,
    interactionID: string,
    to: any,
    text: string,
    requestId: string
  ) => {
    AH.SendMessage({
      requestId,
      action: 'AddInteraction',
      message: {
        threadID,
        interactionID,
        to,
        text,
      },
    });
  }

}
