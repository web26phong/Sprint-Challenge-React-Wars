# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a javascript library that attempts to solve the issues of compartmentalization and constant DOM manipulation. It solves compartmentalization by it's usage of breaking everything into reusable components, and it solves constant DOM manipulation through use of a virtual DOM that does a check of what state data is changing versus what is currently present on the DOM and only makes changes to those declared elements.

1. What does it mean to think in react?

Thinking in react means to think of each section as a separate component and how or what sections will be needed to be updated by the DOM.

1. Describe state.

State is data that is owned by and currently being obtained or used locally within a component.

1. Describe props.

Props are data that are being passed from a parent component to a child component, but that data is owned by it's parent and just being used by the child.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are issued commands that happen only after a component renders or re-renders. You can use the "useEffect" function and tell it to specifically watch certain changes in state.