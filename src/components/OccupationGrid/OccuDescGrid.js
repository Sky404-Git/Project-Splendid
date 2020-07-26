import React from 'react';
import PropTypes from 'prop-types';
import design from './Occupationgrid.module.css';
import OccuDesc from '../OccupationCard/OccuDesc';

const OccuDescGrid = ({ items, inputValue }) => {
  const invalidSearch = 'Sorry! Keywords NOT FOUND';
  return (
    <ul className={design.occupation_grid}>
      {items.filter(item =>
        (item.occ_title.toLowerCase().includes(inputValue.toLowerCase())
        ||item.occ_crn.toLowerCase().includes(inputValue.toLowerCase())
        ||item.occ_desc.toLowerCase().includes(inputValue.toLowerCase())
        ||item.occ_core.toLowerCase().includes(inputValue.toLowerCase())),
      ).length > 0 ? (
        items
          .filter(item =>
            (item.occ_title.toLowerCase().includes(inputValue.toLowerCase())
            ||item.occ_crn.toLowerCase().includes(inputValue.toLowerCase())
            ||item.occ_desc.toLowerCase().includes(inputValue.toLowerCase())
            ||item.occ_core.toLowerCase().includes(inputValue.toLowerCase())),
          )
          .map(item => (
            <OccuDesc
              key={item.occ_code}
              occ_title={item.occ_title}
              occ_desc={item.occ_desc}
              occ_crn={item.occ_crn}
              occ_core={item.occ_core}
            />
          ))
      ) : (
        <li style={{color:"orange", marginLeft:"38%"}}>{invalidSearch}</li>
      )}
    </ul>
  );
};

OccuDesc.propTypes = {
  inputValue: PropTypes.string,
  invalidSearch: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      occ_code: PropTypes.string,
      occ_desc: PropTypes.string,
      occ_title: PropTypes.string,
      occ_crn: PropTypes.string,
      occ_core: PropTypes.string,
    }),
  ),
};
export default OccuDescGrid;