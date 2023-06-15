"use client";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export interface EmergencyObject {
  address_1: string | undefined;
  address_2: string | undefined;
  name: string | undefined;
  incident: string | undefined;
  affected: string | undefined;
}

const initialEmergencyObject: EmergencyObject = {
  address_1: undefined,
  address_2: undefined,
  name: undefined,
  incident: undefined,
  affected: undefined,
};

export default function Home() {
  const [emergencyObject, emergencyObjectSet] = useState<EmergencyObject>(
    initialEmergencyObject
  );
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit", emergencyObject);
    //api call here
    //reset form
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { id, value } = e.target;
    emergencyObjectSet((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-3xl items-start justify-start font-mono text-sm flex flex-col gap-4">
        <h1 className="text-xl">Kiezbox Demo</h1>
        <p>Fill out this form to send an emergency call</p>
        <form className="w-full" onSubmit={(e) => submitHandler(e)}>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
            <Label htmlFor="address_1">
              <strong>Address Field 1</strong>
            </Label>
            <Input
              type="text"
              id="address_1"
              placeholder="Where are you"
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
            <Label htmlFor="address_2">
              <strong>Address Field 2</strong>
            </Label>
            <Input
              type="text"
              id="address_2"
              placeholder="Where are you"
              onChange={(e) => changeHandler(e)}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
            <Label htmlFor="callerName">
              <strong>Name</strong>
            </Label>
            <Input
              type="text"
              id="callerName"
              placeholder="Who are you"
              onChange={(e) => changeHandler(e)}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
            <Label htmlFor="incident">
              <strong>What happened</strong>
            </Label>
            <Input
              type="text"
              id="incident"
              placeholder="What kind of emergency"
              onChange={(e) => changeHandler(e)}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
            <Label htmlFor="affected">
              <strong>Who/how many are affected</strong>
            </Label>
            <Input
              type="text"
              id="affected"
              placeholder="Me and 5 more people"
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <Button type="submit" className="mt-4 w-full max-w-sm">
            Send Emergency Call
          </Button>
        </form>
      </div>
    </main>
  );
}
