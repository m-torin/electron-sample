import { MantineColor } from '@mantine/core';

export type CompositeChartCurveType =
  | 'monotone'
  | 'linear'
  | 'step'
  | 'stepBefore'
  | 'stepAfter';

/**
 * Interface for a series configuration in the composite chart.
 */
export interface CompositeChartSeries {
  name: string;
  type: 'bar' | 'line' | 'area';
  color: MantineColor | string;
  category: string;
  default: boolean;
  datapoint: string;
  normalize?: boolean;
}

export const seriesConfig: CompositeChartSeries[] = [
  // Population Metrics
  {
    name: 'Total Population',
    type: 'bar',
    color: 'gray.4',
    category: 'Population Metrics',
    default: true,
    datapoint: 'totalPopulation',
    normalize: true,
  },
  {
    name: 'Population Growth Rate (%)',
    type: 'line',
    color: 'blue.6',
    category: 'Population Metrics',
    default: true,
    datapoint: 'populationGrowthRate',
  },
  {
    name: 'Urban Population (%)',
    type: 'area',
    color: 'blue.5',
    category: 'Population Metrics',
    default: false,
    datapoint: 'urbanPopulation',
  },
  {
    name: 'Rural Population (%)',
    type: 'area',
    color: 'blue.4',
    category: 'Population Metrics',
    default: false,
    datapoint: 'ruralPopulation',
  },
  {
    name: 'Median Age',
    type: 'line',
    color: 'blue.3',
    category: 'Population Metrics',
    default: false,
    datapoint: 'medianAge',
  },
  {
    name: 'Dependency Ratio',
    type: 'line',
    color: 'blue.2',
    category: 'Population Metrics',
    default: false,
    datapoint: 'dependencyRatio',
  },
  // Health Metrics
  {
    name: 'Life Expectancy (Years)',
    type: 'line',
    color: 'yellow.7',
    category: 'Health Metrics',
    default: false,
    datapoint: 'lifeExpectancy',
  },
  {
    name: 'Fertility Rate',
    type: 'line',
    color: 'yellow.6',
    category: 'Health Metrics',
    default: false,
    datapoint: 'fertilityRate',
  },
  {
    name: 'Healthcare Access (%)',
    type: 'area',
    color: 'yellow.5',
    category: 'Health Metrics',
    default: false,
    datapoint: 'healthcareAccess',
  },
  // Economic Metrics
  {
    name: 'GDP per Capita (USD)',
    type: 'bar',
    color: 'lime.7',
    category: 'Economic Metrics',
    default: false,
    datapoint: 'gdpPerCapita',
    normalize: true,
  },
  {
    name: 'Migration Rate',
    type: 'bar',
    color: 'lime.6',
    category: 'Economic Metrics',
    default: false,
    datapoint: 'migrationRate',
  },
  {
    name: 'Employment Rate (%)',
    type: 'line',
    color: 'lime.5',
    category: 'Economic Metrics',
    default: false,
    datapoint: 'employmentRate',
  },
  // Education Metrics
  {
    name: 'Literacy Rate (%)',
    type: 'line',
    color: 'grape.7',
    category: 'Education Metrics',
    default: false,
    datapoint: 'literacyRate',
  },
  {
    name: 'Education Enrollment Rate (%)',
    type: 'line',
    color: 'grape.6',
    category: 'Education Metrics',
    default: false,
    datapoint: 'educationEnrollmentRate',
  },
];
