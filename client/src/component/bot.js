import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as chatBotAction from "../store/action/chatBotAction";
import Message from "./message";

const Bot = () => {
  const [msg, SetMsg] = useState("");
  const dispatch = useDispatch();

  const handleQuery = async () => {
    if (msg === "") {
      alert("Please enter Query");
      return;
    }
    const data = { text: msg };
    dispatch(chatBotAction.textQuery(data));
    SetMsg("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleQuery();
    }
  };

  return (
    <div className="z-50 top-20 right-4 sm:top-10 sm:right-60 absolute my-16 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
      <div className="bg-white p-6 rounded-lg border border-[#e5e7eb] sm:w-[440px] w-[350px] sm:h-[634px] h-[500px] flex flex-col">
        <div className="flex flex-col space-y-1.5 pb-6">
          <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
          <p className="text-sm text-[#6b7280] leading-3">K.S.R College of Engineering</p>
        </div>
        <div className="flex-grow overflow-y-auto scrollbar-hide">
          <Message />
        </div>
        <div className="pt-2">
          <div className="flex items-center space-x-2">
            <input
              className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
              placeholder="Type your message"
              value={msg}
              name="in"
              onChange={(e) => SetMsg(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button type="submit" className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
              onClick={handleQuery}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bot;

