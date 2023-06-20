import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const emergencyCall = async (emergencyObject: EmergencyPostObject) => {
  console.log("submit", emergencyObject);
  const res = await fetch("http://127.0.0.1:8000/api/messages/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emergencyObject),
  });
  console.log(res);
  //reset form
};

export interface EmergencyObject {
  address_1: string | undefined;
  address_2: string | undefined;
  name: string | undefined;
  incident: string | undefined;
  affected: string | undefined;
}

export interface EmergencyPostObject {
  name: string;
  address: string;
  problem: string;
  number_affected_ppl: string;
}
