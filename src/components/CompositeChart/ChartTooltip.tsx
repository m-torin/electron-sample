import { FC } from 'react';
import { alpha, Paper, Text } from '@mantine/core';

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

export default ChartTooltip;
