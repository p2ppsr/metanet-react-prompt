import React, { ReactNode } from 'react';
interface ErrorHandlerProviderProps {
    children: ReactNode;
}
export declare const useMNCErrorHandler: () => (error: Error) => void;
export declare const MNCErrorHandlerProvider: React.FC<ErrorHandlerProviderProps>;
export {};
//# sourceMappingURL=MNCErrorHandler.d.ts.map