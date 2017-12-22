let component = ReasonReact.statelessComponent("Greeting");

let make = (~name, _children) => {
  ...component,
  render: (_self) => <div> (ReasonReact.stringToElement("Hello, " ++ name)) </div>
};

let default =
  ReasonReact.wrapReasonForJs(~component, (jsProps) => make(~name=jsProps##name, [||]));