import Menu from "./TopBarComponents/Menu";
import SearchBar from "components/SearchBar";
import Title from "./TopBarComponents/Title";
import styled from "@emotion/styled";

export default function Left() {
    return (
        <Container className="left">
            <Title/>
            <Menu/>
            <SearchBar borderColor="transparent" btnColor="white" backgroundColor="rgba(255,193,31,.50)" color="white"/>
        </Container>
    )
}

const Container=styled.div`
    width:100rem;
    margin-left: 2rem;
`