// types.ts
import React from "react";

export interface DataType {
  id: number;
  fullname: string;
  stage: string;
  notes: {
    staff_name?: string;
    note?: string;
  }[];
}

export interface TabItem {
  label: string;
  key: string;
  children: React.ReactNode;
}


