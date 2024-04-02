"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MNCErrorHandlerProvider = exports.useMNCErrorHandler = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-unused-vars */
const react_1 = require("react");
const react_toastify_1 = require("react-toastify");
const components_1 = require("../components");
// Context for the error handler
const ErrorHandlerContext = (0, react_1.createContext)({
    handleError: (error) => { },
});
const useMNCErrorHandler = () => {
    const { handleError } = (0, react_1.useContext)(ErrorHandlerContext);
    return handleError;
};
exports.useMNCErrorHandler = useMNCErrorHandler;
const MNCErrorHandlerProvider = ({ children }) => {
    const handleError = (0, react_1.useCallback)((error) => {
        react_toastify_1.toast.error(() => ((0, jsx_runtime_1.jsxs)("div", { children: ["MetaNet Client Required!", (0, jsx_runtime_1.jsx)(components_1.DownloadButton, { variant: "outlined", color: "primary", setMncError: error })] })), {
            autoClose: false,
            closeButton: true,
            draggable: false,
            closeOnClick: false,
            style: {
                overflow: 'visible'
            }
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)(ErrorHandlerContext.Provider, { value: { handleError }, children: [(0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, { position: "top-right", autoClose: 5000, hideProgressBar: false, newestOnTop: false, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true }), children] }));
};
exports.MNCErrorHandlerProvider = MNCErrorHandlerProvider;
//# sourceMappingURL=MNCErrorHandler.js.map