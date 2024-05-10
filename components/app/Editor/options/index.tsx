import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Components from "./elements";
export default function Options() {
  return (
    <div className="basis-[20%] self-stretch ">
      <Tabs defaultValue="component" className="h-full">
        <Card className="h-full rounded-none">
          <CardHeader>
            <div className="flex items-center justify-center">
              <TabsList>
                <TabsTrigger value="component">Components</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
            </div>
          </CardHeader>

          <CardContent>
            <TabsContent value="component">
              <Components />
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
}
