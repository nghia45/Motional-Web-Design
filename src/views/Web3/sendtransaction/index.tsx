import { Web3Init } from '..'

type Props = {
  web3Info: Web3Init,
  triggerRefetch: boolean,
  setTriggerRefetch: React.Dispatch<React.SetStateAction<boolean>>
}

const SendTransactiom = ({ web3Info, setTriggerRefetch, triggerRefetch }: Props) => {
  const onSend = async (e: React.FormEvent) => {
    e.preventDefault();
    //get value from input
    const name = (document.querySelector('#name') as HTMLInputElement)?.value;
    const message = (document.querySelector('#message') as HTMLInputElement)?.value;
    await web3Info.contract?.addMemo(name, message);
    //set inner value to empty
    (document.querySelector('#name') as HTMLInputElement).value = '';
    (document.querySelector('#message') as HTMLInputElement).value = '';
    setTriggerRefetch(!triggerRefetch);
  }

  return (
    <form onSubmit={onSend} className='flex flex-col items-center'>
      <div>Send a message</div>
      <input type="text" placeholder="Name" id='name' className='p-1 pl-4 rounded mb-1'/>
      <input type="text" placeholder="Message" id='message' className='p-1 pl-4 rounded mb-1'/>
      <button className='bg-blue-500 shadow-lg shadow-blue-500/50 p-1 rounded'>Send</button>
    </form>
  )
}

export default SendTransactiom