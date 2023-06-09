interface RollupSDK {
  version: string;
}

interface Window {
  rollupSDK: RollupSDK;
}

const rollupSDK: RollupSDK = {
  version: "1.0.0",
};

window.rollupSDK = rollupSDK;
