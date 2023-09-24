import icons from "./icons";

const { HiPencilSquare, GiNotebook, GrCircleInformation } = icons;

const menuManage = [
  {
    id: 1,
    text: "Đăng tin cho thuê",
    path: "/he-thong/tao-moi-bai-dang",
    icon: <HiPencilSquare />,
  },
  {
    id: 2,
    text: "Quản lý tin đăng",
    path: "/he-thong/quan-li-bai-dang",
    icon: <GiNotebook />,
  },
  {
    id: 3,
    text: "Thông tin tài khoản",
    path: "/he-thong/sua-thong-tin-ca-nhan",
    icon: <GrCircleInformation />,
  },
];

export default menuManage;
