import "../app/globals.css";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  EmergencyObject,
  EmergencyPostObject,
  emergencyCall,
} from "@/lib/utils";

const initialEmergencyCallObject: EmergencyObject = {
  address_1: undefined,
  address_2: undefined,
  name: undefined,
  incident: undefined,
  affected: undefined,
};
const EmergencyCallPage = () => {
  const [emergencyObject, emergencyObjectSet] = useState<EmergencyObject>(
    initialEmergencyCallObject
  );

  const submitHandler = async () => {
    const emergencyPostObject: EmergencyPostObject = {
      name: emergencyObject.name || "no name",
      address: emergencyObject.address_1 || "no address",
      problem: emergencyObject.incident || "no problem",
      number_affected_ppl: emergencyObject.affected || "0",
    };
    emergencyCall(emergencyPostObject);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { id, value } = e.target;
    emergencyObjectSet((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="z-10 w-full max-w-3xl items-center justify-start font-mono text-sm flex flex-col gap-4">
      <h1 className="text-xl">Kiezbox Demo</h1>
      <p>Fill out this form to send an emergency call</p>
      <form
        className="w-full flex flex-col items-center"
        onSubmit={(e) => submitHandler()}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
          <Label htmlFor="name">
            <strong>Name</strong>
          </Label>
          <Input
            type="text"
            id="name"
            placeholder="Who are you"
            onChange={(e) => changeHandler(e)}
          />
        </div>
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
            type="number"
            id="affected"
            placeholder="Estimation of people affected"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <Button type="submit" className="mt-4 w-full max-w-sm">
          Send Emergency Call
        </Button>
      </form>
    </div>
  );
};

export default EmergencyCallPage;
