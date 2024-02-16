"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMNCError = exports.MNCErrorProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// MNCErrorContext.tsx
const react_1 = require("react");
const MNCErrorContext = (0, react_1.createContext)(undefined);
const MNCErrorProvider = ({ children }) => {
    const [error, setError] = (0, react_1.useState)(null);
    return ((0, jsx_runtime_1.jsx)(MNCErrorContext.Provider, { value: { error, setError }, children: children }));
};
exports.MNCErrorProvider = MNCErrorProvider;
const useMNCError = () => {
    const context = (0, react_1.useContext)(MNCErrorContext);
    if (context === undefined) {
        throw new Error('useMNCError must be used within a MNCErrorProvider');
    }
    return context;
};
exports.useMNCError = useMNCError;
//# sourceMappingURL=MNCErrorContext.js.map