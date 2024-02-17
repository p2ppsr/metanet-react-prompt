"use strict";
// import React, { createContext, useContext, useState, useCallback } from 'react';
// // Define the shape of your context state
// interface ErrorContextState {
//   hasError: boolean;
//   hasMNCError: boolean;
//   setError: (error: Error) => void;
// }
// // Create the context with an initial default state
// const ErrorContext = createContext<ErrorContextState | undefined>(undefined);
// // Use this hook in child components to access error context
// export const useErrorContext = () => {
//   const context = useContext(ErrorContext);
//   if (context === undefined) {
//     throw new Error('useErrorContext must be used within an ErrorProvider');
//   }
//   return context;
// };
// // Provider component that wraps your app or component tree
// export const ErrorProvider: React.FC = ({ children }) => {
//   const [hasError, setHasError] = useState(false);
//   const [hasMNCError, setHasMNCError] = useState(false);
//   const setError = useCallback((error: Error) => {
//     setHasError(true);
//     if ('code' in error && error.code === 'ERR_NO_METANET_IDENTITY') {
//       setHasMNCError(true);
//     }
//   }, []);
//   return (
//     <ErrorContext.Provider value={{ hasError, hasMNCError, setError }}>
//       {children}
//     </ErrorContext.Provider>
//   );
// };
//# sourceMappingURL=ErrorContext.js.map