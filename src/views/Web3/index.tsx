import { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "./contract.abi.json";
import SendTransactiom from "./sendtransaction";
import History from "./history";

type Props = {}

export type Web3Init = {
    provider: ethers.providers.Web3Provider | null,
    signer: ethers.providers.JsonRpcSigner | null,
    contract: ethers.Contract | null,
}

const Web3 = ({ }: Props) => {
    const [web3Init, setWeb3Init] = useState<Web3Init>({
        provider: null,
        signer: null,
        contract: null,
    })
    const [accountAddress, setAccountAddress] = useState("Not connected");
    const [triggerRefetch, setTriggerRefetch] = useState(false);

    useEffect(() => {
        const template = async () => {
            const contractAddress = "0xFA64722EEA4675B1804E3FD12db17c50b09bA227";
            const contractABI = abi;
            try {
                const { ethereum } = window as any;

                const account = await ethereum.request({ method: 'eth_requestAccounts' });
                setAccountAddress(account[0]);

                //update account address when account change
                window.ethereum.on('accountsChanged', async () => {
                    window.location.reload();
                });

                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();

                const contract = new ethers.Contract(contractAddress, contractABI, signer);

                setWeb3Init({
                    provider,
                    signer,
                    contract,
                });
            } catch (error) {
                console.log(error);
                alert(error);
            }
        }
        template();
    }, [])

    return (
        <div className="web3__container flex flex-col">
            <div className="flex content-center items-center w-full p-10">
                <div className="w-1/2">
                    <div>Connected Account: {accountAddress}</div>
                    <div>This contract {web3Init.contract?.address} is on Sepolia Testnet</div>
                </div>
                <div className="w-1/3">
                    <SendTransactiom web3Info={web3Init} triggerRefetch={triggerRefetch} setTriggerRefetch={setTriggerRefetch}/>
                </div>
            </div>
            <div>
                <History web3Info={web3Init} triggerRefetch={triggerRefetch}/>
            </div>
        </div>
    )
}

export default Web3;