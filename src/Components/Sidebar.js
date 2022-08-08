import "./sidebar.css";
import SidebarLink from "./SidebarLink";
import Home from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarLink text="Home" active={true} Icon={Home} />
      <SidebarLink text="Explore" Icon={SearchIcon} />
      <SidebarLink text="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarLink text="Messages" Icon={MailOutlineIcon} />
      <SidebarLink text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarLink text="Lists" Icon={ListAltIcon} />
      <SidebarLink text="Profile" Icon={PermIdentityIcon} />
      <SidebarLink text="More" Icon={MoreHorizIcon} />
    </div>
  );
}

export default Sidebar;
