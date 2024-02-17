"use strict";
// import React from 'react';
// import { ErrorProvider, useErrorContext } from './ErrorContext'; // Adjust the import path as needed
// interface ErrorBoundaryProps {
//   children: React.ReactNode; // Explicitly type children prop
// }
// interface ErrorBoundaryState {
//   hasError: boolean;
// }
// class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
//   constructor(props: ErrorBoundaryProps) {
//     super(props);
//     this.state = { hasError: false };
//   }
//   static getDerivedStateFromError(_: Error): ErrorBoundaryState {
//     return { hasError: true };
//   }
//   override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
//     console.error('Uncaught error:', error, errorInfo);
//   }
//   override render() {
//     if (this.state.hasError) {
//       // Custom fallback UI
//       return <h1>Something went wrong.</h1>;
//     }
//     return this.props.children;
//   }
// }
// const MNCErrorBoundary: React.FC = ({ children }) => {
//   const { setError } = useErrorContext();
//   // Wrap the children with the error boundary and provide the setError function
//   return (
//     <ErrorBoundary>
//       <ErrorProvider>
//         {React.Children.map(children, (child) => {
//           if (!React.isValidElement(child)) return child;
//           return React.cloneElement(child, { setError });
//         })}
//       </ErrorProvider>
//     </ErrorBoundary>
//   );
// };
// export default MNCErrorBoundary;
//# sourceMappingURL=MNCErrorBoundary.js.map