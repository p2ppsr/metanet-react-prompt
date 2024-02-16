import { ReactNode } from 'react';
interface MNCErrorContextType {
    error: Error | null;
    setError: (error: Error | null) => void;
}
export declare const MNCErrorProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useMNCError: () => MNCErrorContextType;
export {};
//# sourceMappingURL=MNCErrorContext.d.ts.map