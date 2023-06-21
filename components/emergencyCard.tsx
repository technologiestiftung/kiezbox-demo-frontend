import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
// import * as dayjs from "dayjs";
import dayjs from "dayjs";

import { Switch } from "./ui/switch";
import { EmergencyGetObject } from "@/lib/utils";

interface EmergencyCardProps {
  emergencyObject: EmergencyGetObject;
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
        <CardTitle>{"Name: " + emergencyObject.name}</CardTitle>
        <CardDescription>
          {"Problem: " + emergencyObject.problem}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          {"Created: " +
            dayjs(emergencyObject.timestamp).format("DD.MM.YYYY - HH:mm")}
        </p>
        <p>{"Address: " + emergencyObject.address}</p>
        <p>{"People affected: " + emergencyObject.number_affected_ppl}</p>
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
