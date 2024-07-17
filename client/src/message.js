import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = () => {
  const messages = useSelector((state) => state.chatBot.messages);
  const messageEndRef = useRef(null);

  const displayMessage = (message, i) => {
    if (message.speak === "user") {
      return (
        <div key={i} className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
          <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
            <div className="rounded-full bg-gray-100 border p-1">
              <svg stroke="none" fill="black" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
              </svg>
            </div>
          </span>
          <p className="leading-relaxed">
            <span className="block font-bold text-gray-700">You </span>
            {message.text}
          </p>
        </div>
      );
    } else if (message.speak === "bot") {
      return (
        <div key={i} className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
          <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
            <div className="rounded-full bg-gray-100 border p-1">
              <svg stroke="none" fill="black" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
              </svg>
            </div>
          </span>
          <p className="leading-relaxed">
            <span className="block font-bold text-gray-700">Bot </span>
            {message.text}
          </p>
        </div>
      );
    }
  };

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="pr-4 h-[350px] sm:h-[474px] overflow-y-auto scrollbar-hide">
      <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
        <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
          <div className="rounded-full bg-gray-100 border p-1">
            <svg stroke="none" fill="black" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
            </svg>
          </div>
        </span>
        <p className="leading-relaxed">
          <span className="block font-bold text-gray-700">Bot </span>
          Hi, how can I help you today?
        <nav className='flex gap-2'><a href="https://ksrce.ac.in/index.php/page?id=139&item=117"><li className="border-2 p-1">Placement Detail</li></a><a href="https://ksrce.ac.in/index.php/page?id=135&item=113"><li className="border-2 p-1">Faculty Profile</li></a><a href="https://ksrce.ac.in/index.php/page?id=418&item=6"><li className="border-2 p-1">Fees Detail</li></a></nav>
        </p>
      </div>
      {messages.map((message, i) => (
        displayMessage(message, i)
      ))}
      <div ref={messageEndRef}></div>
    </div>
  );
};

export default Message;

{/* <nav className='navb' onClick={handle}><a href="https://ksrce.ac.in/index.php/page?id=139&item=117"><li>Placement</li></a><a href="https://ksrce.ac.in/index.php/page?id=135&item=113"><li>Faculty profile</li></a><a href="https://ksrce.ac.in/index.php/page?id=418&item=6"><li>Fees Detail</li></a></nav> */}
