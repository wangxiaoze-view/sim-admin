/**
 * @description 与app交互模块
 */
export default function useNavigatorApp(): {
    goAppPage: (type: "goOrderDetail" | "callPhone" | "goBail" | "updateOrderDetails" | "upLoadVideo" | "upLoadImg" | "downloadImg" | "navHead" | "goto" | "login" | "outLogin" | "customerService" | "gotoProduct" | "download" | "appVoice", options?: Record<string, any>) => void;
};
