import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <>
      {/* Login Widget */}
      <div className="sidebar-box shadow-sm">
         <div className="sidebar-header">
            <i className="fa fa-user-circle"></i> ĐĂNG NHẬP HỆ THỐNG
         </div>
         <div className="sidebar-body">
            <form>
               <div className="form-group">
                  <div className="input-group">
                     <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                     </div>
                     <input type="text" className="form-control" placeholder="Tên đăng nhập" />
                  </div>
               </div>
               <div className="form-group">
                  <div className="input-group">
                     <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-lock"></i></span>
                     </div>
                     <input type="password" className="form-control" placeholder="Mật khẩu" />
                  </div>
               </div>
               <div className="form-check mb-2">
                  <input type="checkbox" className="form-check-input" id="remember" />
                  <label className="form-check-label small text-muted" htmlFor="remember">Ghi nhớ đăng nhập</label>
               </div>
               <button type="submit" className="btn btn-primary btn-block btn-sm">Đăng nhập</button>
               <div className="mt-2 text-center small">
                  <a href="#">Quên mật khẩu?</a> | <a href="#">Đăng ký</a>
               </div>
            </form>
         </div>
      </div>

      {/* Insurance Lookup */}
      <div className="sidebar-box shadow-sm">
         <div className="sidebar-header bg-warning text-dark">
            <i className="fa fa-search"></i> TRA CỨU BHTN
         </div>
         <div className="sidebar-body text-center">
             <img src="https://baohiemxahoi.gov.vn/Style%20Library/images/icon_bhtn.png" className="img-fluid mb-2" style={{maxHeight:'50px'}}/>
             <p className="small">Tra cứu thông tin đóng hưởng Bảo hiểm thất nghiệp</p>
             <button className="btn btn-outline-dark btn-sm btn-block">Tra cứu ngay</button>
         </div>
      </div>

      {/* Statistics */}
      <div className="sidebar-box shadow-sm">
         <div className="sidebar-header bg-success">
            <i className="fa fa-bar-chart"></i> THỐNG KÊ TRUY CẬP
         </div>
         <div className="sidebar-body p-0">
            <ul className="list-group list-group-flush small">
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  Đang online: <span className="badge badge-primary badge-pill">152</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  Hôm nay: <span className="badge badge-success badge-pill">1,205</span>
               </li>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  Tổng lượt truy cập: <span className="badge badge-secondary badge-pill">8,520,113</span>
               </li>
            </ul>
         </div>
      </div>
      
      {/* Link Website */}
      <div className="sidebar-box shadow-sm">
         <div className="sidebar-header bg-info">
            <i className="fa fa-link"></i> LIÊN KẾT WEBSITE
         </div>
         <div className="sidebar-body">
            <select className="form-control form-control-sm">
               <option>-- Chọn liên kết --</option>
               <option>Cổng TTĐT Chính phủ</option>
               <option>Bộ Lao động - TBXH</option>
               <option>UBND Tỉnh Đồng Nai</option>
            </select>
         </div>
      </div>
    </>
  );
};

export default Sidebar;