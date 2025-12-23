import React from 'react';
import { PlayCircle } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-12 bg-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-xl font-bold uppercase border-l-4 border-yellow-500 pl-3 mb-8">
          Video - Hình ảnh hoạt động
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 aspect-video bg-black rounded-xl relative flex items-center justify-center cursor-pointer group overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/800/450?grayscale" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition duration-500" />
              <PlayCircle size={64} className="relative z-10 text-white opacity-90 group-hover:scale-110 group-hover:text-yellow-400 transition duration-300" />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                 <h3 className="font-bold text-lg">Hội nghị kết nối cung cầu lao động tỉnh Đồng Nai năm 2024</h3>
                 <p className="text-sm text-gray-300">Tổng kết hoạt động năm và định hướng phát triển</p>
              </div>
           </div>
           <div className="space-y-4 h-full flex flex-col justify-between">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-4 bg-white/10 p-2 rounded-lg hover:bg-white/20 transition cursor-pointer group">
                   <div className="w-32 h-20 bg-black rounded relative shrink-0 overflow-hidden">
                      <img src={`https://picsum.photos/400/225?random=${i}`} className="w-full h-full object-cover opacity-80" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle size={20} className="text-white" />
                      </div>
                   </div>
                   <div className="py-1">
                      <h4 className="text-sm font-medium line-clamp-2 group-hover:text-yellow-400 transition">Hướng dẫn thủ tục đăng ký Bảo hiểm thất nghiệp online</h4>
                      <span className="text-xs text-blue-200 mt-1 block">15:02</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;