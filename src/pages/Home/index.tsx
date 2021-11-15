import styled from "@emotion/styled"
import ProjectTree from 'pages/Project/ProjectShow/PSMain/ProjectTree';
import "./Home.css"
import {useState} from "react";
import {useListState} from './test';

export const TestList = () => {
  const [count, setCount] = useState(0);
  const [list, push] = useListState();

  const handleClick = () => {
    push(count);
    setCount(count + 1);
  };

  return <div>
    <button onClick={handleClick}>add {count}</button>
    <ul>
      {list.map(item => <li>{item}</li>)}
    </ul>
  </div>;
}

export default function Home() {
    return (
        <Container className="home">
            <TestList/>
        </Container>
    )
}

const Container = styled.div`
    height:100%;
`