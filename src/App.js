import React from "react";
import "./App.css";
const ReactMarkdown = require("react-markdown");

const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
1. Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: defaultText
    };
  }

  render() {
    const handleChange = text => {
      this.setState({
        text
      });
    };

    const input = this.state.text;

    return (
      <div className="App">
        <h1>Write some Markdown</h1>
        <div id="main-editor">
          <textarea
            name="editor"
            id="editor"
            cols="50"
            rows="20"
            value={this.state.text}
            onChange={event => handleChange(event.target.value)}
          ></textarea>
        </div>
        <h1>Markdown output</h1>
        <div id="preview">
          <ReactMarkdown source={input}></ReactMarkdown>
        </div>
      </div>
    );
  }
}

export default App;
