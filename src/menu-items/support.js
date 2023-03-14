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
// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
  UserOutlined,
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: "support",
  title: "Support",
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

export default support;
