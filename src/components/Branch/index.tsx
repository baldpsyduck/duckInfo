import { MainLine } from "./StyleComponets";
import GroundPoints from "./GroundPoints";
import FamilyPoints from "./FamilyPoints";
import { branch } from "types/project";

interface propsType {
  tree: branch[];
}

const mapBranch = (tree: branch[]) => {
  return tree.map((branch) => {
    return (
      <>
        {(branch.children||[]).length === 0 ? (
          <GroundPoints
            num={branch.key}
            title={branch.title}
            members={branch.members || []}
          />
        ) : (
          <FamilyPoints
            num={branch.key}
            title={branch.title}
            members={branch.members}
            children={<>{mapBranch(branch.children)}</>}
          />
        )}
      </>
    );
  });
};

export default function Branch(props: propsType) {
  const { tree } = props;

  return (
    <>
      <MainLine style={{ marginLeft: "15px" }}>{mapBranch(tree)}</MainLine>
    </>
  );
}

Branch.defaultProps = {
  tree: [],
};
