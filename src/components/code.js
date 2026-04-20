import * as React from "react";

export default function Code({code}) {
  return (
    <div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}



//Code block
/**
 * export default function Code({code, language}) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
 */

