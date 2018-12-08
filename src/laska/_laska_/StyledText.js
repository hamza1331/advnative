import styled from "styled-components";

export default styled.div`
  box-sizing: border-box;
  a {
    ${props => (props.linkColor ? `color: ${props.linkColor};` : "")}
    ${props => {
      const style = props.style || {};
      const textDecorationLine = style.textDecorationLine || "none";
      return `text-decoration: ${textDecorationLine};`;
    }};
  }

  a:hover {
    // All of these are very common scenarios; more complex problems
    // can probably be solved using onMouseEnter
    ${props =>
      props.linkHoverColor
        ? `
      color: ${props.linkHoverColor};
    `
        : ""}
    ${props => {
      const style = props.style || {};
      const hoverTextDecorationLine = style.hoverTextDecorationLine || "none";
      return `text-decoration: ${hoverTextDecorationLine};`;
    }};
  }
`;
