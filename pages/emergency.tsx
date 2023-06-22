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
    let { id, value } = e.target;
    if (id === "callerName") {
      id = "name";
    }
    emergencyObjectSet((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SuccessModal isopen={modalOpen} onClose={(e) => resetHandler(e)} />
      <div className="z-10 w-full max-w-3xl items-center justify-start font-mono text-sm flex flex-col gap-4">
        <h1 className="text-xl">Kiezbox Notruf</h1>
        <p>Fülle die Form aus um einen Notruf abzusetzen</p>
        <form
          className="w-full flex flex-col items-center gap-1.5"
          onSubmit={(e) => submitHandler(e)}
        >
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
            <Label htmlFor="callerName">
              <strong>Name</strong>
            </Label>
            <Input
              type="text"
              id="callerName"
              placeholder="Wer bist du?"
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
            <Label htmlFor="address">
              <strong>Adresse</strong>
            </Label>
            <Input
              type="text"
              id="address"
              placeholder="Wo befindest du dich gerade?"
              onChange={(e) => changeHandler(e)}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
            <Label htmlFor="problem">
              <strong>Was ist passiert?</strong>
            </Label>
            <Input
              type="text"
              id="problem"
              placeholder="Beschreibe die Art des Notfalls"
              onChange={(e) => changeHandler(e)}
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
            <Label htmlFor="number_affected_ppl">
              <strong>Wie viele Personen sind betroffen?</strong>
            </Label>
            <Input
              type="number"
              id="number_affected_ppl"
              placeholder=""
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <Button type="submit" className="mt-4 w-full max-w-sm">
            Notruf abschicken
          </Button>
        </form>
      </div>
    </main>
  );
};

export default EmergencyCallPage;
