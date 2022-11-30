// import { informationIcon1, informationIcon2, informationIcon3, informationIcon4 } from "./icons";

const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const NUMBER_REG = /^[0-9]*$/;

const PHONE_NUMBER_REG = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

const TEXT_REG = /^[a-zA-Z\s]*$/;

const TEXT_NUMBER_REG = /^[a-zA-Z0-9_.-]*$/;

const defaultValueFirstStep = {
  companyName: '',
  address: '',
  occupation: '',
  yearEstablishment: '',
  numberEmployees: '',
  femaleEmployee: '',
  vulnerable: '',
  experience: '',
  information: '',
};

const defaultValueSecondStep = {
  name: '',
  vocative: '',
  gender: '',
  email: '',
  phoneNumber: '',
  title: '',
};

const defaultValueThirdStep = {
  challenge: '',
  solution: '',
  benefit: '',
};

const menuToeic = [
  {
    menu: 'Trang chủ',
    subMenus: [],
    href: '#'
  },
  {
    menu: 'Luyện tập',
    subMenus: ['Gói hỗ trợ SIB', 'Đào tạo & huấn luyện tổng quát', 'Kết nối doanh nghiệp', 'Mở rộng thị trường'],
    href: '#'
  },
  {
    menu: 'Đề thi thử',
    subMenus: ['Danh sách tổ chức trung gian', 'Câu chuyện thành công'],
  },
  {
    menu: 'Blog',
    subMenus: ['SIB Hub', 'Đánh giá sức khoẻ doanh nghiệp', 'Nhu cầu thông tin - Đề xuất chính sách'],
  },
  {
    menu: 'TOEIC Tips',
    subMenus: ['Sách', 'Video', 'Tài liệu'],
  },
  {
    menu: 'Đăng nhập',
    subMenus: ['Sự kiện', 'Tin tức'],
  },
];

const navSIB = [
  {
    menuName: 'Trang chủ',
    englishName: '',
    menuUrl: '/home',
    subMenus: [],
  },
  {
    menuName: 'Luyện tập',
    englishName: '',
    menuUrl: '/practice',
    subMenus: [
      {
        name: 'PHẦN 1: MÔ TẢ TRANH',
        url: '/practice/part-one',
      },
      {
        name: 'PHẦN 2: HỎI - ĐÁP',
        url: '/practice/part-two',
      },
      {
        name: 'PHẦN 3: ĐOẠN HỘI THOẠI',
        url: '/practice/part-three',
      },
      {
        name: 'PHẦN 4: BÀI NÓI NGẮN',
        url: '/practice/part-four',
      },
      {
        name: 'PHẦN 5: HOÀN THÀNH CÂU',
        url: '/practice/part-five',
      },
      {
        name: 'PHẦN 6: HOÀN THÀNH ĐOẠN VĂN',
        url: '/practice/part-six',
      },
      {
        name: 'PHẦN 7: ĐỌC HIỂU - ĐOẠN ĐƠN',
        url: '/practice/part-seven-single',
      },
      {
        name: 'PHẦN 7: ĐỌC HIỂU - ĐOẠN KÉP',
        url: '/practice/part-seven-double',
      },
      {
        name: 'PHẦN 7: ĐỌC HIỂU - ĐOẠN BA',
        url: '/practice/part-seven-triple',
      },
      {
        name: 'NGỮ PHÁP',
        url: '/practice/grammar',
      },
      {
        name: 'TỪ VỰNG',
        url: '/practice/vocabulary',
      },
    ],
  },
  {
    menuName: 'Đề thi thử',
    englishName: '',
    menuUrl: '/media/events',
    subMenus: [
      {
        name: 'Full Test',
        url: '/test/full-test',
      },
      {
        name: 'Mini Test',
        url: '/test/mini-test',
      },
    ]
  },
  {
    menuName: 'Blog',
    englishName: '',
    menuUrl: '/library',
    subMenus: [],
  },
  {
    menuName: 'TOEIC Tips',
    englishName: '',
    menuUrl: '/contact',
    subMenus: [
      {
        name: 'TOEIC Listening Tips',
        url: '/test/full-test',
      },
      {
        name: 'TOEIC Reading Tips',
        url: '/test/mini-test',
      },
    ],
  },
  {
    menuName: 'Đăng nhập',
    englishName: '',
    menuUrl: '/contact',
    subMenus: [],
  },
];

