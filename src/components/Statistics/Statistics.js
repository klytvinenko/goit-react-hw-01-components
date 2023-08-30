import PropTypes from 'prop-types';

import { SectionStatistic } from "./Statistics.styled";
import { SectionTitle } from "./Statistics.styled";
import { SectionList } from "./Statistics.styled";
import { SectionItem } from "./Statistics.styled";
import { StatisticLabel } from "./Statistics.styled";



export const Statistics = ({data, title}) => {
    return (
        <SectionStatistic>
            {title && <SectionTitle> {title}</SectionTitle>}


            <SectionList>
                {data.map(statistic => (
                    <SectionItem key={statistic.id}>
                        <StatisticLabel>{statistic.label}</StatisticLabel>
                        <span> { statistic.percentage} %</span>
                    </SectionItem>
                ))}
            </SectionList>
        </SectionStatistic>
    )
};


Statistics.propTypes = {
    data : PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
    title: PropTypes.string
  };