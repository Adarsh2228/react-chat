import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import useConversationsStore from "stores/ConversationsStore";

const ChatHeader = () => {
  const [showQRCode, setShowQRCode] = useState(false);
  const conversation = useConversationsStore(
    (state) => state.selectedConversation
  );
  const chatHistory = useConversationsStore((state) => state.messages);

  useEffect(() => {
    // Log the data to ensure it's being fetched correctly
    console.log("Conversation:", conversation);
    console.log("Chat History:", chatHistory);
  }, [conversation, chatHistory]);

  const handleExportClick = () => {
    setShowQRCode((prev) => !prev);
  };

  // Ensure chatHistory is being properly formatted
  const exportData = conversation && chatHistory ? JSON.stringify(chatHistory) : '';

  // Optionally, add a check to handle large data
  const isDataTooLarge = exportData.length > 3000; // Example threshold for large data
  const truncatedData = isDataTooLarge ? exportData.substring(0, 3000) : exportData;

  return (
    <>
      {conversation && (
        <div className="chat-header flex items-center p-4 bg-base-300 shadow-xl">
          <img
            src={conversation?.profilePic}
            alt="User profile"
            className="profile-picture rounded-full h-10 w-10 object-cover mr-4"
          />

          <h2 className="user-full-name text-white flex-grow">
            {conversation?.fullName}
          </h2>

          {/* Export Chat Button */}
          <button
            className="ml-4 btn btn-primary"
            onClick={handleExportClick}
          >
            {showQRCode ? "Hide QR Code" : "Export Chat"}
          </button>

          {/* Display QR Code */}
          {showQRCode && exportData && (
            <div className="ml-4">
              <QRCode
                value={truncatedData} // Use truncated data if too large
                size={200} // Increase size if necessary
                level="H"
                includeMargin={true}
                className="qr-code"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatHeader;
