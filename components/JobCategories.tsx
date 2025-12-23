import React from 'react';
import { Building2, Briefcase, FileText, User } from 'lucide-react';

const JobCategories: React.FC = () => {
  const cats = [
    { name: "Kế toán - Kiểm toán", count: 120, icon: <FileText /> },
    { name: "CNTT - Phần mềm", count: 85, icon: <Building2 /> },
    { name: "Sản xuất - Vận hành", count: 340, icon: <Briefcase /> },
    { name: "Kinh doanh - Bán hàng", count: 210, icon: <User /> },
    { name: "Cơ khí - Chế tạo", count: 95, icon: <Briefcase /> },
    { name: "Lao động phổ thông", count: 500, icon: <User /> },
    { name: "Điện - Điện tử", count: 110, icon: <Building2 /> },
    { name: "Vận tải - Lái xe", count: 150, icon: <Briefcase /> },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-blue-900 uppercase border-l-4 border-yellow-500 pl-3 mb-6">
          Nhóm việc làm
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cats.map((cat, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center gap-3 cursor-pointer group border border-transparent hover:border-blue-200">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition">
                {React.cloneElement(cat.icon as React.ReactElement, { size: 20 })}
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-800 group-hover:text-blue-600 transition">{cat.name}</h3>
                <span className="text-xs text-gray-500">({cat.count} việc làm)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;