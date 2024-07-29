import React, { useState } from "react";
import QRCode from "qrcode.react";
import useConversationsStore from "stores/ConversationsStore";

const ChatHeader = () => {
  const [showQRCode, setShowQRCode] = useState(false);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [link, setLink] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const conversation = useConversationsStore(
    (state) => state.selectedConversation
  );
  const chatHistory = useConversationsStore((state) => state.messages);

  const handleExportClick = () => {
    setShowQRCode((prev) => !prev);
  };

  const handleLinkInputToggle = () => {
    setShowLinkInput((prev) => !prev);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleLinkSubmit = () => {
    if (link) {
<<<<<<< HEAD
      // Redirect to the provided link
=======
>>>>>>> 265f418 (sahi hai)
      window.location.href = link;
    } else {
      alert("Please enter a valid link.");
    }
    setShowLinkInput(false);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await fetch('/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          alert('File uploaded successfully!');
        } else {
          alert('File upload failed.');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('Error uploading file.');
      }
    } else {
      alert("Please select a file.");
    }
  };

  const exportData = conversation && chatHistory ? JSON.stringify(chatHistory) : '';
  const isDataTooLarge = exportData.length > 3000;
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
                value={truncatedData}
                size={200}
                level="H"
                includeMargin={true}
                className="qr-code"
              />
            </div>
          )}

          {/* Add Meeting Link Button */}
          <button
            className="ml-4 btn btn-secondary"
            onClick={handleLinkInputToggle}
          >
            {showLinkInput ? "Cancel" : "Add Meeting Link"}
          </button>

          {/* Link Input Modal */}
          {showLinkInput && (
            <div className="ml-4 flex items-center">
              <input
                type="text"
                value={link}
                onChange={handleLinkChange}
                placeholder="Enter Zoom or Google Meet link"
                className="input-field"
              />
              <button
                className="btn btn-primary ml-2"
                onClick={handleLinkSubmit}
              >
                Submit
              </button>
            </div>
          )}

          {/* File Upload Button */}
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file-upload"
            className="ml-4 btn btn-secondary cursor-pointer"
          >
            Upload File
          </label>
          <button
            className="ml-2 btn btn-primary"
            onClick={handleFileUpload}
          >
            Send File
          </button>
        </div>
      )}
    </>
  );
};

export default ChatHeader;
