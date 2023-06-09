declare namespace RollupSDK {
  interface SDK {
    version: string;
  }
}

declare global {
  interface Window {
    rollupSDK: RollupSDK.SDK;
  }
}
