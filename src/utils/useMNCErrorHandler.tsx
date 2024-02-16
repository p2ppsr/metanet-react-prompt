import React, { useState } from 'react'
import { DownloadButton } from '../components'
import { ToastContainer, toast } from 'react-toastify'

interface CustomError extends Error {
  code?: string
}

const useMNCErrorHandler = () => {
  const [mncError, setMncError] = useState<Error | null>(null)

  const handleMNCError = (error: CustomError) => {
    if (error.code === 'ERR_NO_METANET_IDENTITY') {
      setMncError(error)

      const CustomToastContent = () => (
        <div>
          MetaNet Client Required!
          <DownloadButton
            variant="outlined"
            color="primary"
            setMncError={setMncError}
          />
        </div>
      )

      toast.error(<CustomToastContent />, {
        autoClose: false,
        closeButton: true,
        draggable: false,
        closeOnClick: false,
        style: {
          overflow: 'visible'
        }
      })
    } else {
      // Handle other errors or rethrow them
      console.error(error)
    }
  }

  const MNCPrompt = mncError ? (
    <div>
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
    </div>
  ) : null

  return { handleMNCError, MNCPrompt }
}
export default useMNCErrorHandler