"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const ButtonGroup_1 = __importDefault(require("@mui/material/ButtonGroup"));
const icons_material_1 = require("@mui/icons-material");
const ClickAwayListener_1 = __importDefault(require("@mui/material/ClickAwayListener"));
const Grow_1 = __importDefault(require("@mui/material/Grow"));
const Paper_1 = __importDefault(require("@mui/material/Paper"));
const Popper_1 = __importDefault(require("@mui/material/Popper"));
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const MenuList_1 = __importDefault(require("@mui/material/MenuList"));
const license_1 = __importDefault(require("./license"));
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const PreStyled = (0, styles_1.styled)('pre')(({ theme }) => ({
    wordWrap: 'break-word',
    fontFamily: 'Times New Roman',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
    overflowX: 'auto',
    overflowY: 'scroll',
    whiteSpace: 'pre-wrap',
    maxHeight: '30em',
}));
const options = [
    {
        buttonText: 'Download for Mac',
        downloadFilename: 'MetaNet Client.dmg',
        downloadURL: 'https://cdn.projectbabbage.com/desktop/res/MetaNet%20Client.dmg'
    },
    {
        buttonText: 'Download for Windows',
        downloadFilename: 'MetaNet Client.exe',
        downloadURL: 'https://cdn.projectbabbage.com/desktop/res/MetaNet%20Client.exe'
    },
    {
        buttonText: 'Download for Linux (snap)',
        downloadFilename: 'MetaNet Client.snap',
        downloadURL: 'https://cdn.projectbabbage.com/desktop/res/MetaNet%20Client.snap'
    },
    {
        buttonText: 'Download for Linux (AppImage)',
        downloadFilename: 'MetaNet Client.AppImage',
        downloadURL: 'https://cdn.projectbabbage.com/desktop/res/MetaNet%20Client.AppImage'
    },
    {
        buttonText: 'Babbage Mobile (coming soon)',
        downloadFilename: 'coming soon',
        downloadURL: '#'
    }
];
function SplitButton(props) {
    const [dialogOpen, setDialogOpen] = (0, react_1.useState)(false);
    const [open, setOpen] = (0, react_1.useState)(false);
    const [downloadURL, setDownloadURL] = (0, react_1.useState)('https://cdn.projectbabbage.com/desktop/res/MetaNet%20Client.exe');
    const anchorRef = react_1.default.useRef(null);
    const [selectedOS, setSelectedOS] = (0, react_1.useState)(1);
    const [downloadFilename, setDownloadFilename] = (0, react_1.useState)('MetaNet Client.exe');
    const [disabled, setDisabled] = (0, react_1.useState)(false);
    const handleDownload = () => {
        const a = document.createElement('a');
        a.href = `${downloadURL}`;
        a.download = downloadFilename;
        a.click();
        setDialogOpen(false);
    };
    const handleClick = () => {
        console.info(`You clicked ${options[selectedOS]}`);
        setDialogOpen(true);
    };
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    (0, react_1.useEffect)(() => {
        // Thanks to https://stackoverflow.com/a/38241481 for this
        const platform = window.navigator.platform;
        const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
        const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
        let selection;
        if (macosPlatforms.indexOf(platform) !== -1) {
            selection = 0;
        }
        else if (windowsPlatforms.indexOf(platform) !== -1) {
            selection = 1;
        }
        else if (/Linux/.test(platform)) {
            selection = 2;
        }
        else {
            setDisabled(true);
            return;
        }
        setSelectedOS(selection);
        setDownloadURL(options[selection].downloadURL);
        setDownloadFilename(options[selection].downloadFilename);
    }, []);
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    if (disabled) {
        if (props.hideOnMobile) {
            return null;
        }
        else {
            return ((0, jsx_runtime_1.jsx)(material_1.Typography, { children: "Available for Mac, Windows & Linux" }));
        }
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(ButtonGroup_1.default, Object.assign({ size: 'small', color: 'secondary', variant: 'contained', ref: anchorRef, "aria-label": 'split button' }, props, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { onClick: handleClick, children: options[selectedOS].buttonText }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: 'small', "aria-controls": open ? 'split-button-menu' : undefined, "aria-expanded": open ? 'true' : undefined, "aria-label": 'select merge strategy', "aria-haspopup": 'menu', onClick: handleToggle, children: (0, jsx_runtime_1.jsx)(icons_material_1.KeyboardArrowDownOutlined, {}) }), (0, jsx_runtime_1.jsxs)(material_1.Dialog, { open: dialogOpen, onClose: () => setDialogOpen(false), children: [(0, jsx_runtime_1.jsx)(material_1.DialogTitle, { children: "MetaNet Client License Agreement" }), (0, jsx_runtime_1.jsx)(PreStyled, { children: license_1.default }), (0, jsx_runtime_1.jsxs)(material_1.DialogActions, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { onClick: () => setDialogOpen(false), children: "I Disagree" }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: handleDownload, children: "I Agree" })] })] })] })), (0, jsx_runtime_1.jsx)(Popper_1.default, { sx: {
                    zIndex: 1
                }, open: open, anchorEl: anchorRef.current, role: undefined, transition: true, disablePortal: true, children: ({ TransitionProps, placement }) => ((0, jsx_runtime_1.jsx)(Grow_1.default, Object.assign({}, TransitionProps, { style: {
                        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
                    }, children: (0, jsx_runtime_1.jsx)(Paper_1.default, { children: (0, jsx_runtime_1.jsx)(ClickAwayListener_1.default, { onClickAway: handleClose, children: (0, jsx_runtime_1.jsx)(MenuList_1.default, { id: 'split-button-menu', autoFocusItem: true, children: options.map((option, index) => ((0, jsx_runtime_1.jsx)(MenuItem_1.default, { disabled: index === 4, selected: index === selectedOS, onClick: (event) => {
                                        setDownloadURL(option.downloadURL);
                                        setDownloadFilename(option.downloadFilename);
                                        setSelectedOS(index);
                                        setOpen(false);
                                    }, children: option.buttonText }, index))) }) }) }) }))) })] }));
}
exports.default = SplitButton;
//# sourceMappingURL=BabbDownloadButton.js.map