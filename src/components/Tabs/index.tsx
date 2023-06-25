import React from "react";
import { Tabs } from "antd";
import { TabItem } from "@/types";

const { TabPane } = Tabs;

interface Props {
  items: TabItem[];
}

const TabsComponent: React.FC<Props> = ({ items }) => {
  return (
    <Tabs defaultActiveKey="1" centered>
      {items.map((item) => (
        <TabPane tab={item.label} key={item.key}>
          {item.children}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default TabsComponent;
