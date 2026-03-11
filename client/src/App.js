import { useState, useEffect, useRef } from "react";
import axios from "axios";

function App() {

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const chatEndRef = useRef(null);

  // Auto scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  // Load chat history from MongoDB
  useEffect(() => {

    const loadHistory = async () => {

      try {

        const res = await axios.get("http://localhost:5000/api/chat/history");

        const history = res.data.map(item => ({
          user: item.message,
          bot: item.reply
        }));

        setChat(history.reverse());

      } catch (error) {
        console.error(error);
      }

    };

    loadHistory();

  }, []);

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = message;

    setChat([...chat, { user: userMessage, bot: "Thinking..." }]);

    setMessage("");

    try {

      const res = await axios.post("http://localhost:5000/api/chat", {
        message: userMessage
      });

      const reply = res.data.reply;

      setChat(prev =>
        prev.map((msg, index) =>
          index === prev.length - 1
            ? { user: userMessage, bot: reply }
            : msg
        )
      );

    } catch (error) {
      console.error(error);
    }

  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="h-screen bg-gray-900 flex flex-col">

      {/* Header */}
      <div className="bg-black text-white text-xl font-bold p-4 text-center">
        Trinetra AI 🔱
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {chat.map((msg, index) => (
          <div key={index}>

            {/* User message */}
            <div className="text-right">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block">
                {msg.user}
              </span>
            </div>

            {/* Bot message */}
            <div className="text-left mt-2">
              <span className="bg-gray-700 text-white px-4 py-2 rounded-lg inline-block">
                {msg.bot}
              </span>
            </div>

          </div>
        ))}

        <div ref={chatEndRef}></div>

      </div>

      {/* Input */}
      <div className="p-4 bg-black flex gap-2">

        <input
          className="flex-1 p-2 rounded bg-gray-800 text-white"
          placeholder="Ask Trinetra..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send
        </button>

      </div>

    </div>
  );
}

export default App;