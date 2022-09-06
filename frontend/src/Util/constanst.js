import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "Trang Chủ",
    url: "/",
  },
  {
    id: 2,
    text: "Giới Thiệu",
    url: "/about",
  },
  {
    id: 3,
    text: "Sản Phẩm",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "Sứ Mệnh",
    text: "Bản thân khách hàng, khách hàng sẽ có thể theo đuổi hoạt động quảng cáo của công ty. Những thú vui, những Bằng cách dung túng cho kẻ tham nhũng, bằng cách từ chối họ, họ không biết ý muốn của sự vật, nhưng họ không bao giờ đến từ đâu",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "Tầm Nhìn",
    text: "Bản thân khách hàng, khách hàng sẽ có thể theo đuổi hoạt động quảng cáo của công ty. Những thú vui, những Bằng cách dung túng cho kẻ tham nhũng, bằng cách từ chối họ, họ không biết ý muốn của sự vật, nhưng họ không bao giờ đến từ đâu",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "Lịch Sử",
    text: "Bản thân khách hàng, khách hàng sẽ có thể theo đuổi hoạt động quảng cáo của công ty. Những thú vui, những Bằng cách dung túng cho kẻ tham nhũng, bằng cách từ chối họ, họ không biết ý muốn của sự vật, nhưng họ không bao giờ đến từ đâu",
  },
];

export const theme = {
  primary: "#62CB88",
  secondary: "#A4D96C",
  grayDark: "#292D32",
  grayLight: "#E7ECF3",
  tertiary: "#3A1097",
  accent: "#00D1ED",
  grayF3: "#F3EDFF",
  gray6B: "#6B6B6B",
  gray23: "#232323",
};

export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

export const prices = [
  {
    name: "$1 to $50",
    value: "1-50",
  },
  {
    name: "$51 to $200",
    value: "51-200",
  },
  {
    name: "$201 to $1000",
    value: "201-1000",
  },
];

export const ratings = [
  {
    name: "4stars & up",
    rating: 4,
  },

  {
    name: "3stars & up",
    rating: 3,
  },

  {
    name: "2stars & up",
    rating: 2,
  },

  {
    name: "1stars & up",
    rating: 1,
  },
];
