import React from 'react';
import { Star } from 'lucide-react';

const TopEmployers: React.FC = () => {
  const employers = [
    { name: "CP Group", logo: "CP" },
    { name: "Vinamilk", logo: "VNM" },
    { name: "Viettel", logo: "VT" },
    { name: "FPT Telecom", logo: "FPT" },
    { name: "Samsung", logo: "SAM" },
    { name: "Bosch VN", logo: "BOS" },
  ];

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-bold text-blue-900 uppercase border-l-4 border-yellow-500 pl-3 mb-6 flex items-center">
          Doanh nghiệp hàng đầu
          <Star className="ml-2 text-yellow-500 fill-yellow-500" size={16} />
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {employers.map((emp, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-md hover:border-blue-500 transition bg-gray-50 h-20 group cursor-pointer">
               <div className="text-center">
                  <div className="font-bold text-gray-500 group-hover:text-blue-600 transition">{emp.name}</div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopEmployers;