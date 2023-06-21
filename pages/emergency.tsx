import "../app/globals.css";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { EmergencyPostObject, emergencyCall } from "@/lib/utils";
import { SuccessModal } from "@/components/successModal";

const initialEmergencyCallObject: EmergencyPostObject = {
  address: "",
  name: "",
  problem: "",
  number_affected_ppl: 0,
};
const EmergencyCallPage = () => {
  const [emergencyObject, emergencyObjectSet] = useState<EmergencyPostObject>(
    initialEmergencyCallObject
  );
  const [modalOpen, modalOpenSet] = useState(false);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const send = await emergencyCall(emergencyObject);
    if (send) {
      console.log("sent");
      modalOpenSet(true);
    }
  };

  const resetHandler = (e: React.FormEvent) => {
    emergencyObjectSet(initialEmergencyCallObject);
    window.location.reload();
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { id, value } = e.target;
    emergencyObjectSet((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SuccessModal isopen={modalOpen} onClose={(e) => resetHandler(e)} />
      <div className="z-10 w-full max-w-3xl items-center justify-start font-mono text-sm flex flex-col gap-4">
        <h1 className="text-xl">Kiezbox Demo</h1>
        <p>Fill out this form to send an emergency call</p>
        <form
          className="w-full flex flex-col items-center gap-1.5"
          onSubmit={(e) => submitHandler(e)}
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
            <Label htmlFor="address">
              <strong>Address</strong>
            </Label>
            <Input
              type="text"
              id="address"
              placeholder="Where are you"
              onChange={(e) => changeHandler(e)}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
            <Label htmlFor="problem">
              <strong>What happened</strong>
            </Label>
            <Input
              type="text"
              id="problem"
              placeholder="What kind of emergency"
              onChange={(e) => changeHandler(e)}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
            <Label htmlFor="number_affected_ppl">
              <strong>Who/how many are affected</strong>
            </Label>
            <Input
              type="number"
              id="number_affected_ppl"
              placeholder="Estimation of people affected"
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
};

export default EmergencyCallPage;
