import React from 'react';
import PropTypes from 'prop-types';
import design from './Occupationgrid.module.css';
import Prediction from '../OccupationCard/Prediction';
import { connect } from 'react-redux';
import Occupations from '../OccupationCard/occupations_list.json';
import OccuDescGrid from './OccuDescGrid'

const PredictionGrid = ({inputValue, ...props }) => {
  // console.log(props.rows);
  var items = props.rows.slice(1);
  // console.log(items[0]);

  const handlePredictionChange = (itemId, value) => {
    // console.log(item[0], item[item.length - 1].newPrediction)
    items = items.map(item => {
      if (item[0] === itemId) {
        const occupation = Occupations.filter(occ => occ.occ_title === value)[0];
        return item.slice(0, 27).push(occupation.occ_code, occupation.occ_title, occupation.occ_desc);
        console.log(item)
      } else {
        return item
      }
      }
    )
  }

  
  console.log(items);
  for(let a=0;a<items.length;a++){
  if(item[0]===occupation.occ_title)
  {
      "role_name": items[0],
      "role_description": items[1],
      "role_description": items[2],
      "role_family": items[3],
      "org_level_1": items[4],
      "org_level_2": items[5],
      "org_level_3": items[6],
      "pred_title_1": items[7],
      "pred_title_2": item[8],
      "pred_title_3": item[9],
      "pred_title_4": item[10],
      "pred_title_5": item[11],
      "pred_title_6": item[12],
      "pred_title_7": item[13],
      "pred_title_8": item[14],
      "pred_title_9": item[15],
      "pred_title_10": item[16],
      "compo_bracket": item[17],
      "total_fte": item[18],
      "has_reports_ratio": item[19],
      "has_mgr_reports_ratio": item[20],
      "confidence": item[21],
      "Review Required": item[22],
      "Predicted Occ Name": occupation.occ_title,
      "Selected Occ Code": occupation.occ_code,
      "Selected Occ Name": occupation.occ_title,
      "Occ Description": occupation.occ_desc     
    }
  }

  

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
              handlePredictionChange={handlePredictionChange}
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
      org_title_1: PropTypes.string,
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
