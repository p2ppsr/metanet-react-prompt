interface CustomError extends Error {
    code?: string;
}
declare const useMNCErrorHandler: () => {
    handleMNCError: (error: CustomError) => void;
    MNCPrompt: import("react/jsx-runtime").JSX.Element | null;
};
export default useMNCErrorHandler;
//# sourceMappingURL=useMNCErrorHandler.d.ts.map