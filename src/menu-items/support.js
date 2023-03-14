// assets
import {
  ChromeOutlined,
  QuestionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
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
      id: "sample-page",
      title: "Sample Page",
      type: "item",
      url: "/sample-page",
      icon: icons.ChromeOutlined,
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
  ],
};

export default support;
