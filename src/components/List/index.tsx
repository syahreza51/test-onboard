import React from "react";
import { Button, List, Popover, Tag } from "antd";
import { DataType } from "@/types";

interface Props {
  dataSource: DataType[];
  stage: string;
  handleReject: (id: number) => void;
  handleClick: (id: number, stage: string) => void;
}

const ListComponent: React.FC<Props> = ({
  dataSource,
  stage,
  handleReject,
  handleClick,
}) => {
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={dataSource}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button
              key={item.id}
              type="primary"
              danger
              style={{
                visibility: item.stage === "reject" ? "hidden" : "visible",
              }}
              onClick={() => handleReject(item.id)}
            >
              Reject
            </Button>,
            <Button
              key={item.id}
              type="primary"
              onClick={() => handleClick(item.id, stage)}
              style={{
                visibility: item.stage === "hired" ? "hidden" : "visible",
              }}
            >
              {stage === "new"
                ? "Add to Shortlist"
                : stage === "shortlist"
                ? "Interview"
                : stage === "interview"
                ? "Hired"
                : "Process"}
            </Button>,
          ]}
        >
          {/* <Skeleton avatar title={false} loading={loading} active> */}
          <List.Item.Meta
            title={<a href="https://ant.design">{item.fullname}</a>}
            description={
              item.notes && item.notes.length > 0 ? (
                <Popover
                  placement="bottom"
                  title={"mas"}
                  content={
                    <div>
                      {Array.from(item.notes)
                        .reverse()
                        .map((val, index) => (
                          <p key={index}>
                            <strong>{val.staff_name} : </strong>
                            {val.note}
                          </p>
                        ))}
                    </div>
                  }
                >
                  {item.notes[0].staff_name} : {item.notes[0].note}
                </Popover>
              ) : (
                <span>No notes available</span>
              )
            }
          />
          <Tag color="orange">{item.stage}</Tag>
          {/* </Skeleton> */}
        </List.Item>
      )}
    />
  );
};

export default ListComponent;
