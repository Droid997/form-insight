import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { HiPlus } from "react-icons/hi";

import { useEditorPage } from "@/components/app/Editor/context";
import { actionTypes } from "@/components/app/Editor/reducer";
import { nanoid } from "nanoid";
import { getComponentNameById } from "../elements";
import { cn } from "@/lib/utils";



export default function Screens() {
  const {
    state: { screens },
    dispatch,
  } = useEditorPage();

  return (
    <div className="basis-[20%] self-stretch">
      <Card className="rounded-none ">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Screens</CardTitle>
            <Button
              size="icon"
              onClick={() => {
                dispatch({
                  type: actionTypes.ADD_SCREEN,
                  payload: { id: nanoid(), component: "short_text", title: "" },
                });
              }}
            >
              <HiPlus />
            </Button>
          </div>
          <Separator />
        </CardHeader>
        <CardContent>
          <div className="h-[calc(100vh-150px)] flex flex-col gap-2 overflow-auto w-full">
            {screens.map((screen) => (
              <div key={screen.id} className="flex items-center">
                <Card
                  className={cn(
                    "hover:shadow-xl cursor-pointer w-full",
                    screen.active && "bg-slate-100"
                  )}
                  onClick={() => {
                    dispatch({
                      type: actionTypes.MARK_SCREEN_ACTIVE,
                      payload: { id: screen.id },
                    });
                  }}
                >
                  <CardHeader>
                    <CardTitle>{screen.order}</CardTitle>
                    <CardDescription>{screen.title}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Badge variant="outline">
                      {getComponentNameById(screen.component)}
                    </Badge>
                  </CardFooter>
                </Card>
               
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
