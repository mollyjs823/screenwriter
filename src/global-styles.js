import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    --white: #fff;
    --pink: #f72585;
    --purple: #7209b7;
    --dk-blue: #3a0ca3;
    --blue: #4361ee;
    --lt-blue: #4cc9f0;
    --lt-gray: #8e8e8e;
}
body{
    background: var(--white);
    }

a {
    text-decoration: none;
    color: inherit;
}
::-webkit-scrollbar {
    width: 15px;
  }
   
::-webkit-scrollbar-track {
    background-color: (--white);
  }
   
::-webkit-scrollbar-thumb {
    background-color: #a8b4ed;
    border-radius: 8px;
  }
::-webkit-scrollbar-thumb:hover {
    background-color: var(--blue);
}

.RichEditor-root {
  background: #fff;
  border: 1px solid #ddd;
  font-family: 'Georgia', serif;
  font-size: 14px;
  padding: 15px;
}

.RichEditor-editor {
  border-top: 1px solid #ddd;
  cursor: text;
  font-size: 16px;
  margin-top: 10px;
}

.RichEditor-editor .public-DraftEditorPlaceholder-root,
.RichEditor-editor .public-DraftEditor-content {
  margin: 0 -15px -15px;
  padding: 15px;
}

.RichEditor-editor .public-DraftEditor-content {
  min-height: 100px;
}

.RichEditor-hidePlaceholder .public-DraftEditorPlaceholder-root {
  display: none;
}

.RichEditor-editor .location {
  color: red;
}
.RichEditor-editor .character {
  color: pink;
}
.RichEditor-editor .dialog {
  color: blue;
}

.RichEditor-editor .public-DraftStyleDefault-pre {
  background-color: rgba(0, 0, 0, 0.05);
  font-family: 'Inconsolata', 'Menlo', 'Consolas', monospace;
  font-size: 16px;
  padding: 20px;
}

.RichEditor-controls {
  font-family: 'Helvetica', sans-serif;
  font-size: 14px;
  margin-bottom: 5px;
  user-select: none;
}

.RichEditor-styleButton {
  color: #999;
  cursor: pointer;
  margin-right: 16px;
  padding: 2px 0;
  display: inline-block;
}

.RichEditor-activeButton {
  color: #5890ff;
}
`;
