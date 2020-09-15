/**
 * Initialize the framework
 */
const AH = class {
  private static url: string = "";
  private static realm: string = "";
  private static iframe: HTMLIFrameElement;

  public static init = (config: IConfig) => {
    window.addEventListener("message", AH.HandleEvent, false);
    const { url, realm } = config;
    if (url && realm) {
      AH.url = url;
      AH.realm = realm;
      AH.iframe = AH.Setup();
      console.log("Initialized Aheeva App Framework");
    } else {
      console.error("Fields: url, realm are required");
    }
  };

  public static HandleEvent = null;

  private static Setup = (): HTMLIFrameElement => {
    let iframe = document.createElement("iframe");
    iframe.id = "aheeva_frame";
    iframe.setAttribute(
      "sandbox",
      "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    );
    iframe.setAttribute("allow", "camera;microphone");
    iframe.style.visibility = "hidden";
    iframe.style.position = "fixed";
    iframe.style.zIndex = "-1";
    iframe.src = `${AH.url}?${AH.realm}`;
    document.body.appendChild(iframe);
    return <HTMLIFrameElement>document.getElementById(iframe.id);
  };

  private static SendMessage = (body: any) => {
    AH.iframe.contentWindow?.postMessage(
      {
        ...body,
        requester: "AheevaAppFrameWork",
      },
      "*"
    );
  };

  /**
   * Login an agent
   * @param username Username of the agent
   * @param password Password of the agent
   */
  public static LoginAgent = (username: string, password: string): void => {
    AH.SendMessage({
      action: "LoginAgent",
      message: {
        username,
        password,
      },
    });
  };

  /**
   * Set agent status
   * @param status Status of the agent (Allowed values: 'active', 'inactive')
   */
  public static SetAgentStatus = (status: string): void => {
    AH.SendMessage({
      action: "SetAgentStatus",
      message: {
        status,
      },
    });
  };
};
