import React from 'react';
import { Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-6 border-b border-blue-700 pb-2 inline-block">Liên hệ</h3>
            <div className="space-y-4 text-sm text-blue-100">
              <p className="flex items-start gap-3">
                <MapPin className="shrink-0 mt-1" size={18} />
                <span>Khu phố 5, phường Tân Hiệp, TP. Biên Hòa, Tỉnh Đồng Nai</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="shrink-0" size={18} />
                <span>02513 894 810 - Fax: 02513 894 810</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="shrink-0" size={18} />
                <span>vieclammoi.dongnai@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-6 border-b border-blue-700 pb-2 inline-block">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Giới thiệu về trung tâm</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Quy trình giải quyết BHTN</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Hướng dẫn đăng ký tìm việc</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Văn bản pháp quy</a></li>
            </ul>
          </div>

          {/* Social / App */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-6 border-b border-blue-700 pb-2 inline-block">Kết nối</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                <Mail size={20} />
              </a>
            </div>
            
            <p className="text-sm mb-3 text-blue-200">Tải ứng dụng mobile:</p>
            <div className="flex gap-2">
               <div className="w-32 h-10 bg-black/30 rounded border border-white/20 flex items-center justify-center text-xs cursor-pointer hover:bg-black/50">
                  App Store
               </div>
               <div className="w-32 h-10 bg-black/30 rounded border border-white/20 flex items-center justify-center text-xs cursor-pointer hover:bg-black/50">
                  Google Play
               </div>
            </div>
          </div>

        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-sm text-blue-300">
          <p>© 2024 Trung tâm Dịch vụ Việc làm Đồng Nai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;