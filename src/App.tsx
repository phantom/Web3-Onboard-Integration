import { useState } from "react";
import { init, useConnectWallet } from "@web3-onboard/react";
import phantomModule from "@web3-onboard/phantom";
import reactLogo from "./assets/react.svg";
import phantomLogo from "./assets/phantom.svg";
import "./App.css";

const phantom = phantomModule();

init({
  wallets: [phantom],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl:
        "https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY",
    },
  ],
  appMetadata: {
    name: "Phantom Web3-Onboard Demo",
    icon: phantomLogo,
    description: "My phantom wallet dapp using Onboard",
  },
});

function App() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button disabled={connecting} onClick={() => (wallet ? disconnect(wallet) : connect())}>
          {connecting ? 'connecting' : wallet ? 'disconnect' : 'connect'}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
