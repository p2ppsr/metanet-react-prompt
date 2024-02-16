"use strict";
// import React, { useState } from 'react';
// import { Button } from '@mui/material';
// import { DownloadButton } from '../components'
// // Custom hook that abstracts the error handling
// export const useMncErrorHandling = () => {
//   const [mncError, setMncError] = useState(null);
//   const handleMncError = (error) => {
//     if (error.code === 'ERR_NO_METANET_IDENTITY') {
//       setMncError(error);
//     } else {
//       // Handle other errors or rethrow
//       console.error(error);
//     }
//   };
//   const MncErrorPrompt = mncError ? (
//     <div>
//       MetaNet Client Required!
//       <DownloadButton variant='outlined' color='primary' hideOnMobile />
//     </div>
//   ) : null;
//   return { handleMncError, MncErrorPrompt };
// };
// import React, { useState, useEffect } from 'react'
// import { getVersion } from '@babbage/sdk-ts'
// import { DownloadButton } from '../components'
// interface CustomError extends Error {
//   code?: string;
// }
// const HasMetaNetClient = () => {
//   const [error, setError] = useState<null | CustomError>(null)
//   useEffect(() => {
//     const checkVersion = async () => {
//       try {
//         await getVersion()
//       } catch (error: unknown) {
//         const e = error as CustomError
//         setError(e)
//       }
//     }
//     checkVersion()
//   }, [])
//   if (error && error.code === 'ERR_NO_METANET_IDENTITY') {
//     return (
//     )
//   }
//   // Optionally, render nothing or some other content if there's no error
//   return null // Or return some other default content if needed
// }
// export default HasMetaNetClient
//# sourceMappingURL=hasMetaNetClient.js.map