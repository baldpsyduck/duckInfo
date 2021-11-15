import {useState} from "react";

export const useListState = () => {
  const [list, setList] = useState<number[]>([]);

  const push = (value: number) => {
    setList(prevList => {
      prevList.push(value);
      return prevList;
    });
  }

  return [list, push] as const;
}