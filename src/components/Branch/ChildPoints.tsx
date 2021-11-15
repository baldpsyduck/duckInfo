import { ReactChild } from "react";
import { Distance, MainLine } from "./StyleComponets";

interface ChildProps {
  children?: ReactChild;
}

export default function ChildPoints(props: ChildProps) {
  const { children } = props;

  return (
    <>
      <Distance>
        <div />
        <MainLine>{children}</MainLine>
      </Distance>
    </>
  );
}
