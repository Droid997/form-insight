import { MdOutlineShortText } from "react-icons/md";
import { BsBodyText } from "react-icons/bs";
import { BiSolidSelectMultiple } from "react-icons/bi";

import ShortText from "./shortText";
import LongText from "./longText";

export const ElementReferences = {
  short_text: {
    id:'short_text',
    name: "Short Text",
    component: ShortText,
    icon: <MdOutlineShortText />,
  },
  long_text: {
    id:'long_text',
    name: "Long Text",
    component: LongText,
    icon: <BsBodyText />,
  },
  choices: {
    id:'choices',
    name: "Choices",
    component: LongText,
    icon: <BiSolidSelectMultiple className="text-fuchsia-600" />,
  },
};

export type ComponentIDs = keyof typeof ElementReferences;


export const getComponentNameById = (key: ComponentIDs) =>
  ElementReferences[key].name ?? null;

export const getComponent = (
  component_id: ComponentIDs,
  ...props: any
): React.ReactNode => {
  const Component = ElementReferences[component_id].component;
  return <Component {...props} />;
};
