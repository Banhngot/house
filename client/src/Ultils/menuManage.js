import icons from "./icons";

const { HiPencilSquare, GiNotebook, GrCircleInformation } = icons;

const menuManage = [
  {
    id: 1,
    text: "Đăng tin cho thuê",
    path: "/system/create-new",
    icon: <HiPencilSquare />,
  },
  {
    id: 2,
    text: "Quản lý tin đăng",
    path: "/system/manage-post",
    icon: <GiNotebook />,
  },
  {
    id: 3,
    text: "Thông tin tài khoản",
    path: "/system/profile",
    icon: <GrCircleInformation />,
  },
];

export default menuManage;
