import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Input } from "antd";
import "./SearchBar.css";
import { useRef } from "react";

interface searchBarProps {
  width?: number;
  height?: number;
  borderColor?: string;
  btnColor?: string;
  backgroundColor?: string;
  color?: string;
  placeholder?: string; 
  className?: string;
  onBtnClick?: (e?: any, text?:string) => void;
}

export default function SearchBar(props: searchBarProps) {

  const width = props.width || 220;
  const height = props.height || 35;
  const borderColor = props.borderColor || "#d5d6d7";
  const btnColor = props.btnColor || borderColor;
  const backgroundColor = props.backgroundColor || "white";
  const color = props.color || "black";
  const placeholder = props.placeholder || "";
  const className = props.className || "";
  const { onBtnClick } = props;

  const input = useRef<Input>(null);

  const SearchBar = styled.div`
    width: ${width}px;
    border: 1px solid ${borderColor};
  `;

  const SearchInput = styled(Input)`
    height: ${height}px;
    width: ${width - height}px;
    background-color: ${backgroundColor};
    font-size: ${height * 0.4}px;
    outline: none;
    border: 0;
    color: ${color};
    border-radius: 0px;
  `;

  const SearchBtn = styled.button`
    height: ${height}px;
    width: ${height}px;
    background-color: ${backgroundColor};
  `;
 
  const SearchIcon = styled(SearchOutlined)`
    color: ${btnColor};
    height: ${height}px;
    width: ${height}px;
    font-size: ${height * 0.4}px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <SearchBar className={`searchBar ${className}`}>
      <SearchInput ref={input} placeholder={placeholder} />
      <SearchBtn
        className="searchBtn"
        onClick={(e) => {
          onBtnClick && onBtnClick(e,input.current?.state.value);
        }}
      >
        <SearchIcon />
      </SearchBtn>
    </SearchBar>
  );
}
