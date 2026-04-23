Metanet React Prompt
====================

[![License](https://img.shields.io/badge/license-Open%20BSV-brightgreen)](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/LICENSE)

The Metanet React Prompt package is a collection of React components designed to simplify and streamline the onboarding process for users of Babbage's Metanet Desktop / Metanet Explorer distributions. It allows you to choose when and how to show a prompt informing a user they are missing a compatible BRC-100 wallet depending on the use cases of your application.

The informative prompts guide them through the process of downloading and installing the correct Metanet distribution for their operating system.

Table of Contents
-----------------

-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Props](#props)
-   [Caveats](#caveats)
-   [License](#license)

Features
--------

1.  **Onboarding Simplified**: The Metanet React Prompt removes the need for users to search for setup instructions for Babbage's Metanet distribution, which can be a hurdle to adoption. It allows you to ensure a compatible wallet is installed and running when executing code that relies on it.
2.  **Metanet Network Handling**: The component handles the different versions of your application that might exist on mainnet and testnet networks, making it a powerful tool for alpha and beta testing.
3.  **Customization**: Customization coming soon!
4.  **Native App Support**: Specify links to your app's native versions on platforms like iOS and Android.

Installation
------------

To install Babbage React Prompt:

```sh
npm install metanet-react-prompt
```

Usage
-----

Wrap your app (or the part of it that requires `@bsv/sdk` / BRC-100 wallet access to work) with this component. Your app will only be rendered once a compatible Babbage Metanet wallet is running. Here is an example:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PaymentTokenator from 'payment-tokenator'
import { DownloadButton, useMNCErrorHandler } from 'metanet-react-prompt'

const handleMNCError = useMNCErrorHandler();

// Example Button to use in custom solution when manually displaying notice
<DownloadButton variant='outlined' color='primary' hideOnMobile />

// Example autoCatcher
// Step 1: Wrap your app with the MNCErrorHandlerProvider
<MNCErrorHandlerProvider>
  <App />
</MNCErrorHandlerProvider>

// Step 2: Catch MNC errors and throw them as necessary (async func errors are not caught automatically)
useEffect(() => {
  (async () => {
    try {
      const paymentsToReceive = await paymentTokenator.listIncomingPayments()
    } catch (error: any) {
      // Are you expecting other types of errors?
      if (error.code === 'ERR_NO_METANET_IDENTITY') {
        handleMNCError(error);
      } else {
        // Handle other errors or rethrow them
      }
    }
    setLoading(false)
  })()
}, [])
```

Caveats
-------

Please be aware that the Brave browser sometimes causes issues with desktop wallet clients. If this occurs, the React Prompt is designed to instruct users on how to disable Brave Shields, which may impede your app's operation.

License
-------

The code in this repository is licensed under the [Open BSV License](https://github.com/bitcoin-sv/bitcoin-sv/blob/master/LICENSE).
