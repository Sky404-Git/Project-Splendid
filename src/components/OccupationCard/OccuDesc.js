import React from 'react';
import PropTypes from 'prop-types';
import design from './OccupationCard.module.css';

const OccuDesc = ({ occ_code, occ_title, occ_desc, occ_crn, occ_core }) => {
  return (
    <div className="col-lg-3 col-12" key={occ_code}>
      <div className={design.content}>
        <h2 className={design.occ_title}>{occ_title}</h2>
        <p><b><i>Occupation Description: </i></b>{occ_desc}</p>
        <p><b><i>Common Role Names: </i></b>{occ_crn}</p>
        <p><b><i>Core Tasks: </i></b>{occ_core}</p>
      </div>
    </div>
  );
};

OccuDesc.propTypes = {
  occ_code: PropTypes.string,
  occ_title: PropTypes.string,
  occ_desc: PropTypes.string,
  occ_crn:PropTypes.string,
  occ_core:PropTypes.string,
};

export default OccuDesc;