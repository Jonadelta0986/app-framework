import { IConfig } from './models/IConfig';
/**
 * Initialize the framework
 */
export declare class AH {
    private static url;
    private static realm;
    private static iframe;
    private static hidden;
    private static elementId;
    /**
     * Instantiate Aheeva App
     * @param {String} config App Configuration
     */
    static init: (config: IConfig) => void;
    /**
     * Handle New Events
     */
    static HandleEvent: (event: any) => void;
    /**
     * Setup the iframe element
     */
    private static Setup;
    /**
     * Send event to Aheeva App
     * @param {String} body Body of the event
     */
    private static SendMessage;
    /**
     * Login an agent
     * @param {String} username Username of the agent
     * @param {String} password Password of the agent
     * @param {String} requestId Request UUID
     */
    static LoginAgent: (username: string, password: string, requestId: string) => void;
    /**
     * Logout an agent
     * @param {String} requestId Request UUID
     */
    static LogoutAgent: (requestId: string) => void;
    /**
     * Get Current User Details
     * @param {String} requestId Request UUID
     */
    static GetCurrentUser: (requestId: string) => void;
    /**
     * Set agent status
     * @param {String} status Status of the agent (Allowed values: 'active', 'inactive')
     * @param {String} reason Reason
     * @param {String} requestId Request UUID
     */
    static SetAgentStatus: (status: string, reason: string, requestId: string) => void;
    /**
     * Hang up all calls
     * @param {String} requestId Request UUID
     */
    static HangupAllCalls: (requestId: string) => void;
    /**
     * Transfer call to an IVR
     * @param {String} IVR IVR to transfer the call to
     * @param {String} requestId Request UUID
     */
    static TransferToIVR: (IVR: string | number, requestId: string) => void;
    /**
     * Transfer call to a phone number
     * @param {String} phoneNumber Phone Number
     * @param {String} requestId Request UUID
     */
    static TransferToPhone: (phoneNumber: string | number, requestId: string) => void;
    /**
     * Call a phone number
     * @param {String} phoneNumber Phone Number
     * @param {String} requestId Request UUID
     */
    static Call: (phoneNumber: string | number, requestId: string) => void;
    /**
     * Toggle call recording status
     * @param {String} requestId Request UUID
     * @param {String} tracknum Tracking Number (optional)
     */
    static ToggleCallRecordingStatus: (requestId: string, tracknum?: string | undefined) => void;
    /**
     * Toggle call hold status
     * @param {String} requestId Request UUID
     * @param {String} tracknum Tracking Number (optional)
     */
    static ToggleCallHoldStatus: (requestId: string, tracknum?: string | undefined) => void;
    /**
     * Start a conference with an agent by his/her ID
     * @param {String} agentID Agent ID
     * @param {String} requestId Request UUID
     */
    static SetupConferenceCallWithAgent: (agentID: string | number, requestId: string) => void;
    /**
     * Start a conference with a phone number
     * @param {String} phoneNumber Phone Number
     * @param {String} requestId Request UUID
     */
    static SetupConferenceCallWithPhoneNumber: (phoneNumber: string | number, requestId: string) => void;
    /**
     * Leave a conference
     * @param {String} requestId Request UUID
     */
    static LeaveConference: (requestId: string) => void;
    /**
     * Clear blocking modes of the status switcher
     * @param {String} requestId Request UUID
     */
    static ClearBlockingModes: (requestId: string) => void;
    /**
     * Get current list of calls
     * @param {String} requestId Request UUID
     */
    static GetCurrentCallList: (requestId: string) => void;
    /**
   * Get history of calls handled
   * @param {String} requestId Request UUID
   */
    static GetCallHistory: (requestId: string) => void;
    /**
     * Get list of messages
     * @param {String} channelType Channel Type (Allowed values: 'SMS', 'Whatsapp', 'Twitter', 'Facebook', 'Email', 'ALL')
     * @param {String} requestId Request UUID
     */
    static GetMessages: (channelType: string, requestId: string) => void;
    /**
     * Get list of accounts
     * @param {String} channelType Channel Type (Allowed values: 'SMS', 'Whatsapp', 'Twitter', 'Facebook', 'Email', 'ALL')
     * @param {String} requestId Request UUID
     */
    static GetAccounts: (channelType: string, requestId: string) => void;
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
    static ComposeEmailMessage: (recipient: string, firstName: string, lastName: string, subject: string, cc: string, bcc: string, text: string, channelAccountID: string, requestId: string) => void;
    /**
     * Create Outbound SMS
     * @param {String} recipient Recipient Phone Number
     * @param {String} firstName First Name of the recipient
     * @param {String} lastName Last Name of the recipient
     * @param {String} text Message Body
     * @param {String} channelAccountID Channel Account to use
     * @param {String} requestId Request ID
     */
    static ComposeSMSMessage: (recipient: string, firstName: string, lastName: string, text: string, channelAccountID: string, requestId: string) => void;
    /**
     * Mark interaction as read
     * @param {String} interactionID Interaction ID
     * @param {String} requestId Request UUID
     */
    static MarkInteractionAsRead: (interactionID: string, requestId: string) => void;
    /**
     * Add interation
     * @param {String} threadID Thread ID
     * @param {String} interactionID Interaction ID
     * @param {String} to To address (required only for email)
     * @param {String} text Message body
     * @param {String} requestId Request UUID
     */
    static AddInteraction: (threadID: string, interactionID: string, to: any, text: string, requestId: string) => void;
}
