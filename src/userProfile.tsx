import * as React from "react";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Avatar from "@mui/material/Avatar";

export default class UserProfileComponent extends React.Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);

    this.state = { isLogin: false };
  }
  render() {
    return (
      <React.Fragment>
        <IconButton>
          <PermIdentityIcon />
        </IconButton>
        <Button color="inherit" onClick={this.props.handlelogoutClick}>
          Logout
        </Button>
      </React.Fragment>
    );
  }
}
export interface Props {
  isLogin: boolean;
  handlelogoutClick: () => void;
}
export interface State {}
