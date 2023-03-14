// assets
import {
  ChromeOutlined,
  QuestionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FolderIcon from "@mui/icons-material/Folder";
// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
  UserOutlined,
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const clients = {
  id: "clients",
  title: "Clients",
  type: "group",
  children: [
    {
      id: "mail",
      title: "Mails",
      type: "item",
      url: "/mail",
      icon: AlternateEmailIcon,
    },
    {
      id: "client",
      title: "Clients",
      type: "item",
      url: "/clients",
      icon: icons.UserOutlined,
    },
    {
      id: "folder",
      title: "Folders",
      type: "item",
      url: "/folders",
      icon: FolderIcon,
    },
    {
      id: "Calendar",
      title: "Calendar",
      type: "item",
      url: "/calendar",
      icon: InsertInvitationIcon,
    },
    {
      id: "organization",
      title: "Organization",
      type: "item",
      url: "/organization",
      icon: CorporateFareIcon,
    },
    {
      id: "task",
      title: "Tasks",
      type: "item",
      url: "/task",
      icon: AssignmentIcon,
    },
  ],
};

export default clients;
