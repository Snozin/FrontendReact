import styled from "styled-components"

const color = "rgb(29,161,242)"

const Button = styled.button`
  align-items: center;
  background-color: ${(props) =>
    props.variant === "primary" ? color : "white"};
  border-radius: 9999px;
  border-style: solid;
  border-width: 1px;
  border-color: ${color};
  color: ${(props) => (props.variant === "primary" ? "white" : color)};
  cursor: pointer;
  display: inline-flex;
  font: inherit;
  font-weight: bold;
  min-height: 36px;
  justify-content: center;
  min-width: 72px;
  outline-style: none;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  padding: 0 30px;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background.color: ${(props) =>
      props.variant === "primary" ? "rgb(26,145,218)" : "rgba(29,161,242,.1)"};
  }
`
// Se pueden componer casos específicos de componentes genéricos
// const ButtonPrimary = props => <Button variant='primary' {...props}/>

export default Button
