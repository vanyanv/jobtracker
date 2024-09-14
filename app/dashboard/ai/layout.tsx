import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Chat Content */}
      <div className='flex-grow p-4 bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50'>
        {children}
      </div>

      {/* Chat Component */}
      {/* Message Input */}
      <div className=' fixed-bottom flex items-center border-t border-gray-300 p-4 bg-white'>
        <input
          type='text'
          //   value={input}
          //   onChange={(e) => setInput(e.target.value)}
          placeholder='Type your message...'
          className='flex-1 p-2 border border-gray-300 rounded-lg mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <button
          //   onClick={handleSendMessage}
          className='bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-gradient-to-l hover:from-blue-500 hover:to-purple-500'
        >
          Send
        </button>
      </div>
    </div>
  );
}
