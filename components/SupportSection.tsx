import React from 'react';
import { HelpCircle, BookOpen, User, Building2 } from 'lucide-react';

const SupportSection: React.FC = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
       <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-blue-900 uppercase mb-10">
             Hỗ trợ người dùng
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
             {[
               { icon: <HelpCircle />, label: "Hỏi đáp chính sách", desc: "Giải đáp thắc mắc về BHTN & Việc làm" },
               { icon: <BookOpen />, label: "Hướng dẫn sử dụng", desc: "Quy trình nộp hồ sơ online" },
               { icon: <User />, label: "Người tìm việc", desc: "Đăng ký hồ sơ, tìm việc làm" },
               { icon: <Building2 />, label: "Nhà tuyển dụng", desc: "Đăng tin tuyển dụng, tìm ứng viên" },
             ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-white hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer group border border-transparent hover:border-gray-100">
                   <div className="w-14 h-14 bg-white text-blue-600 shadow-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                      {React.cloneElement(item.icon as React.ReactElement, { size: 28 })}
                   </div>
                   <h3 className="font-bold text-gray-800 mb-2">{item.label}</h3>
                   <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

export default SupportSection;