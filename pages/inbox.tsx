"use client";
import "../app/globals.css";
import React, { useEffect, useState } from "react";

import EmergencyCard from "@/components/emergencyCard";
import { EmergencyGetObject, fetchMessages } from "@/lib/utils";

const Page = () => {
  const [messages, setMessages] = useState<EmergencyGetObject[]>([]);

  useEffect(() => {
    const getMessages = async () => {
      const fetchedMessages = await fetchMessages();

      if (fetchedMessages) {
        console.log("fetched messages", fetchedMessages);
        setMessages(fetchedMessages);
      } else {
        console.log("no messages");
      }
    };
    getMessages();

    //establish web socket
    //fetch messages
    return () => {
      // Clean up the WebSocket connection
      //socket.close();
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-3xl items-start justify-start font-mono text-sm flex flex-col gap-4">
        <h1 className="text-xl">Emergency Ticker</h1>
        {messages &&
          messages
            .sort((a, b) => b.id - a.id)
            .map((message) => (
              <EmergencyCard key={message.id} emergencyObject={message} />
            ))}
      </div>
    </main>
  );
};

export default Page;
