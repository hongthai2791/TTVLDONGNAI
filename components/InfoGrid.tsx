import React from 'react';
import { Bell, Newspaper, ChevronRight } from 'lucide-react';

const InfoGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Notifications Column */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden h-full">
            <div className="bg-red-50 p-4 border-l-4 border-red-500 flex items-center gap-3">
              <Bell className="text-red-500" />
              <h3 className="font-bold text-red-700 text-lg">Thông báo mới</h3>
            </div>
            <div className="p-4 space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="pb-3 border-b border-gray-100 last:border-0">
                  <p className="text-sm font-semibold text-gray-800 hover:text-red-600 cursor-pointer">
                    Thông báo về việc tiếp nhận hồ sơ hưởng trợ cấp thất nghiệp qua bưu điện
                  </p>
                  <span className="text-xs text-gray-400 mt-1 block">22/10/2024</span>
                </div>
              ))}
              <a href="#" className="text-sm text-red-600 font-medium hover:underline flex items-center gap-1 mt-2">
                Xem tất cả <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* News Column */}
        <div className="lg:col-span-2">
           <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden h-full">
            <div className="bg-blue-50 p-4 border-l-4 border-blue-600 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Newspaper className="text-blue-600" />
                <h3 className="font-bold text-blue-900 text-lg">Tin tức & Sự kiện</h3>
              </div>
            </div>
            
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Main News Item */}
              <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-md mb-3">
                   <img src="https://picsum.photos/400/250" alt="News" className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                  Sàn giao dịch việc làm Đồng Nai tiếp tục khẳng định vai trò cầu nối
                </h4>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  Trong khuôn khổ Hội nghị, nhiều doanh nghiệp đã tìm được nhân sự chất lượng cao...
                </p>
              </div>

              {/* Secondary News Items */}
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                   <div key={item} className="flex gap-3 group cursor-pointer">
                      <img src={`https://picsum.photos/100/70?random=${item}`} alt="Thumb" className="w-24 h-16 object-cover rounded-md flex-shrink-0" />
                      <div>
                        <h5 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 line-clamp-2">
                          Ký kết hợp tác giữa Trung tâm Quốc gia và các doanh nghiệp FDI
                        </h5>
                        <span className="text-xs text-gray-400 block mt-1">15/05/2024</span>
                      </div>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InfoGrid;