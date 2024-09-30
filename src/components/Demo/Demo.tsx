'use client';

import React, { FC, useMemo, useState } from 'react';
import CompositeChart from '../CompositeChart/CompositeChart';
import { data } from '../../data/data';
import { seriesConfig, CompositeChartSeries } from '../../data/seriesConfig';
import {
  Grid,
  Paper,
  Switch,
  Tabs,
  Stack,
  Box,
  Text,
  useMantineTheme,
  rem,
  Container,
  SimpleGrid,
} from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useListState } from '@mantine/hooks';
import styles from './Demo.module.scss';

const Demo: FC = () => {
  const theme = useMantineTheme();

  // Initialize selectedSeries with the datapoints of seriesConfig that have default: true
  const initialSelected = useMemo(
    () =>
      seriesConfig
        .filter((series) => series.default)
        .map((series) => series.datapoint),
    [],
  );

  // Use Mantine's useListState to manage the list of selected series
  const [selectedSeries, handlers] = useListState<string>(initialSelected);

  // Handler to toggle series visibility
  const handleSwitchChange = (datapoint: string, checked: boolean) => {
    if (checked) {
      if (!selectedSeries.includes(datapoint)) {
        handlers.append(datapoint);
      }
    } else {
      const index = selectedSeries.indexOf(datapoint);
      if (index !== -1) handlers.remove(index);
    }
  };

  // Filter the series based on selectedSeries state
  const filteredSeries: CompositeChartSeries[] = useMemo(
    () =>
      seriesConfig.filter((series) =>
        selectedSeries.includes(series.datapoint),
      ),
    [selectedSeries],
  );

  // Organize seriesConfig into categories
  const categories = useMemo(() => {
    return seriesConfig.reduce<Record<string, CompositeChartSeries[]>>(
      (acc, series) => {
        if (!acc[series.category]) {
          acc[series.category] = [];
        }
        acc[series.category].push(series);
        return acc;
      },
      {},
    );
  }, []);

  // Define the unit for the y-axis
  const unit = '%'; // Update as needed

  const [tabValue, setTabValue] = useState<string | null>('chart');

  return (
    <Container size="xl" className={styles.demoContainer}>
      <Text fw={500} size="lg" my="md" className={styles.chartTitle}>
        Torin's DAPPS Interactive Chart Demo - Mock Data
      </Text>

      <Tabs value={tabValue} onChange={setTabValue} variant="pills">
        <Tabs.List mb={rem(25)}>
          <Tabs.Tab value="chart" className={styles.tab}>
            Chart
          </Tabs.Tab>
          <Tabs.Tab value="settings" className={styles.tab}>
            Settings
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="chart">
          <Grid gutter="lg">
            <Grid.Col span={8}>
              <CompositeChart
                h={500}
                data={data}
                dataKey="date"
                dotProps={{
                  r: 4,
                  strokeWidth: 1,
                  stroke: theme.colors.gray[0],
                }}
                activeDotProps={{
                  r: 6,
                  strokeWidth: 1,
                  fill: theme.colors.gray[0],
                }}
                maxBarWidth={30}
                seriesNames={filteredSeries.map((series) => series.name)}
                gridColor={theme.colors.gray[5]}
                textColor={theme.colors.gray[7]}
                withLegend
                withTooltip
                withXAxis
                withYAxis
                xAxisLabel="Year"
                yAxisLabel="Metrics"
                valueFormatter={(value: number) =>
                  `${parseFloat(value.toFixed(2)).toLocaleString()}%`
                }
                unit={unit}
              />
              <Text
                size="sm"
                c="dimmed"
                pl={rem(5)}
                pt={rem(3)}
                className={styles.controlsTitle}
              >
                <b>The Democratic Republic of the Congo</b>. Sources: World
                Bank, UN demographic data, WHO, UN Migration Reports, ILO,
                UNESCO, World Population Prospects, IMF (ML-compiled)
              </Text>
            </Grid.Col>

            <Grid.Col span={4}>
              <Paper shadow="0" p={rem(3)} radius="sm" className={styles.paper}>
                <Text
                  fw={500}
                  size="md"
                  pl={rem(5)}
                  pt={rem(3)}
                  className={styles.controlsTitle}
                >
                  Code/Data
                </Text>

                <div id="code-data-portal" />
              </Paper>
            </Grid.Col>
          </Grid>
        </Tabs.Panel>

        <Tabs.Panel value="settings">
          <SimpleGrid cols={4}>
            {Object.entries(categories).map(([category, seriesList]) => (
              <Paper key={category} p="md" withBorder className={styles.paper}>
                <Text
                  fw={500}
                  size="lg"
                  mb="sm"
                  className={styles.controlsTitle}
                >
                  {category.replace(' Metrics', '')}
                </Text>
                <Stack gap="xs">
                  {seriesList.map((series) => (
                    <Switch
                      key={series.datapoint}
                      checked={selectedSeries.includes(series.datapoint)}
                      onChange={(event) =>
                        handleSwitchChange(
                          series.datapoint,
                          event.currentTarget.checked,
                        )
                      }
                      color="teal"
                      size="md"
                      label={series.name}
                      aria-label={`Toggle visibility for ${series.name}`}
                      thumbIcon={
                        selectedSeries.includes(series.datapoint) ? (
                          <IconCheck
                            size={12}
                            color={theme.colors.teal[6]}
                            stroke={3}
                          />
                        ) : (
                          <IconX
                            size={12}
                            color={theme.colors.red[6]}
                            stroke={3}
                          />
                        )
                      }
                      className={styles.switch}
                    />
                  ))}
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default Demo;
