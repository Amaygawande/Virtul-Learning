import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  async function generateAnswer(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDp_gYeUFE9ypUHegsQEyppoz6XeHmD4W4`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      const aiResponse = response.data.candidates[0].content.parts[0].text;
      setAnswer(aiResponse);
      setHistory([...history, { question, answer: aiResponse }]);
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }
    setLoading(false);
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-r  bg-gray-100 overflow-y-auto overflow-x-hidden">
      <div className="h-full flex flex-col overflow-x-hidden">
        {/* Chat Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            {history.map((item, index) => (
              <div key={index}>
                <div className="bg-white/10 p-4 rounded-lg mb-4">
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center">
                      <span className="text-indigo-700 text-sm font-bold">You</span>
                    </div>
                    <p className="text-black text-lg">{item.question}</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="prose text-sm max-w-none text-gray-800 break-words">
                      <ReactMarkdown>{item.answer}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {(loading || answer) && !history.find(h => h.question === question) && (
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center">
                    <span className="text-indigo-700 text-sm font-bold">You</span>
                  </div>
                  <p className="text-black text-lg break-words">{question}</p>
                </div>
              </div>
            )}

            {loading ? (
              <div className="bg-white p-4 rounded-lg">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div className="text-gray-600 text-xl">Thinking...</div>
                </div>
              </div>
            ) : answer && !history.find(h => h.answer === answer) && (
              <div className="bg-white p-4 rounded-lg">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                  </div>
                  <div className="prose text-md break-words max-w-none text-gray-800">
                    <div className="mb-4 text-gray-500 italic">Question: {question}</div>
                    <ReactMarkdown>{answer}</ReactMarkdown>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={(e) => {
              generateAnswer(e);
              setQuestion("");
            }} className="relative">
              <textarea
                required
                className="w-full bg-gray-200 rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800 text-lg"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask your study question..."
                rows="2"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    generateAnswer(e);
                    setQuestion("");
                  }
                }}
              ></textarea>
              <button
                type="submit"
                disabled={question === "" || loading}
                className={`absolute right-2 bottom-2 p-2 text-white rounded-lg transition-colors duration-200 ${
                  question === "" || loading
                  ? 'bg-indigo-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
