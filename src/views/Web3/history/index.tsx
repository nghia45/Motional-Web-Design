import { useEffect, useState } from 'react'
import { Web3Init } from '..'
import './index.css'

type Props = {
    web3Info: Web3Init,
    triggerRefetch: boolean,
}

const History = ({ web3Info, triggerRefetch }: Props) => {
    const [transactionHistory, setTransactionHistory] = useState<any[]>([])

    const getTransactionHistory = async () => {
        const history = await web3Info.contract?.getAllMemos();
        if(history) setTransactionHistory(history.slice().reverse());
    }

    useEffect(() => {
        getTransactionHistory();
    }, [web3Info.contract])

    useEffect(() => {
        let interval: any;
        setTimeout(() => {
            interval = setInterval(() => {
                getTransactionHistory();
            }, 2000);
        }, 5000);
        setTimeout(() => {
            clearInterval(interval);
        }, 35000);
        return () => clearInterval(interval);
    }, [triggerRefetch])

    return (
        <div className='p-5'>
            <div className='mb-5'>Transaction History:</div>
            {transactionHistory?.map((history, index) => {
                return (
                    <div key={index} className='history__grid mb-1'>
                        <div className='bg-gray-200 p-2 rounded'>Name: {history.name}</div>
                        <div className='bg-gray-200 p-2 rounded'>Message: {history.message}</div>
                        <div className='bg-gray-200 p-2 rounded'>Address: {history.from}</div>
                        <div className='bg-gray-200 p-2 rounded'>Time: {new Date(history.timestamp * 1000).toLocaleString()}</div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default History