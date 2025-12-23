import React from 'react';

const CareerGuide: React.FC = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-blue-900 uppercase border-l-4 border-yellow-500 pl-3 mb-6">
          Cẩm nang nghề nghiệp
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex flex-col gap-3 group cursor-pointer">
              <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden relative">
                <img src={`https://picsum.photos/400/300?random=${i+20}`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute top-2 right-2 bg-yellow-500 text-blue-900 text-xs font-bold px-2 py-1 rounded">Tips</div>
              </div>
              <div>
                <h3 className="font-bold text-base text-gray-800 group-hover:text-blue-600 leading-snug mb-2 line-clamp-2">
                  Top 5 kỹ năng mềm nhà tuyển dụng luôn tìm kiếm ở ứng viên mới ra trường
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-2">
                  Ngoài kiến thức chuyên môn, kỹ năng mềm đóng vai trò quyết định trong việc bạn có được nhận hay không...
                </p>
                <span className="text-xs text-blue-500 font-semibold group-hover:underline">Đọc tiếp</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerGuide;