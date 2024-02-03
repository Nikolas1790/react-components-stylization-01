import PropTypes from 'prop-types';
import { Item, SpanLabel, SpanPercentagel, StatList, StatisticList, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {  
   return (
  <StatisticList >
  {{title} ? <Title >{title}</Title>: <Title ></Title>}

    <StatList className="stat-list">
      {stats.map(stat => (
        <Item  key={stat.id}>
          <SpanLabel >{stat.label}</SpanLabel>
          <SpanPercentagel > { stat.percentage}%</SpanPercentagel>
        </Item>
      ))}
    </StatList>
  </StatisticList>
    )   
    }
    
    Statistics.propTypes = {
        title: PropTypes.string,
        stats: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
          }).isRequired,
        ).isRequired,
      };
   