import styled from "@emotion/styled";

export const MainLine = styled.div`
  padding: 10px 0px;
  width: 2px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Distance = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FlexLine = styled.div`
  width: 2px;
  background-color: #21b0ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 20px;
`;

export const Point = styled.button`
  width: 16px;
  height: 16px;
  border-radius: 16px;
  background-color: #21b0ff;
`;

export const TextSpace = styled.button`
  width: 16px;
  height: 16px;
  visibility: hidden;
`;

export const TitleContainer = styled.div`
  width: 16px;
  display: flex;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;

  > :not(button:first-of-type) {
    margin-left: 2rem;
  }
`;

export const CharacterBox = styled.div`
  white-space: nowrap;
`;
export const MembersContainer = styled.div`
  display: flex;
  align-items: center;
`;
