declare global {
  interface Window {
    rollupSDK: typeof rollupSDK;
  }
}

const rollupSDK = {
  version: '1.0.0'
}

window.rollupSDK = rollupSDK