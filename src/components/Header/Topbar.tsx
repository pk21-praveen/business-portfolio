export function Topbar() {
  return (
    <div className="container-fluid bg-gray-100 p-0">
      <div className="hidden md:flex">
        <div className="md:w-7/12 px-5 text-left">
          <div className="h-full inline-flex items-center py-3 mr-4">
            <small className="font-normal fas fa-map-marker-alt text-primary mr-2"></small>
            <small className="font-normal">123 Street, New York, USA</small>
          </div>
          <div className="h-full inline-flex items-center py-3">
            <small className="font-normal far fa-clock text-primary mr-2"></small>
            <small className="font-normal">Mon - Fri: 09.00 AM - 09.00 PM</small>
          </div>
        </div>
        <div className="md:w-5/12 px-5 text-right">
          <div className="h-full inline-flex items-center py-3 mr-4">
            <small className="font-normal fas fa-phone-alt text-primary mr-2"></small>
            <small className="font-normal">+012 345 6789</small>
          </div>
          <div className="h-full inline-flex items-center">
            <a className="btn btn-sm-square bg-white text-primary mr-1" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-sm-square bg-white text-primary mr-1" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-sm-square bg-white text-primary mr-1" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="btn btn-sm-square bg-white text-primary mr-0" href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
