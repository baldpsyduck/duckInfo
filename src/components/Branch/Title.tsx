import React, { ReactChild } from "react";
import { FlexContainer, Point, TitleContainer } from "./StyleComponets";

interface TitleProps extends React.HTMLProps<HTMLDivElement> {
  onBtnClick?: (e: any) => void;
  children?: ReactChild;
  isText?: boolean;
}

export default function Title(props: TitleProps) {
  const { onBtnClick, children, isText, className } = props;

  return (
    <TitleContainer className={className}>
      <FlexContainer>
        {isText ? null : (
          <Point onClick={onBtnClick}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Point>
        )}
        {children}
      </FlexContainer>
    </TitleContainer>
  );
}

Title.defaultProps = {
  isText: false,
};
