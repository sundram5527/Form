
import './App.css'

function App() {


  return (
    <>
      <div>
        <div>
           <h1 className='text-2xl text-blue-700 font-bold pl-25 pt-5'>Behind The Profit</h1>
          
         <div className='flex flex-col items-center mt-10'>
           <h1 className='text-4xl text-cyan  font-bold bg-gradient-to-r mb-4 '>Resolution Center</h1>
          <p className='text-center max-w-2xl'>Having an issue with a Prop Firm or Broker? Our Resolution Center is here to help. Submit your concern below and our team will investigate and respond promptly.</p>
         </div>
        <div className='flex items-center justify-center'>
           <div className='h-10 flex items-center justify-center  border-abcd border-6 border-solid rounded-xl mt-4 w-200'>
          <button className=' text-sm px:3 py:1.5 font-medium'>Submit a Report</button>
         </div>
        </div>
        
        <div className='flex items-center justify-center '>
          <div className='border-solid border-1 border-blue-600 rounded-xl mt-4 p-5 w-200'>
            <div className='ml-5'>
              <h1 className='mt-7 font-medium text-4xl'>Submit a Resolution Request</h1>
            <p className='mt-1 text-gray-600'>Fill out the form below with details about your issue</p>
           
            <div className='mt-5 '>
            <label htmlFor="name ">Your Name</label><br />
            <input type="text" id="name" placeholder='John Doe' className=' border-2 border-abcd h-10 w-full rounded-lg'/>
            </div>

            <div className='mt-5'>
            <label htmlFor="name ">Email Address</label><br />
            <input type="text" id="name" placeholder='John Doe' className=' border-2 border-abcd h-10 w-full rounded-lg'/>
            </div>

            <div className='mt-5'>
            <label htmlFor="name ">Phone Number</label><br />
            <input type="text" id="name" placeholder='John Doe' className=' border-2 border-abcd h-10 w-full rounded-lg' />
            </div>

            <div className='mt-5'>
            <label htmlFor="name ">Reporting About</label><br />
            <input type="text" id="name" placeholder='John Doe' className=' border-2 border-abcd h-10 w-full rounded-lg'/>
            </div>

            <div className='mt-5'>
            <label htmlFor="name ">Describe your issue</label><br />
            <textarea name="" id="name"  placeholder='John Doe' className=' border-2 border-abcd min-h-40 w-full rounded-lg'></textarea>
            <p id=":ra:-form-item-description" className="text-m text-gray-600">Include any relevant details that could help us resolve your issue faster.</p>
            </div>
              <button type='submit' className='inline-flex h-10 border-abcd border-2 rounded-md w-full items-center justify-center text-zinc-50 bg-blue-500 font-medium'>Submit Report</button>
            </div>
         </div>
        </div>
        
        </div>
        
      </div>
    </>
  )
}

export default App
