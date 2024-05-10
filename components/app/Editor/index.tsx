"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import EditorProvider from "./context";

import NavBar from './navbar'
import Screens from './screen'
import WorkPad from './workPad'
import Options from './options'

function Editor() {
  return (
    <EditorProvider>
      <>
        <Tabs defaultValue="create" className="bg-none">
          <NavBar />

          <TabsContent value="create" className="mt-0 overflow-hidden">
            <div className="flex flex-wrap gap-4">
              <Screens />
              <WorkPad />
              <Options />
            </div>
          </TabsContent>
        </Tabs>
      </>
    </EditorProvider>
  );
}

export default Editor;
