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
  }, []);

  // useEffect(() => {
  //   const sse = new EventSource("http://127.0.0.1:8000/inbox", {
  //     withCredentials: true,
  //   });

  //   console.log(sse);
  //   const getRealtimeData = (data: any) => {
  //     console.log(data);
  //   };
  //   sse.onmessage = (e) => getRealtimeData(JSON.parse(e.data));
  //   sse.onerror = (e) => {
  //     console.log("error", e);
  //     // error log here

  //     sse.close();
  //   };
  //   return () => {
  //     sse.close();
  //   };
  // }, []);

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
