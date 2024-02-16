"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const MNCErrorContext_1 = require("./MNCErrorContext");
const components_1 = require("../components");
const MNCPrompt = () => {
    const { error, setError } = (0, MNCErrorContext_1.useMNCError)();
    if (!error || error.code !== 'ERR_NO_METANET_IDENTITY')
        return null;
    return ((0, jsx_runtime_1.jsxs)("div", { children: ["MetaNet Client Required!", (0, jsx_runtime_1.jsx)(components_1.DownloadButton, { variant: "outlined", color: "primary", onClick: () => {
                    // Logic to initiate MNC software download
                    setError(null); // Reset error after handling
                }, children: "Download" })] }));
};
exports.default = MNCPrompt;
//# sourceMappingURL=MNCPrompt.js.map