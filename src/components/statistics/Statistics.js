import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics(props) {
  const { label, percentage } = props;

  return (
    <div>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </div>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
