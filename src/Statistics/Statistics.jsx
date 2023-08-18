import PropTypes from 'prop-types';
import { Item, SpanLabel, SpanPercentagel, StatList, StatisticList, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {  
   return (
  <StatisticList className="statistics">
  <Title className="title">{title}</Title>

    <StatList className="stat-list">
        {stats.map(stat => (
        <Item className="item" key={stat.id}>
      <SpanLabel className="label">{stat.label}</SpanLabel>
      <SpanPercentagel className="percentage"> { stat.percentage}%</SpanPercentagel>
    </Item>
    ))}
    </StatList>
  </StatisticList>
    )   
    }
    
    Statistics.propTypes = {
        title: PropTypes.string.isRequired,
        stats: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
          }),
        ),
      };
   