"use client";
import React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

interface TabSplitterProps {
  tab1Label: string;
  tab2Label: string;
  tab3Label: string;
  tab1Content: React.ReactNode;
  tab2Content: React.ReactNode;
  tab3Content: React.ReactNode;
  className?: string;
}

const TabSplitter: React.FC<TabSplitterProps> = ({
  tab1Label,
  tab2Label,
  tab1Content,
  tab2Content,
  tab3Label,
  tab3Content,
}) => {
  return (
      <Tabs defaultValue="tab1" className={"w-full"}>
      <TabsList className="bg-transparent">
        <TabsTrigger value="tab1" className="p-4">{tab1Label}</TabsTrigger>
        <TabsTrigger value="tab2" className="p-4">{tab2Label}</TabsTrigger>
        <TabsTrigger value="tab3" className="p-4">{tab3Label}</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="w-full">{tab1Content}</TabsContent>
      <TabsContent value="tab2" className="w-full">{tab2Content}</TabsContent>
      <TabsContent value="tab3" className="w-full">{tab3Content}</TabsContent>
    </Tabs>
  );
};

export default TabSplitter;
