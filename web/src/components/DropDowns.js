import React from "react";
import {Link} from 'gatsby'


const ProductsDropdown = ({ current, prev }) => {
  return (
    <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
      <div data-prevent-distortion>
        <div className="dropdown-section">
          <ul className="products-section">
            <li>
                <Link className="heading" to="/Mission"><h3 className="heading">Mission</h3></Link>
            </li>
            <li>
                <Link className="heading" to="/People"><h3 className="heading">People</h3></Link>
            </li>
            <li>
                <Link className="heading" to="/Collaboration"><h3 className="heading">Collaboration</h3></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const DevelopersDropdown = ({ current, prev }) => {
  return (
    <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
      <div data-prevent-distortion>
        <div className="dropdown-section">
          <ul className="products-section">
            <li>
                <Link className="heading" to="/scientific-computing"><h3 className="heading">Scientific Computing</h3></Link>
            </li>
            <li>
                <Link className="heading" to="/data-solutions"><h3 className="heading">Data Solutions</h3></Link>
            </li>
            <li>
                <Link className="heading" to="/cloud-computing"><h3 className="heading">Cloud Computing</h3></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const CompanyDropdown = ({ current, prev }) => {
  return (
    <div className="products-dropdown-el dropdown-el" data-current={current} data-prev={prev}>
      <div data-prevent-distortion>
        <div className="dropdown-section">
          <ul className="products-section">
            <li>
                <Link className="heading" to="/getting-started"><h3 className="heading">Getting Started</h3></Link>
            </li>
            <li>
                <Link className="heading" to="/getting-help"><h3 className="heading">Getting Help</h3></Link>
            </li>
            <li>
              <div>
                <Link className="heading" to="/user-guide"><h3 className="heading">User Guide</h3></Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { ProductsDropdown, DevelopersDropdown, CompanyDropdown };
