"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const components_1 = require("../components");
const react_toastify_1 = require("react-toastify");
const useMNCErrorHandler = () => {
    const [mncError, setMncError] = (0, react_1.useState)(null);
    const handleMNCError = (error) => {
        if (error.code === 'ERR_NO_METANET_IDENTITY') {
            setMncError(error);
            const CustomToastContent = () => ((0, jsx_runtime_1.jsxs)("div", { children: ["MetaNet Client Required!", (0, jsx_runtime_1.jsx)(components_1.DownloadButton, { variant: "outlined", color: "primary", setMncError: setMncError })] }));
            react_toastify_1.toast.error((0, jsx_runtime_1.jsx)(CustomToastContent, {}), {
                autoClose: false,
                closeButton: true,
                draggable: false,
                closeOnClick: false,
                style: {
                    overflow: 'visible'
                }
            });
        }
        else {
            // Handle other errors or rethrow them
            console.error(error);
        }
    };
    const MNCPrompt = mncError ? ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, { position: "top-right", autoClose: 5000, hideProgressBar: false, newestOnTop: false, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true }) })) : null;
    return { handleMNCError, MNCPrompt };
};
exports.default = useMNCErrorHandler;
//# sourceMappingURL=useMNCErrorHandler.js.map