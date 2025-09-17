export interface WebsiteManifest {
  url: string;
  manifest?: any;
  error?: string;
}

/**
 * Fetches the manifest.json from the current website and returns it along with the URL
 */
export const fetchWebsiteManifest = async (): Promise<WebsiteManifest> => {
  const currentUrl = window.location.origin;
  const manifestUrl = `${currentUrl}/manifest.json`;
  
  try {
    const response = await fetch(manifestUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch manifest: ${response.status} ${response.statusText}`);
    }
    
    const manifest = await response.json();
    
    return {
      url: currentUrl,
      manifest
    };
  } catch (error) {
    return {
      url: currentUrl,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

/**
 * Saves the website manifest data to clipboard
 */
export const saveManifestToClipboard = async (manifestData: WebsiteManifest): Promise<boolean> => {
  try {
    const clipboardData = JSON.stringify(manifestData, null, 2);
    await navigator.clipboard.writeText(clipboardData);
    return true;
  } catch (error) {
    console.error('Failed to save to clipboard:', error);
    return false;
  }
};

/**
 * Combined function to fetch manifest and save to clipboard
 */
export const fetchAndSaveManifest = async (): Promise<{ success: boolean; data?: WebsiteManifest; error?: string }> => {
  try {
    const manifestData = await fetchWebsiteManifest();
    const clipboardSuccess = await saveManifestToClipboard(manifestData);
    
    if (!clipboardSuccess) {
      return {
        success: false,
        error: 'Failed to save manifest to clipboard'
      };
    }
    
    return {
      success: true,
      data: manifestData
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};
