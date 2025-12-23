import React from 'react';
import { FileCheck, Download, FileText } from 'lucide-react';

const Documents: React.FC = () => {
   return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
           <div>
              <h2 className="text-xl font-bold text-blue-900 uppercase border-l-4 border-yellow-500 pl-3 mb-6">
                Văn bản pháp quy
              </h2>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-2">
                 <ul className="divide-y divide-gray-50">
                   {[1, 2, 3, 4].map(i => (
                     <li key={i} className="p-4 flex items-start gap-4 hover:bg-blue-50/50 transition rounded-lg group">
                        <div className="w-10 h-10 bg-red-50 text-red-500 rounded flex items-center justify-center shrink-0">
                           <FileCheck size={20} />
                        </div>
                        <div className="flex-grow">
                          <a href="#" className="font-semibold text-sm text-gray-800 group-hover:text-blue-600 line-clamp-2 mb-1">
                            Nghị định số 28/2020/NĐ-CP quy định về xử phạt vi phạm hành chính lĩnh vực lao động
                          </a>
                          <div className="text-xs text-gray-400 flex flex-wrap gap-x-4 gap-y-1">
                             <span>Số hiệu: 28/2020/NĐ-CP</span>
                             <span>Ngày: 01/03/2020</span>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-blue-600 transition"><Download size={18} /></button>
                     </li>
                   ))}
                 </ul>
              </div>
           </div>
           
           <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-blue-900 uppercase border-l-4 border-yellow-500 pl-3 mb-6">
                   Biểu mẫu tải về
                </h2>
                <div className="grid grid-cols-2 gap-4">
                   {['Mẫu đơn đề nghị hưởng TCTN', 'Mẫu thông báo tìm kiếm việc làm', 'Mẫu đăng ký tuyển dụng (DN)', 'Sơ yếu lý lịch tự thuật'].map((t, idx) => (
                      <div key={idx} className="bg-white p-4 border border-gray-200 rounded-lg hover:border-blue-500 cursor-pointer transition flex items-center gap-2">
                         <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                            <FileText size={14} />
                         </div>
                         <span className="text-xs font-semibold text-gray-700 line-clamp-2">{t}</span>
                      </div>
                   ))}
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white text-center">
                 <h3 className="font-bold text-lg mb-2">Bạn cần hỗ trợ pháp lý?</h3>
                 <p className="text-blue-100 text-sm mb-4">Liên hệ ngay với bộ phận tư vấn pháp luật của chúng tôi</p>
                 <button className="bg-yellow-500 text-blue-900 font-bold px-6 py-2 rounded-full text-sm hover:bg-yellow-400 transition">Gửi câu hỏi ngay</button>
              </div>
           </div>
        </div>
      </div>
    </section>
   );
};

export default Documents;