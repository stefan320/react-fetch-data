import * as classes from "./Header.module.scss";

const Header = (props) => (
  <div className={classes.Header}>{props.children}</div>
);

export default Header;
