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
};

export interface EmergencyPostObject {
  name: string;
  address: string;
  problem: string;
  number_affected_ppl: number;
}

export interface EmergencyGetObject extends EmergencyPostObject {
  id: number;
  created_at: string;
  updated_at: string;
}

export const fetchMessages = async () => {
  const skip = 0;
  const limit = 100;
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/messages/?skip=${skip}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok)
      throw new Error(`Something went wrong" ${response.statusText}`);
    else {
      const data = await response.json();
      console.log("Fetched Emergencies", data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
