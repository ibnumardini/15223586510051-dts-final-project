import { Button, Divider } from "antd";

export const PopoverContent = ({ handleLogout, user }) => {
  return (
    <div className="navbar__popover">
      <Button type="text" style={{ fontWeight: 700 }}>
        {user?.displayName ?? user?.email}
      </Button>
      <Divider style={{ margin: "5px 0" }} />
      <Button type="link" href="#">
        Profile
      </Button>
      <Button type="link" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};
