import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEditorPage } from "../context";
import { getComponent } from "../elements";
import ShortText from "../elements/shortText";

export default function WorkPad() {
  const {
    state: { screens },
  } = useEditorPage();
  const ActiveScreen = screens.find((ele) => ele.active);

  
  return (
    <div className="grow-[3] pt-36">
      <Card className="h-[500px]">
        {/* <CardHeader>
          <CardTitle>{ActiveScreen?.title}</CardTitle>
        </CardHeader> */}
        <CardContent className="w-full h-full">
          {
            !ActiveScreen? null: getComponent(ActiveScreen.component)
          }
        </CardContent>
      </Card>
    </div>
  );
}