const navIntermediary = [
  {
    menu: 'Trang chủ',
    subMenus: [],
  },
  {
    menu: 'Chương trình hỗ trợ',
    subMenus: ['Cho các đơn vị đã hỗ trợ SIB', 'Cho đơn vị đang xây dựng chương trình'],
  },
  {
    menu: 'Mạng lưới hỗ trợ',
    subMenus: ['Danh sách SIB trung gian', 'Câu chuyện thành công'],
  },
  {
    menu: 'TT hỗ trợ SIB',
    subMenus: ['SIB Hub', 'Nhu cầu thông tin - Đề xuất chính sách'],
  },
  {
    menu: 'Việc tìm người - Người tìm việc',
    subMenus: ['Các SIB đang cần hỗ trợ', 'Yêu cầu kết nối của các đơn vị trung gian'],
  },
  {
    menu: 'Thư viện',
    subMenus: [],
  },
  {
    menu: 'Truyền thông',
    subMenus: [],
  },
  {
    menu: 'Đăng ký',
    subMenus: [],
  },
  {
    menu: 'Liên hệ',
    subMenus: []
  },
];

const navPolicyMaker = [
  {
    menu: 'Trang chủ',
    subMenus: [],
  },
  {
    menu: 'Chương trình hỗ trợ',
    subMenus: ['Nâng cao năng lực', 'Xây dựng chính sách'],
  },
  {
    menu: 'Mạng lưới hỗ trợ',
    subMenus: ['Danh sách cơ quan nhà nước trong mạng lưới'],
  },
  {
    menu: 'Chính sách hiện hành',
    subMenus: ['Câu hỏi thường gặp', 'Thu thập nhu cầu của SIB và đơn vị trung gian', 'Thắc mắc về chính sách liên quan'],
  },
  {
    menu: 'Thư viện',
    subMenus: [],
  },
  {
    menu: 'Truyền thông',
    subMenus: [],
  },
  {
    menu: 'Đăng ký',
    subMenus: [],
  },
  {
    menu: 'Liên hệ',
    subMenus: []
  },
];

const informationSIBs = [
  {
    title: 'Gói hỗ trợ SIB',
    // icon: informationIcon1,
  },
  {
    title: 'Đào tạo và huấn luyện tổng quát',
    // icon: informationIcon2,
  },
  {
    title: 'Kết nối doanh nghiệp',
    // icon: informationIcon3,
  },
  {
    title: 'Mở rộng thị trường',
    // icon: informationIcon4,
  },
];

const tabNewsList = ['Gói hỗ trợ SIB', 'Đào tạo & huấn luyện tổng quát', 'Kết nối doanh nghiệp', 'Mở rộng thị trường'];

const EMAIL_TEXT_ERROR = 'Định dạng email không đúng';

const PHONE_TEXT_ERROR = 'Số điện thoại không đúng';

const MAX_LENGHT_TEXTAREA = 250;

const BUSINESS_OPTIONS = [
  {
    id: 0,
    content: 'Doanh nghiệp kinh doanh bao trùm (có lao động là người khuyết tật, LGBT,....)',
  },
  {
    id: 1,
    content: 'Hợp tác xã',
  },
  {
    id: 2,
    content: 'Doanh nghiệp khởi nghiệp tạo tác động xã hội',
  },
  {
    id: 3,
    content: 'Doanh nghiệp có giấy đăng ký là doanh nghiệp xã hội của sở KH&ĐT',
  },
  {
    id: 4,
    content: 'Khác',
  },
];

