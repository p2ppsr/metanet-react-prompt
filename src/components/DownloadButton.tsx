import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { fetchAndSaveManifest } from '../utils/manifestUtils'

export default function DownloadButton(props: any) {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = async () => {
    setIsLoading(true)
    
    try {
      // Fetch manifest and save to clipboard
      const result = await fetchAndSaveManifest()
      
      if (result.success) {
        console.log('Manifest saved to clipboard:', result.data)
        // Clear any previous errors
        if (props.setMncError) props.setMncError(null)
        
        // Open the download link after successfully saving manifest
        window.open('https://desktop.bsvb.tech/', '_blank')
      } else {
        console.error('Failed to fetch manifest:', result.error)
        if (props.setMncError) {
          props.setMncError(`Failed to fetch website manifest: ${result.error}`)
        }
      }
    } catch (error) {
      console.error('Error during download process:', error)
      if (props.setMncError) {
        props.setMncError('An unexpected error occurred while processing the download')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button 
      color='secondary' 
      variant='contained' 
      onClick={handleDownload} 
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'PROCESSING...' : 'DOWNLOAD'}
    </Button>
  )
}
