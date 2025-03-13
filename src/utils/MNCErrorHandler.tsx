/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode, createContext, useCallback, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { DownloadButton } from "../components"
import 'react-toastify/dist/ReactToastify.css'

interface ErrorHandlerProviderProps {
  children: ReactNode
}

// Context for the error handler
const ErrorHandlerContext = createContext({
  handleError: (error: Error) => { },
})

export const useMNCErrorHandler = () => {
  const { handleError } = useContext(ErrorHandlerContext)
  return handleError
}

export const MNCErrorHandlerProvider: React.FC<ErrorHandlerProviderProps> = ({ children }) => {
  const handleError = useCallback((error: Error) => {
    toast.error(() => (
      <div>
        MetaNet Client Required!
        <DownloadButton
          variant="outlined"
          color="primary"
          setMncError={error}
        />
      </div>
    ), {
      autoClose: false,
      closeButton: true,
      draggable: false,
      closeOnClick: false,
      style: {
        overflow: 'visible'
      }
    })
  }, [])

  return (
    <ErrorHandlerContext.Provider value={{ handleError }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </ErrorHandlerContext.Provider>
  )
}