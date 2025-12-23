import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

const FeaturedResumes: React.FC = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
           <h2 className="text-xl font-bold text-blue-900 uppercase border-l-4 border-yellow-500 pl-3">
             Hồ sơ xin việc mới nhất
           </h2>
           <a href="#" className="text-sm text-blue-600 hover:underline flex items-center">Xem tất cả <ChevronRight size={14}/></a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border border-gray-100 rounded-lg p-4 text-center hover:shadow-lg transition group bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-3 overflow-hidden border-2 border-white shadow-sm">
                <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-gray-800 text-sm group-hover:text-blue-600 transition">Nguyễn Văn {String.fromCharCode(64+i)}</h3>
              <p className="text-xs text-blue-600 font-medium mb-2">Kế toán tổng hợp</p>
              <div className="flex justify-center items-center text-xs text-gray-500 mb-4 gap-1">
                 <MapPin size={10} /> Biên Hòa
              </div>
              <button className="text-xs border border-blue-600 text-blue-600 px-4 py-1.5 rounded-full hover:bg-blue-600 hover:text-white transition font-medium w-full">
                Xem hồ sơ
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedResumes;