import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ElementReferences } from "../../elements";
import { useEditorPage } from "../../context";
import { actionTypes } from "../../reducer";

export default function Components() {
  const components = Object.values(ElementReferences);
  const {
    state: { screens },
    dispatch,
  } = useEditorPage();
  return (
    <>
      {screens.length > 0 ? (
        <>
          <Select
            onValueChange={(elementType) => {
              dispatch({
                type: actionTypes.CHANGE_ELEMENT,
                payload: { elementType },
              });
            }}
          >
            <SelectTrigger>
              <SelectValue
                placeholder={
                  <div className="flex gap-1 items-center justify-center ">
                    {components[0].icon}
                    {components[0].name}
                  </div>
                }
              />
            </SelectTrigger>
            <SelectContent>
              {components.map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  <div className="flex gap-1 items-center justify-center ">
                    {item.icon}
                    {item.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="mt-5 flex gap-5 flex-col">
            <Separator />
            <h6>Settings</h6>
          </div>
        </>
      ) : null}
    </>
  );
}
