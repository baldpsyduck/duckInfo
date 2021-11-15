import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import { markdown } from "config/markdown";
import remarkMath from "remark-math";
import styled from "@emotion/styled";
import copy from "copy-to-clipboard";
import { CopyOutlined } from "@ant-design/icons";
import { message } from "antd";

export const ShowMD = (props: React.HTMLProps<HTMLDivElement>) => {
  const { className } = props;

  return (
    <Container className={`markDownContainer ${className}`}>
      <ReactMarkdown
        children={markdown}
        components={{
          code({ node, inline, className, children }) {
            const match = /language-(\w+)/.exec(className || "");
            const code = String(children).replace(/\n/, "\n");

            return !inline && match ? (
              <SyntaxHighlighter
                children={code}
                style={a11yDark}
                language={match[1]}
                PreTag="div"
                renderer={() => (
                  <>
                    <button
                      onClick={() => {
                        copy(code);
                        message.success("复制成功");
                      }}
                    >
                      <CopyOutlined />
                      &nbsp;
                      <span>复制</span>
                    </button>
                    <br />
                    <span>{code}</span>
                  </>
                )}
              />
            ) : (
              <code className={className}>
                <span>{code}</span>
              </code>
            );
          },
        }}
        remarkPlugins={[remarkGfm, remarkMath]}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  padding: 3rem;
  border: 1px solid #d0d7de;
  border-radius: 5px;
  overflow-x: auto;
`;
