"use client";
import React, { useEffect, useState } from "react";
import { EmergencyObject } from "../page";
import EmergencyCard from "@/components/emergencyCard";

const emergencyObjectDummies: EmergencyObject[] = [
  {
    address_1: "123 Main St",
    address_2: "Apt 4",
    name: "John Doe",
    incident: "Fire",
    affected: "Residents",
  },
  {
    address_1: "456 Elm St",
    address_2: undefined,
    name: "Jane Smith",
    incident: "Nightmare",
    affected: "Neighborhood",
  },
  {
    address_1: "789 Oak Ave",
    address_2: undefined,
    name: "Sam Johnson",
    incident: "Earthquake",
    affected: "City",
  },
  {
    address_1: "555 Maple Ln",
    address_2: undefined,
    name: "Sarah Davis",
    incident: "Hurricane",
    affected: "Coastal Area",
  },
  {
    address_1: "777 Pine Rd",
    address_2: undefined,
    name: "Michael Wilson",
    incident: "Tornado",
    affected: "Town",
  },
  {
    address_1: "999 Cedar Blvd",
    address_2: "Suite 10",
    name: "Emily Anderson",
    incident: "Power Outage",
    affected: "Businesses",
  },
];

const Page = () => {
  const [messages, setMessages] = useState<EmergencyObject[]>([]);
  useEffect(() => {
    console.log("fetching messages");
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
        {emergencyObjectDummies.map((emergencyObject, index) => (
          <EmergencyCard key={index} emergencyObject={emergencyObject} />
        ))}
      </div>
    </main>
  );
};

export default Page;
