import { langs } from "@uiw/codemirror-extensions-langs";
import CodeMirror, {
  ViewUpdate,
  type BasicSetupOptions,
} from "@uiw/react-codemirror";
import React, { useState } from "react";

const basicSetupOptions: BasicSetupOptions = {};

export const TemplateContent = () => {
  const [bindContent, setBindContent] = useState("");

  const onChangeCodeMirror = React.useCallback(
    (val: string, viewUpdate: ViewUpdate) => {
      setBindContent(val);
    },
    [],
  );

  return (
    <div>
      <CodeMirror
        onChange={onChangeCodeMirror}
        value={bindContent}
        height={"40vh"}
        theme={"dark"}
        extensions={[langs.cfg()]}
      />
    </div>
  );
};
