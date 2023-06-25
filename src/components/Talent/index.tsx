import React, {
  useEffect,
  useState,
  Suspense,
  useMemo,
  useCallback,
} from "react";
import { message } from "antd";
import TabsComponent from "../Tabs";
import dataDummy from "../data.json";
import "./style.scss";
import { DataType } from "@/types";

const List = React.lazy(() => import("../List"));

const TalentPipeline: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [list, setList] = useState<DataType[]>([]);

  useEffect(() => {
    setList(dataDummy);
  }, []);

  const filteredLists = useMemo(() => {
    return {
      new: list.filter((item) => item.stage === "new"),
      shortlist: list.filter((item) => item.stage === "shortlist"),
      interview: list.filter((item) => item.stage === "interview"),
      hired: list.filter((item) => item.stage === "hired"),
      reject: list.filter((item) => item.stage === "reject"),
    };
  }, [list]);

  const handleReject = useCallback(
    (id: number) => {
      setList((prevList) =>
        prevList.map((item) =>
          item.id === id ? { ...item, stage: "reject" } : item
        )
      );
      messageApi.open({
        type: "error",
        content: "Talent has reject",
      });
    },
    [messageApi]
  );

  const handleClick = useCallback(
    (id: number, stage: string) => {
      let status = stage;
      if (stage === "new") {
        status = "shortlist";
      } else if (stage === "shortlist") {
        status = "interview";
      } else if (stage === "interview") {
        status = "hired";
      } else {
        status = "new";
      }
      setList((prevList) =>
        prevList.map((item) =>
          item.id === id ? { ...item, stage: status } : item
        )
      );
      messageApi.open({
        type: "success",
        content: `Talent next step to ${status}`,
      });
    },
    [messageApi]
  );

  const items = useMemo(() => {
    return [
      {
        label: "New",
        key: "1",
        children: (
          <Suspense fallback={<div>Loading...</div>}>
            <List
              stage="new"
              handleReject={handleReject}
              handleClick={handleClick}
              dataSource={filteredLists.new}
            />
          </Suspense>
        ),
      },
      {
        label: "Shortlist",
        key: "2",
        children: (
          <Suspense fallback={<div>Loading...</div>}>
            <List
              stage="shortlist"
              handleReject={handleReject}
              handleClick={handleClick}
              dataSource={filteredLists.shortlist}
            />
          </Suspense>
        ),
      },
      {
        label: "Interview",
        key: "3",
        children: (
          <Suspense fallback={<div>Loading...</div>}>
            <List
              stage="interview"
              handleReject={handleReject}
              handleClick={handleClick}
              dataSource={filteredLists.interview}
            />
          </Suspense>
        ),
      },
      {
        label: "Hired",
        key: "4",
        children: (
          <Suspense fallback={<div>Loading...</div>}>
            <List
              stage="hired"
              handleReject={handleReject}
              handleClick={handleClick}
              dataSource={filteredLists.hired}
            />
          </Suspense>
        ),
      },
      {
        label: "Reject",
        key: "5",
        children: (
          <Suspense fallback={<div>Loading...</div>}>
            <List
              stage="reject"
              handleReject={handleReject}
              handleClick={handleClick}
              dataSource={filteredLists.reject}
            />
          </Suspense>
        ),
      },
    ];
  }, [filteredLists, handleReject, handleClick]);

  return (
    <div>
      {contextHolder}
      <TabsComponent items={items} />
    </div>
  );
};

export default TalentPipeline;