const SIB_HUBS_QUESTION_1 = {
  question: 'Câu 01: Trong các dịch vụ của SIBHub dưới đây, anh/chị hãy tích vào 03 dịch vụ mà đơn vị mình ưu tiên nhất trong 6 tháng 2022 tới đây?',
  answer: [
    {
      id: 1,
      content: 'Kiểm tra và đánh giá sức khỏe doanh nghiệp',
    },
    {
      id: 2,
      content: 'Khóa đào tạo nâng cao năng lực, kỹ năng',
    },
    {
      id: 3,
      content: 'Tư vấn, cố vấn đồng hành',
    },
    {
      id: 4,
      content: 'Văn phòng giao dịch, trưng bày sản phẩm',
    },
    {
      id: 5,
      content: 'Dữ liệu thông tin về các chính sách, các dự án, hỗ trợ từ các bên trung gian, tổ chức',
    },
    {
      id: 6,
      content: 'Truyền thông về sản phẩm, doanh nghiệp',
    },
    {
      id: 7,
      content: 'Kết nối thị trường',
    },
    {
      id: 8,
      content: 'Học tập và tham quan mô hình',
    },
  ]
};

const SIB_HUBS_QUESTION_2 = {
  question: 'Câu 02: Trong các dịch vụ của SIBHub dưới đây hãy tích vào dịch vụ anh/chị có thể chấp nhận chi trả chi phí hoặc không?',
  answer: [
    {
      id: 1,
      content: 'Kiểm tra và đánh giá sức khỏe doanh nghiệp',
    },
    {
      id: 2,
      content: 'Khóa đào tạo nâng cao năng lực, kỹ năng',
    },
    {
      id: 3,
      content: 'Tư vấn, cố vấn đồng hành',
    },
    {
      id: 4,
      content: 'Văn phòng giao dịch, trưng bày sản phẩm',
    },
    {
      id: 5,
      content: 'Dữ liệu thông tin về các chính sách, các dự án, hỗ trợ từ các bên trung gian, tổ chức',
    },
    {
      id: 6,
      content: 'Truyền thông về sản phẩm, doanh nghiệp',
    },
    {
      id: 7,
      content: 'Kết nối thị trường',
    },
    {
      id: 8,
      content: 'Học tập và tham quan mô hình',
    },
  ]
};

const SIB_HUBS_QUESTION_3 = {
  question: 'Câu 3: Trong các khía cạnh quản trị sau đây, anh/chị hãy đánh số theo thứ tự ưu tiên giải quyết trong năm 2022? (theo thứ tự từ 1 đến 5 trong đó STT 1: Ưu tiên thấp nhất; STT 05: Ưu tiên cao nhất)',
  answer: [
    {
      id: 1,
      content: 'Truyền thông tiếp thị sản phẩm',
    },
    {
      id: 2,
      content: 'Sales và chăm sóc khách hàng',
    },
    {
      id: 3,
      content: 'Hệ thống',
    },
    {
      id: 4,
      content: 'Tài chính',
    },
    {
      id: 5,
      content: 'Đội ngũ',
    },
  ]
};

const SIB_HUBS_QUESTION_4 = {
  question: 'Câu 4: Phương pháp hỗ trợ tăng cường năng lực và giải quyết vấn đề nào dưới đây mà anh/chị cho là phù hợp với doanh nghiệp của mình?',
  answer: [
    {
      id: 1,
      content: 'Các khoá đào tạo nâng cao năng lực',
    },
    {
      id: 2,
      content: 'Tư vấn',
    },
    {
      id: 3,
      content: 'Cố vấn đồng hành',
    },
  ]
};

const REMOVE_IMG_TAG_REX = /<img[^>]*>/g;

const REMOVE_EMPTY_ELEMENT_REX = /(<([^>]+)>)/ig;

export {
  REGEX_EMAIL,
  NUMBER_REG,
  PHONE_NUMBER_REG,
  TEXT_REG,
  TEXT_NUMBER_REG,
  navPolicyMaker,
  navIntermediary,
  navSIB,
  menuToeic,
  defaultValueFirstStep,
  defaultValueSecondStep,
  defaultValueThirdStep,
  informationSIBs,
  tabNewsList,
  EMAIL_TEXT_ERROR,
  PHONE_TEXT_ERROR,
  MAX_LENGHT_TEXTAREA,
  BUSINESS_OPTIONS,
  SIB_HUBS_QUESTION_1,
  SIB_HUBS_QUESTION_2,
  SIB_HUBS_QUESTION_3,
  SIB_HUBS_QUESTION_4,
  REMOVE_IMG_TAG_REX,
  REMOVE_EMPTY_ELEMENT_REX,
};
