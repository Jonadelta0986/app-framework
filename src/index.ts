import { IConfig } from "./models/IConfig";

/**
 * Initialize the framework
 */
export class AH {
  private static url: string = '';
  private static realm: string = '';
  private static iframe: HTMLIFrameElement;

  /**
   * Instantiate Aheeva App
   * @param config App Configuration
   */
  public static init = (config: IConfig) => {
    window.addEventListener('message', AH.HandleEvent, false);
    const { url, realm } = config;
    if (url && realm) {
      AH.url = url;
      AH.realm = realm;
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
    console.log(event);
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
    iframe.style.visibility = 'hidden';
    iframe.style.position = 'fixed';
    iframe.style.zIndex = '-1';
    iframe.src = `${AH.url}?${AH.realm}`;
    document.body.appendChild(iframe);
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
   */
  public static LoginAgent = (username: string, password: string): void => {
    AH.SendMessage({
      action: 'LoginAgent',
      message: {
        username,
        password,
      },
    });
  };

  /**
   * Logout an agent
   */
  public static LogoutAgent = (): void => {
    AH.SendMessage({
      action: 'LogoutAgent',
    });
  };

  /**
   * Set agent status
   * @param status Status of the agent (Allowed values: 'active', 'inactive')
   */
  public static SetAgentStatus = (status: string): void => {
    AH.SendMessage({
      action: 'SetAgentStatus',
      message: {
        status,
      },
    });
  };

  /**
   * Hang up all calls
   */
  public static HangupAllCalls = (): void => {
    AH.SendMessage({
      action: 'HangupAllCalls',
    });
  };

  /**
   * Transfer call to an IVR
   * @param IVR IVR to transfer the call to
   */
  public static TransferToIVR = (IVR: string | number): void => {
    AH.SendMessage({
      action: 'TransferToIVR',
      message: {
        IVR,
      },
    });
  };

  /**
   * Transfer call to a phone number
   * @param phoneNumber Phone Number
   */
  public static TransferToPhone = (phoneNumber: string | number): void => {
    AH.SendMessage({
      action: 'TransferToPhone',
      message: {
        phoneNumber,
      },
    });
  };

  /**
   * Call a phone number
   * @param phoneNumber Phone Number
   */
  public static Call = (phoneNumber: string | number): void => {
    AH.SendMessage({
      action: 'Call',
      message: {
        phoneNumber,
      },
    });
  };

  /**
   * Toggle call recording status
   * @param tracknum Tracking Number (optional)
   */
  public static ToggleCallRecordingStatus = (tracknum?: string): void => {
    AH.SendMessage({
      action: 'ToggleCallRecordingStatus',
      message: {
        tracknum,
      },
    });
  };

  /**
   * Toggle call hold status
   * @param tracknum Tracking Number (optional)
   */
  public static ToggleCallHoldStatus = (tracknum?: string): void => {
    AH.SendMessage({
      action: 'ToggleCallHoldStatus',
      message: {
        tracknum,
      },
    });
  };

  /**
   * Start a conference with an agent by his/her ID
   * @param agentID Agent ID
   */
  public static SetupConferenceCallWithAgent = (
    agentID: string | number,
  ): void => {
    AH.SendMessage({
      action: 'SetupConferenceCallWithAgent',
      message: {
        agentID,
      },
    });
  };

  /**
   * Start a conference with a phone number
   * @param phoneNumber Phone Number
   */
  public static SetupConferenceCallWithPhoneNumber = (
    phoneNumber: string | number,
  ): void => {
    AH.SendMessage({
      action: 'SetupConferenceCallWithPhoneNumber',
      message: {
        phoneNumber,
      },
    });
  };

  /**
   * Leave a conference
   */
  public static LeaveConference = (): void => {
    AH.SendMessage({
      action: 'LeaveConference',
    });
  };

  /**
   * Clear blocking modes of the status switcher
   */
  public static ClearBlockingModes = (): void => {
    AH.SendMessage({
      action: 'ClearBlockingModes',
    });
  };

  /**
   * Get list of messages
   * @param channelType Channel Type (Allowed values: 'SMS', 'WhatsApp', 'Twitter', 'Facebook', 'Email', 'ALL')
   * @param filter Filter (Allowed values: 'READ', 'UNREAD', 'ALL')
   */
  public static GetMessages = (channelType: string = 'ALL', filter: string = 'ALL'): void => {
    AH.SendMessage({
      action: 'GetMessages',
      message: {
        channelType,
        filter
      }
    });
  };

  /**
   * Compose an Outbound Email
   * @param recipient Recipient
   * @param text Message body
   */
  public static ComposeEmailMessage = (recipient: string, text: string): void => {
    AH.SendMessage({
      action: 'ComposeEmailMessage',
      message: {
        recipient,
        text
      }
    });
  };

  /**
   * Compose an Outbound SMS
   * @param recipient Recipient
   * @param text Message body
   */
  public static ComposeSMSMessage = (recipient: string, text: string): void => {
    AH.SendMessage({
      action: 'ComposeSMSMessage',
      message: {
        recipient,
        text
      }
    });
  };

};
