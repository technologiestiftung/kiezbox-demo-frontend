import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Switch } from "./ui/switch";
import { EmergencyObject } from "@/app/page";

interface EmergencyCardProps {
  emergencyObject: EmergencyObject;
}

const EmergencyCard = ({ emergencyObject }: EmergencyCardProps) => {
  const [processed, processedSet] = React.useState(false);
  const onSwitch = (checked: boolean) => {
    processedSet(checked);
    console.log("switched", checked);
  };

  return (
    <Card className={`${processed ? "" : "border-warning"} border-4 w-full`}>
      <CardHeader>
        <CardTitle>{emergencyObject.name}</CardTitle>
        <CardDescription>{emergencyObject.incident}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{emergencyObject.address_1}</p>
        <p>{emergencyObject.address_2}</p>
        <p>{emergencyObject.affected}</p>
      </CardContent>
      <CardFooter>
        <Switch
          className="mr-4"
          checked={!processed}
          onCheckedChange={(checked: boolean) => onSwitch(!checked)}
        />
        {processed ? <p>processed</p> : <p>active</p>}
      </CardFooter>
    </Card>
  );
};

export default EmergencyCard;
