import React from 'react';
import PropTypes from 'prop-types';
import design from './Occupationgrid.module.css';
import Prediction from '../OccupationCard/Prediction';
import { connect } from 'react-redux';

const PredictionGrid = ({inputValue, ...props }) => {
  // console.log(props.rows);
  const items = props.rows.slice(1);
  // console.log(items[0]);

  const invalidSearch = 'Sorry! Keywords NOT FOUND';
  return (
    <ul className={design.occupation_grid}>
      {items.filter(item =>
        (item[0].toLowerCase().includes(inputValue.toLowerCase()),
        
        item[21].toLowerCase().includes(inputValue.toLowerCase())
        ||item[1].toLowerCase().includes(inputValue.toLowerCase())),)
        .length > 0 ? (
        items
          .filter(item =>
            (item[0].toLowerCase().includes(inputValue.toLowerCase()),
            
            item[21].toLowerCase().includes(inputValue.toLowerCase())
            ||item[1].toLowerCase().includes(inputValue.toLowerCase())),
          )
          .map(item => (
            <Prediction
              key={item[0]}
              pred_title_1={item[7]}
              pred_title_2={item[8]}
              pred_title_3={item[9]}
              pred_title_4={item[10]}
              pred_title_5={item[11]}
              pred_title_6={item[12]}
              pred_title_7={item[13]}
              pred_title_8={item[14]}
              pred_title_9={item[15]}
              pred_title_10={item[16]}
              role_name={item[0]}
              recommended_title={item[1]}
              org_level_1={item[4]}
              compo_bracket={item[17]}
              total_fte={item[18]}
              confidence={item[21]}
              
            />
          ))
      ) : (
        <li style={{color:"orange", marginLeft:"38%"}}>{invalidSearch}</li>)
      }
    </ul>
  );
};

Prediction.propTypes = {
  inputValue: PropTypes.string,
  invalidSearch: PropTypes.string,
  item: PropTypes.arrayOf(
    PropTypes.shape({
      role_name: PropTypes.string,
      recommended_title: PropTypes.string,
      org_level_1: PropTypes.string,
      pred_title_1: PropTypes.string,
      pred_title_2: PropTypes.string,
      pred_title_3: PropTypes.string,
      pred_title_4: PropTypes.string,
      pred_title_5: PropTypes.string,
      pred_title_6: PropTypes.string,
      pred_title_7: PropTypes.string,
      pred_title_8: PropTypes.string,
      pred_title_9: PropTypes.string,
      pred_title_10: PropTypes.string,
      compo_bracket: PropTypes.string,
      total_fte: PropTypes.string,
      confidence: PropTypes.string,
      occupation_desc : PropTypes.string,
    }),
  ),
};

const mapStateToProps = (state) => {
  return {
    rows: state.data ? state.data.rows : [],
    cols: state.data ? state.data.cols : [],
  };
};

export default connect(mapStateToProps, null)(PredictionGrid);
