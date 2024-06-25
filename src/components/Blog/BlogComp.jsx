import React from "react";
import BlogsCard from "../../pages/BlogsCard";
import Img1 from "../../assets/places/Img1.jpg";
import Img2 from "../../assets/places/Img2.jpg";
import Img3 from "../../assets/places/Img3.jpg";
const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "The 10 best place to visit in Việt Nam",
    description:
      "Việt Nam, một đất nước giàu lịch sử và văn hóa, sở hữu những cảnh quan thiên nhiên tuyệt đẹp trải dài từ Bắc tới Nam. Thủ đô Hà Nội kết hợp hài hòa giữa vẻ đẹp cổ kính và hiện đại với các điểm đến như Hồ Hoàn Kiếm gắn liền với truyền thuyết về vua Lê Lợi trả gươm cho Rùa Thần, Phố Cổ Hà Nội với những con đường nhỏ và nhà cổ, và Lăng Chủ tịch Hồ Chí Minh. Vịnh Hạ Long ở Quảng Ninh, di sản thiên nhiên thế giới, nổi tiếng với cảnh quan hùng vĩ và hệ sinh thái phong phú, với Hang Sửng Sốt, Đảo Ti Tốp và làng chài Cửa Vạn. Thành phố Huế, kinh đô cổ của triều đại nhà Nguyễn, mang đậm dấu ấn lịch sử với Đại Nội Huế, các lăng tẩm Khải Định và Minh Mạng, cùng sông Hương và cầu Trường Tiền thơ mộng. Đà Nẵng, thành phố phát triển nhanh chóng, nổi tiếng với Bà Nà Hills, Cầu Vàng và Ngũ Hành Sơn. Phố cổ Hội An ở Quảng Nam, di sản văn hóa thế giới, thu hút du khách bởi vẻ đẹp cổ kính với Chùa Cầu và bãi biển An Bàng. Nha Trang, thành phố biển nổi tiếng với Vinpearl Land, tháp Bà Ponagar và các hòn đảo như Hòn Mun, Hòn Tằm. Đà Lạt, thành phố ngàn hoa, với khí hậu mát mẻ và cảnh quan thơ mộng, bao gồm Hồ Xuân Hương, Thung lũng Tình Yêu và Dinh Bảo Đại. Thành phố Hồ Chí Minh, trung tâm kinh tế lớn nhất Việt Nam, sôi động với Chợ Bến Thành, Dinh Độc Lập và các công trình kiến trúc Pháp như Nhà thờ Đức Bà và Bưu điện Trung tâm. Đảo Phú Quốc, thiên đường du lịch biển, thu hút du khách bởi Bãi Sao, Bãi Dài, vườn quốc gia Phú Quốc và Vinpearl Safari. Cần Thơ, thủ phủ của miền Tây Nam Bộ, nổi tiếng với chợ nổi Cái Răng và Bến Ninh Kiều. Mỗi địa điểm trên đều mang đến những trải nghiệm độc đáo và hấp dẫn, góp phần tạo nên bức tranh du lịch đa dạng và phong phú của Việt Nam.",
    author: "TAi Nguyen",
    date: "April,2022",
  },
  {
    id: 2,
    image: Img2,
    title: "The 10 best place to visit in India",
    description:
      "Việt Nam, một đất nước giàu lịch sử và văn hóa, sở hữu những cảnh quan thiên nhiên tuyệt đẹp trải dài từ Bắc tới Nam. Thủ đô Hà Nội kết hợp hài hòa giữa vẻ đẹp cổ kính và hiện đại với các điểm đến như Hồ Hoàn Kiếm gắn liền với truyền thuyết về vua Lê Lợi trả gươm cho Rùa Thần, Phố Cổ Hà Nội với những con đường nhỏ và nhà cổ, và Lăng Chủ tịch Hồ Chí Minh. Vịnh Hạ Long ở Quảng Ninh, di sản thiên nhiên thế giới, nổi tiếng với cảnh quan hùng vĩ và hệ sinh thái phong phú, với Hang Sửng Sốt, Đảo Ti Tốp và làng chài Cửa Vạn. Thành phố Huế, kinh đô cổ của triều đại nhà Nguyễn, mang đậm dấu ấn lịch sử với Đại Nội Huế, các lăng tẩm Khải Định và Minh Mạng, cùng sông Hương và cầu Trường Tiền thơ mộng. Đà Nẵng, thành phố phát triển nhanh chóng, nổi tiếng với Bà Nà Hills, Cầu Vàng và Ngũ Hành Sơn. Phố cổ Hội An ở Quảng Nam, di sản văn hóa thế giới, thu hút du khách bởi vẻ đẹp cổ kính với Chùa Cầu và bãi biển An Bàng. Nha Trang, thành phố biển nổi tiếng với Vinpearl Land, tháp Bà Ponagar và các hòn đảo như Hòn Mun, Hòn Tằm. Đà Lạt, thành phố ngàn hoa, với khí hậu mát mẻ và cảnh quan thơ mộng, bao gồm Hồ Xuân Hương, Thung lũng Tình Yêu và Dinh Bảo Đại. Thành phố Hồ Chí Minh, trung tâm kinh tế lớn nhất Việt Nam, sôi động với Chợ Bến Thành, Dinh Độc Lập và các công trình kiến trúc Pháp như Nhà thờ Đức Bà và Bưu điện Trung tâm. Đảo Phú Quốc, thiên đường du lịch biển, thu hút du khách bởi Bãi Sao, Bãi Dài, vườn quốc gia Phú Quốc và Vinpearl Safari. Cần Thơ, thủ phủ của miền Tây Nam Bộ, nổi tiếng với chợ nổi Cái Răng và Bến Ninh Kiều. Mỗi địa điểm trên đều mang đến những trải nghiệm độc đáo và hấp dẫn, góp phần tạo nên bức tranh du lịch đa dạng và phong phú của Việt Nam.",
    author: "TAi Nguyen",
    date: "April,2022",
  },
  {
    id: 3,
    image: Img3,
    title: "The 10 best place to visit in India",
    description:
      "Việt Nam, một đất nước giàu lịch sử và văn hóa, sở hữu những cảnh quan thiên nhiên tuyệt đẹp trải dài từ Bắc tới Nam. Thủ đô Hà Nội kết hợp hài hòa giữa vẻ đẹp cổ kính và hiện đại với các điểm đến như Hồ Hoàn Kiếm gắn liền với truyền thuyết về vua Lê Lợi trả gươm cho Rùa Thần, Phố Cổ Hà Nội với những con đường nhỏ và nhà cổ, và Lăng Chủ tịch Hồ Chí Minh. Vịnh Hạ Long ở Quảng Ninh, di sản thiên nhiên thế giới, nổi tiếng với cảnh quan hùng vĩ và hệ sinh thái phong phú, với Hang Sửng Sốt, Đảo Ti Tốp và làng chài Cửa Vạn. Thành phố Huế, kinh đô cổ của triều đại nhà Nguyễn, mang đậm dấu ấn lịch sử với Đại Nội Huế, các lăng tẩm Khải Định và Minh Mạng, cùng sông Hương và cầu Trường Tiền thơ mộng. Đà Nẵng, thành phố phát triển nhanh chóng, nổi tiếng với Bà Nà Hills, Cầu Vàng và Ngũ Hành Sơn. Phố cổ Hội An ở Quảng Nam, di sản văn hóa thế giới, thu hút du khách bởi vẻ đẹp cổ kính với Chùa Cầu và bãi biển An Bàng. Nha Trang, thành phố biển nổi tiếng với Vinpearl Land, tháp Bà Ponagar và các hòn đảo như Hòn Mun, Hòn Tằm. Đà Lạt, thành phố ngàn hoa, với khí hậu mát mẻ và cảnh quan thơ mộng, bao gồm Hồ Xuân Hương, Thung lũng Tình Yêu và Dinh Bảo Đại. Thành phố Hồ Chí Minh, trung tâm kinh tế lớn nhất Việt Nam, sôi động với Chợ Bến Thành, Dinh Độc Lập và các công trình kiến trúc Pháp như Nhà thờ Đức Bà và Bưu điện Trung tâm. Đảo Phú Quốc, thiên đường du lịch biển, thu hút du khách bởi Bãi Sao, Bãi Dài, vườn quốc gia Phú Quốc và Vinpearl Safari. Cần Thơ, thủ phủ của miền Tây Nam Bộ, nổi tiếng với chợ nổi Cái Răng và Bến Ninh Kiều. Mỗi địa điểm trên đều mang đến những trải nghiệm độc đáo và hấp dẫn, góp phần tạo nên bức tranh du lịch đa dạng và phong phú của Việt Nam.",
    author: "TAi Nguyen",
    date: "April,2022",
  },
];
const BlogComp = () => {
  return (
    <div>
      <div data-aos="fade-up" className="container">
        <h1
          className="my-8 border-l-8 
            border-primary/50 py-2 pl-2 
            text-3xl font-bold"
        >
          Our latest Blogs{" "}
        </h1>
        <div
          className="grid grid-cols-1 gap-4
            sm:grid-cols-2 md:grid-cols-3"
        >
          {BlogsData.map((item, index) => (
            <BlogsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogComp;
