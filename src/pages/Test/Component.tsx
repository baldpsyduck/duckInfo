import React, { PureComponent } from 'react'; //引入react
import PropTypes from 'prop-types';  //引入prop-types
import hljs from 'highlight.js'
import 'highlight.js/styles/androidstudio.css'  //代码块样式

export const CodeBlock = (props: any) => {

    return (
        <pre>
            <code className={`language-${props.language}`}>
                {props.value}
            </code>
        </pre>
    )

}

CodeBlock.defaultProps = {
    language: ''
};

CodeBlock.protoTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
};