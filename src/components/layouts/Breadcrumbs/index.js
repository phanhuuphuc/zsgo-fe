import React from "react";
import _ from "lodash";
import { Link } from 'react-router-dom'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { useLocation } from 'react-router-dom';
import './Breadcrumbs.css'
const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  const location = useLocation();
  return (
    <section className="breadcrumb-area help">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Help</h2>
            <ul className="breadcrumb-list">
              <nav>
                {breadcrumbs.map(({key, match, breadcrumb }) => (
                  <Link 
                  className={match.pathname === location.pathname ? "breadcrumb-active" : "breadcrumb-not-active"}
                  key={breadcrumb.props.children} 
                  to={key}>
                    {breadcrumb} / 
                  </Link>
                ))}
              </nav>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;
