'use client';

import React, { FC, useMemo } from 'react';
import {
  CompositeChart as MantineCompositeChart,
  CompositeChartProps as MantineCompositeChartProps,
} from '@mantine/charts';
import { seriesConfig } from '../../data/seriesConfig';
import { data as defaultData, DataPoint } from '../../data/data';
import {
  alpha,
  Paper,
  Code,
  Portal,
  Text,
  ScrollArea,
  Box,
} from '@mantine/core';
import styles from './CompositeChart.module.scss';

interface ExtendedCompositeChartProps
  extends Omit<MantineCompositeChartProps, 'data' | 'series'> {
  seriesNames: string[];
  data?: DataPoint[];
}

/**
 * Props for ChartTooltip component.
 */
interface ChartTooltipProps {
  label: string;
  payload: Record<string, any>[] | undefined;
}

/**
 * ChartTooltip component to render custom tooltip.
 */
const ChartTooltip: FC<ChartTooltipProps> = ({ label, payload }) => {
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="md" radius="md">
      <Text fw={500} mb={5}>
        {label}
      </Text>
      {payload.map((item) => (
        <Text key={item.name} c={alpha(item.color, 1)} size="sm">
          {item.name}:{' '}
          {parseFloat(item.value).toLocaleString('en-US', {
            maximumFractionDigits: 2,
          })}
          %
        </Text>
      ))}
    </Paper>
  );
};

/**
 * CompositeChart component to display a custom composite chart.
 */
const CompositeChart: FC<ExtendedCompositeChartProps> = ({
  h,
  dataKey,
  activeDotProps,
  dotProps,
  maxBarWidth = 30,
  connectNulls = true,
  curveType = 'monotone',
  gridColor,
  textColor,
  withLegend = false,
  withTooltip = true,
  withXAxis = true,
  withYAxis = true,
  withRightYAxis = false,
  xAxisLabel,
  yAxisLabel,
  rightYAxisLabel,
  unit,
  valueFormatter,
  data = defaultData,
  seriesNames = [],
  ...restProps
}) => {
  const selectedSeriesConfig = useMemo(
    () => seriesConfig.filter((series) => seriesNames.includes(series.name)),
    [seriesNames],
  );

  if (!selectedSeriesConfig.length) {
    return (
      <div>Series configuration not found or series names are missing.</div>
    );
  }

  const normalizeData = (data: DataPoint[], key: keyof DataPoint) => {
    const max = Math.max(...data.map((item) => item[key] as number));
    return data.map((item) => ({
      ...item,
      [key]: ((item[key] as number) / max) * 100,
    }));
  };

  const transformedData = useMemo(
    () =>
      data.map((item) => {
        let currentItem = { [dataKey]: item[dataKey as keyof DataPoint] };
        selectedSeriesConfig.forEach((series) => {
          currentItem = {
            ...currentItem,
            [series.name]: series.normalize
              ? ((item[series.datapoint as keyof DataPoint] as number) /
                  Math.max(
                    ...data.map(
                      (d) => d[series.datapoint as keyof DataPoint] as number,
                    ),
                  )) *
                100
              : item[series.datapoint as keyof DataPoint],
          };
        });
        return currentItem;
      }),
    [data, selectedSeriesConfig, dataKey],
  );

  return (
    <Box className={styles.chartContainer}>
      <Paper withBorder p="xs">
        <MantineCompositeChart
          h={h}
          data={transformedData}
          dataKey={dataKey}
          {...restProps}
          series={selectedSeriesConfig.map((series) => ({
            name: series.name,
            type: series.type,
            color: series.color,
          }))}
          activeDotProps={activeDotProps}
          dotProps={dotProps}
          maxBarWidth={maxBarWidth}
          connectNulls={connectNulls}
          curveType={curveType}
          gridProps={{ stroke: gridColor }}
          xAxisProps={{ tick: { fill: textColor } }}
          yAxisProps={{ tick: { fill: textColor } }}
          withLegend={withLegend}
          withTooltip={withTooltip}
          withXAxis={withXAxis}
          withYAxis={withYAxis}
          withRightYAxis={withRightYAxis}
          xAxisLabel={xAxisLabel}
          yAxisLabel={yAxisLabel}
          rightYAxisLabel={rightYAxisLabel}
          unit={unit}
          valueFormatter={valueFormatter}
          tooltipProps={{
            content: ({ label, payload }) => (
              <ChartTooltip label={label} payload={payload} />
            ),
          }}
        />
      </Paper>

      <Portal target="#code-data-portal">
        <ScrollArea h={550}>
          <Code block mt="md">
            data: {JSON.stringify(transformedData, null, 2)}
          </Code>
        </ScrollArea>
      </Portal>
    </Box>
  );
};

export default CompositeChart;
