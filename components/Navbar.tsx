import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-1 text-xs hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={12} /> Hotline: 02513 894 810</span>
            <span>Email: vieclammoi.dongnai@gmail.com</span>
          </div>
          <div className="flex gap-3">
            <a href="#" className="hover:text-yellow-400">Đăng nhập</a>
            <span>|</span>
            <a href="#" className="hover:text-yellow-400">Đăng ký</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-red-700 font-bold border-2 border-red-700">
              LOGO
            </div>
            <div>
              <h1 className="text-xl font-bold text-red-700 leading-tight uppercase">Trung tâm Dịch vụ Việc làm</h1>
              <h2 className="text-lg font-bold text-blue-900 leading-none uppercase">Đồng Nai</h2>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 font-medium text-gray-700">
            <a href="#" className="hover:text-blue-700 transition-colors">Giới thiệu</a>
            <a href="#" className="hover:text-blue-700 transition-colors">Tin tức</a>
            <a href="#" className="hover:text-blue-700 transition-colors">Việc làm</a>
            <a href="#" className="hover:text-blue-700 transition-colors">Bảo hiểm thất nghiệp</a>
            <a href="#" className="hover:text-blue-700 transition-colors">Văn bản</a>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors shadow-md text-sm">
              Nhà tuyển dụng
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="flex flex-col p-4 space-y-3 font-medium text-gray-700">
            <a href="#" className="block py-2">Giới thiệu</a>
            <a href="#" className="block py-2">Tin tức & Sự kiện</a>
            <a href="#" className="block py-2">Việc làm</a>
            <a href="#" className="block py-2">Bảo hiểm thất nghiệp</a>
            <a href="#" className="block py-2 text-blue-600">Đăng nhập / Đăng ký</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;