import PropTypes from 'prop-types';
import Statistics from './Statistics';
import s from './Statistics.module.css';

const randomColor = () => {
  return `#${Math.random().toString(16).substr(-6)}`;
};

function StatisticsList({ stats, title }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.itemContainer}>
        {stats.map(function ({ id, label, percentage }) {
          return (
            <li
              className={s.item}
              style={{ backgroundColor: randomColor() }}
              key={id}
            >
              <Statistics label={label} percentage={percentage} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticsList;
