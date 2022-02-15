import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
  VictoryGroup,
} from 'victory';

import Media from 'react-media';
import s from './Charts.module.css';

const data = [
  { quarter: 'Cвинина', earnings: 5000 },
  { quarter: 'Говядина', earnings: 6500 },
  { quarter: 'Курица', earnings: 3200 },
  { quarter: 'Рыба', earnings: 2100 },
  { quarter: 'Панини', earnings: 1200 },
  { quarter: 'Кофе', earnings: 867 },
  { quarter: 'Спагетти', earnings: 1345 },
  { quarter: 'Молоко', earnings: 400 },
  { quarter: 'Сыр', earnings: 250 },
  { quarter: 'Чай', earnings: 1147 },
];

const Charts = () => {
  return (
    <div className={s.charts}>
      <Media
        query="(max-width: 767.98px)"
        render={() => (
          <VictoryGroup height={550}>
            <VictoryChart domainPadding={10}>
              <VictoryAxis
                tickLabelComponent={
                  <VictoryLabel
                    dy={-18}
                    dx={11}
                    textAnchor="start"
                    style={{
                      fontSize: 9,
                      fill: '#52555F',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  />
                }
                orientation="left"
                invertAxis={false}
                style={{
                  axis: { stroke: 'transparent' },
                }}
              />
              <VictoryBar
                labelComponent={
                  <VictoryLabel
                    dx={-5}
                    dy={-12}
                    textAnchor="start"
                    verticalAnchor="end"
                  />
                }
                maxDomain={10}
                cornerRadius={10}
                sortKey={datum => datum.earnings}
                labels={({ datum }) => `${datum.earnings} грн`}
                horizontal={true}
                animate={{
                  duration: 0,
                  onLoad: { duration: 500 },
                }}
                style={{
                  data: {
                    fill: ({ index }) =>
                      +index % 3 === 0 ? '#FF751D' : '#FFDAC0',
                    width: 15,
                  },
                  labels: {
                    fontSize: 9,
                    fill: '#52555F',
                    fontFamily: 'Roboto, sans-serif',
                    lineHeight: 14,
                  },
                }}
                data={data}
                x="quarter"
                y="earnings"
              />
            </VictoryChart>
          </VictoryGroup>
        )}
      />
      <Media
        query="(min-width: 768px)"
        render={() => (
          <VictoryGroup>
            <VictoryChart>
              <VictoryAxis
                tickLabelComponent={
                  <VictoryLabel
                    style={{
                      fontSize: 8,
                      fill: '#52555F',
                      fontFamily: 'Roboto, sans-serif',
                    }}
                  />
                }
                orientation="bottom"
                invertAxis={true}
                style={{
                  axis: { stroke: 'transparent' },
                }}
              />
              <VictoryBar
                labelComponent={<VictoryLabel />}
                maxDomain={10}
                cornerRadius={10}
                sortKey={datum => datum.earnings}
                labels={({ datum }) => `${datum.earnings} грн`}
                horizontal={false}
                animate={{
                  duration: 0,
                  onLoad: { duration: 500 },
                }}
                style={{
                  data: {
                    fill: ({ index }) =>
                      +index % 3 === 0 ? '#FF751D' : '#FFDAC0',
                    width: 25,
                  },
                  labels: {
                    fontSize: 8,
                    fill: '#52555F',
                    fontFamily: 'Roboto, sans-serif',
                    lineHeight: 14,
                  },
                }}
                events={[
                  {
                    target: 'data',
                    eventHandlers: {
                      onMouseOver: () => {
                        return [
                          {
                            target: 'data',
                            mutation: () => ({
                              style: {
                                fill: ({ index }) =>
                                  +index % 3 === 0 ? '#FFDAC0' : '#FF751D',
                                width: 25,
                              },
                            }),
                          },
                          {
                            target: 'labels',
                            mutation: () => ({ active: true }),
                          },
                        ];
                      },
                      onMouseOut: () => {
                        return [
                          {
                            target: 'data',
                            mutation: () => {},
                          },
                          {
                            target: 'labels',
                            mutation: () => ({ active: false }),
                          },
                        ];
                      },
                    },
                  },
                ]}
                data={data}
                x="quarter"
                y="earnings"
              />
            </VictoryChart>
          </VictoryGroup>
        )}
      />
    </div>
  );
};

export default Charts;