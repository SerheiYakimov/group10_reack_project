import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
  VictoryGroup,
} from 'victory';

import Media from 'react-media';
import s from './Charts.module.css';

const Charts = ({ data }) => {
  return data.length === 0 ? (
    <div className={`${s.charts} ${s.emptyChart}`}>
      <p>Здесь пока ничего нет...</p>
    </div>
  ) : (
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
                      fontSize: 12,
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
                    dx={0}
                    dy={-12}
                    textAnchor="start"
                    verticalAnchor="end"
                  />
                }
                maxDomain={10}
                cornerRadius={10}
                sortKey={datum => datum.totalSum}
                labels={({ datum }) => `${datum.totalSum} грн`}
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
                    fontSize: 12,
                    fill: '#52555F',
                    fontFamily: 'Roboto, sans-serif',
                    lineHeight: 14,
                  },
                }}
                data={data}
                x="subcategory"
                y="totalSum"
              />
            </VictoryChart>
          </VictoryGroup>
        )}
      />
      <Media
        query="(min-width: 768px)"
        render={() => (
          <VictoryGroup height={250}>
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
                sortKey={datum => datum.totalSum}
                labels={({ datum }) => `${datum.totalSum} грн`}
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
                x="subcategory"
                y="totalSum"
              />
            </VictoryChart>
          </VictoryGroup>
        )}
      />
    </div>
  );
};

export default Charts;
