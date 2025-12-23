import React from 'react';
import { Search, MapPin, Layers } from 'lucide-react';

const HeroSearch: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-16 md:py-24">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tìm kiếm cơ hội nghề nghiệp tại Đồng Nai</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">Kết nối người lao động và doanh nghiệp uy tín. Hàng ngàn vị trí việc làm đang chờ đón bạn.</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Search size={18} />
              </div>
              <input
                type="text"
                placeholder="Vị trí, chức danh..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              />
            </div>
            
            <div className="md:col-span-3 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <MapPin size={18} />
              </div>
              <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 appearance-none">
                <option>Tất cả địa điểm</option>
                <option>Biên Hòa</option>
                <option>Long Thành</option>
                <option>Nhơn Trạch</option>
              </select>
            </div>

            <div className="md:col-span-3 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Layers size={18} />
              </div>
              <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 appearance-none">
                <option>Tất cả ngành nghề</option>
                <option>Kế toán - Kiểm toán</option>
                <option>CNTT - Phần mềm</option>
                <option>Sản xuất - Vận hành</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <button className="w-full h-full bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm">
                Tìm việc
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;