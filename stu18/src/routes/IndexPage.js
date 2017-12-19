import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

const IndexPage = ({count,dispatch}) => {
  return (
    <div className={styles.normal}>
      <div className={styles.max}>Max Record: {count.max}</div>
      <div className={styles.min}>Min Record: {count.min}</div>
      <div className={styles.current}>{count.current}</div>
      <div className={styles.button}>
        <button onClick={() => {dispatch({type:'count/add'})}}>+</button>
        <button onClick={() => {dispatch({type:'count/minus'})}}>-</button>
      </div>
    </div>
  )
}

IndexPage.propTypes = {
};

function mapStateToProps(state){
  return { count: state.count }
}

export default connect(mapStateToProps)(IndexPage);
