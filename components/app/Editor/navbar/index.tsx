import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NavBar() {
  return (
    <>
      <>
        <div className="flex flex-wrap w-full justify-between items-center p-2 pb-0">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">MyWorkSpace</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Form1</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <TabsList>
            <TabsTrigger value="create">Create</TabsTrigger>
            <TabsTrigger value="connect">Connect</TabsTrigger>
            <TabsTrigger value="share">Preview</TabsTrigger>
            <TabsTrigger value="results">Analytics</TabsTrigger>
          </TabsList>

          <Button size="sm">Publish</Button>
        </div>
      </>
      <Separator />
    </>
  );
}
