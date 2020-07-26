import React from 'react';
import PropTypes from 'prop-types';
import design from './OccupationCard.module.css';
import { connect } from 'react-redux';

const Prediction = ({role_name,recommended_title,pred_title_1,pred_title_2,pred_title_3,pred_title_4,pred_title_5,pred_title_6,pred_title_7,pred_title_8,pred_title_9,pred_title_10, ...props}) => {
  console.log(props.rows[0]);
  console.log(props.rows[1]);
  
  return (
    <li className={design.occupation_card} key={role_name}>
      <div className={design.content}>
        <h2 className={design.role_name}>{role_name}</h2>
        <select name="title">
        <option value={pred_title_1} className={design.descr}>1. {pred_title_1}</option>
        <option value={pred_title_2} className={design.descr}>2. {pred_title_2}</option>
        <option value={pred_title_3} className={design.descr}>3. {pred_title_3}</option>
        <option value={pred_title_4} className={design.descr}>4. {pred_title_4}</option>
        <option value={pred_title_5} className={design.descr}>5. {pred_title_5}</option>
        <option value={pred_title_6} className={design.descr}>6. {pred_title_6}</option>
        <option value={pred_title_7} className={design.descr}>7. {pred_title_7}</option>
        <option value={pred_title_8} className={design.descr}>8. {pred_title_8}</option>
        <option value={pred_title_9} className={design.descr}>9. {pred_title_9}</option>
        <option value={pred_title_10} className={design.descr}>10. {pred_title_10}</option>
        </select>

      </div>
    </li>
    
    
  );
  
};


Prediction.propTypes = {
  
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
 
};

const mapStateToProps = (state) => {
  return {
    rows: state.data ? state.data.rows : [],
    cols: state.data ? state.data.cols : [],
  };
};

export default connect(mapStateToProps, null)(Prediction);
