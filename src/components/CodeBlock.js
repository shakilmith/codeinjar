// src/components/CodeBlock.js
import React, { useEffect } from 'react';
import hljs from "highlight.js";

//codeblock component
const CodeBlock = ({ code, language}) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;

/**
 * usages in your component:
 * <CodeBlock
 * language="jsx"
 * code={`const Hello = () => <h1>Hello World</h1>`}
 * />
 */
