import React, { useState } from 'react';
import { MapPin, DollarSign, Clock, Briefcase } from 'lucide-react';
import { Job } from '../types';

const mockJobs: Job[] = [
  { id: 1, title: 'Lao động kỹ thuật - Quản lý xưởng', company: 'CÔNG TY TNHH BACKYARD CRAFT', location: 'Biên Hòa', salary: '15 - 20 Triệu', date: '27/12/2025', isHot: true },
  { id: 2, title: 'Nhân viên Xuất Nhập Khẩu', company: 'CÔNG TY TNHH TIMBER INDUSTRIES', location: 'Long Thành', salary: 'Thỏa thuận', date: '01/01/2026' },
  { id: 3, title: 'Bếp phó nhà hàng Á Âu', company: 'TRƯỜNG TH THCS THPT Song Ngữ', location: 'Biên Hòa', salary: '12 - 15 Triệu', date: '08/01/2026' },
  { id: 4, title: 'Kỹ sư cơ khí chế tạo máy', company: 'CÔNG TY CỔ PHẦN CƠ KHÍ ĐỒNG NAI', location: 'Nhơn Trạch', salary: '10 - 15 Triệu', date: '15/12/2025', isHot: true },
  { id: 5, title: 'Chuyên viên Nhân sự tổng hợp', company: 'CÔNG TY TNHH ABC VIỆT NAM', location: 'Trảng Bom', salary: 'Thỏa thuận', date: '20/12/2025' },
  { id: 6, title: 'Công nhân may công nghiệp', company: 'CÔNG TY MAY ĐỒNG NAI', location: 'Biên Hòa', salary: '8 - 12 Triệu', date: '30/12/2025' },
];

const JobList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hot' | 'new' | 'high'>('hot');

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase relative inline-block">
            Danh sách việc làm
            <span className="block w-16 h-1 bg-blue-600 mx-auto mt-3"></span>
          </h2>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-full shadow-sm inline-flex border border-gray-200">
            <button 
              onClick={() => setActiveTab('hot')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === 'hot' ? 'bg-red-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Việc làm tốt nhất
            </button>
            <button 
              onClick={() => setActiveTab('new')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === 'new' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Mới cập nhật
            </button>
            <button 
              onClick={() => setActiveTab('high')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeTab === 'high' ? 'bg-green-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Lương cao
            </button>
          </div>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex gap-4 mb-3">
                <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0 text-gray-400">
                   <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 group-hover:text-blue-600 line-clamp-2 text-sm md:text-base leading-snug mb-1">
                    {job.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium uppercase truncate">{job.company}</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-xs text-gray-600">
                  <MapPin size={14} className="mr-2 text-gray-400" />
                  {job.location}
                </div>
                <div className="flex items-center text-xs text-red-600 font-semibold">
                  <DollarSign size={14} className="mr-2" />
                  {job.salary}
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock size={14} className="mr-2 text-gray-400" />
                  Hạn nộp: {job.date}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-50 flex justify-between items-center">
                 {job.isHot && <span className="text-[10px] bg-red-100 text-red-600 px-2 py-1 rounded font-bold">HOT</span>}
                 <button className="text-sm text-blue-600 font-medium hover:underline ml-auto">Ứng tuyển ngay</button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-white border border-blue-600 text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition-colors">
            Xem tất cả việc làm
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobList;