import icons from "./icons";

const { HiPencilSquare, GiNotebook, GrCircleInformation } = icons;

const menuSidebar = [
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
    text: "Sửa thông tin cá nhân",
    path: "/he-thong/sua-thong-tin-ca-nhan",
    icon: <GrCircleInformation />,
  },

  {
    id: 4,
    text: "Liên hệ",
    path: "/he-thong/lien-he",
    icon: <GrCircleInformation />,
  },
];

export default menuSidebar;
