"use client";

import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { Message } from "../typings";
import useSWR from "swr";
import fetcher from "../utils/fetchMessages";

function ChatInput() {
  const [input, setInput] = useState("");
  const { data: messages, error, mutate } = useSWR("/api/getMessages", fetcher);

  console.log(messages);

  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    const messageToSend = input;

    setInput("");

    const id = uuid();

    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: "Bruno Travassos",
      profilePic:
        "https://scontent.fjpa1-1.fna.fbcdn.net/v/t39.30808-6/312625266_5593615684018936_2244344847610948049_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE9c-YXCptFHuwjSZjUDZFfBpSuLbSe1GMGlK4ttJ7UY7vBwVDYC9iccRyCHBpzSGeyKsVI1g9e02T5NvTMvmur&_nc_ohc=fM6qa7YAqo0AX8vIbpi&tn=jQHaeSvD73dCjYFJ&_nc_ht=scontent.fjpa1-1.fna&oh=00_AfDwdkALwvXikuI6qalG8yBdLrdcUYw-wUTIvVIkWTQKRA&oe=637D631B",
      email: "brunnomoraaes@gmail.com",
    };

    const uploadMessageToUpstash = async () => {
      const data = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      }).then((res) => res.json());

      return [data.message, ...messages!];
    };

    await mutate(uploadMessageToUpstash, {
      // data to immediately update the client cache, usually used in optimistic UI.
      optimisticData: [message, ...messages!],
      rollbackOnError: true,
    });
  };

  return (
    <form
      onSubmit={addMessage}
      className="fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-gray-100"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter message here..."
        className="
        flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed
      "
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
        disabled={!input}
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
