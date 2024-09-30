/**
 * @fileoverview
 * This data file contains population growth metrics for third-world countries and the United Nations.
 * The metrics include various demographic, economic, health, and education indicators
 * that help analyze and forecast population trends and their socio-economic impacts.
 */

/**
 * Interface for a data point in the population growth metrics dataset.
 */
export interface DataPoint {
  date: string;
  totalPopulation: number;
  populationGrowthRate: number;
  urbanPopulation: number;
  ruralPopulation: number;
  fertilityRate: number;
  lifeExpectancy: number;
  medianAge: number;
  dependencyRatio: number;
  gdpPerCapita: number;
  literacyRate: number;
  migrationRate: number;
  employmentRate: number;
  educationEnrollmentRate: number;
  healthcareAccess: number;
}

export const data: DataPoint[] = [
  {
    date: '2000',
    totalPopulation: 50507442,
    populationGrowthRate: 2.6,
    urbanPopulation: 29,
    ruralPopulation: 71,
    fertilityRate: 6.3,
    lifeExpectancy: 49,
    medianAge: 16.1,
    dependencyRatio: 98,
    gdpPerCapita: 208,
    literacyRate: 64,
    migrationRate: -0.5,
    employmentRate: 60.2,
    educationEnrollmentRate: 55,
    healthcareAccess: 35,
  },
  {
    date: '2001',
    totalPopulation: 51810657,
    populationGrowthRate: 2.6,
    urbanPopulation: 29.5,
    ruralPopulation: 70.5,
    fertilityRate: 6.2,
    lifeExpectancy: 49,
    medianAge: 16.2,
    dependencyRatio: 98,
    gdpPerCapita: 211,
    literacyRate: 64,
    migrationRate: -0.5,
    employmentRate: 60.3,
    educationEnrollmentRate: 57,
    healthcareAccess: 35,
  },
  {
    date: '2002',
    totalPopulation: 53146732,
    populationGrowthRate: 2.6,
    urbanPopulation: 30,
    ruralPopulation: 70,
    fertilityRate: 6.1,
    lifeExpectancy: 49,
    medianAge: 16.3,
    dependencyRatio: 98,
    gdpPerCapita: 213,
    literacyRate: 65,
    migrationRate: -0.5,
    employmentRate: 60.4,
    educationEnrollmentRate: 59,
    healthcareAccess: 36,
  },
  {
    date: '2003',
    totalPopulation: 54494666,
    populationGrowthRate: 2.6,
    urbanPopulation: 30.5,
    ruralPopulation: 69.5,
    fertilityRate: 6.1,
    lifeExpectancy: 49,
    medianAge: 16.4,
    dependencyRatio: 98,
    gdpPerCapita: 215,
    literacyRate: 65,
    migrationRate: -0.5,
    employmentRate: 60.4,
    educationEnrollmentRate: 62,
    healthcareAccess: 37,
  },
  {
    date: '2004',
    totalPopulation: 55854306,
    populationGrowthRate: 2.6,
    urbanPopulation: 31,
    ruralPopulation: 69,
    fertilityRate: 6.1,
    lifeExpectancy: 49,
    medianAge: 16.5,
    dependencyRatio: 98,
    gdpPerCapita: 217,
    literacyRate: 66,
    migrationRate: -0.5,
    employmentRate: 60.5,
    educationEnrollmentRate: 64,
    healthcareAccess: 38,
  },
  {
    date: '2005',
    totalPopulation: 58775724,
    populationGrowthRate: 3.08,
    urbanPopulation: 31.5,
    ruralPopulation: 68.5,
    fertilityRate: 6.0,
    lifeExpectancy: 50,
    medianAge: 16.6,
    dependencyRatio: 98,
    gdpPerCapita: 221,
    literacyRate: 66,
    migrationRate: -0.5,
    employmentRate: 60.5,
    educationEnrollmentRate: 66,
    healthcareAccess: 39,
  },
  {
    date: '2006',
    totalPopulation: 60677283,
    populationGrowthRate: 3.11,
    urbanPopulation: 32,
    ruralPopulation: 68,
    fertilityRate: 5.9,
    lifeExpectancy: 50,
    medianAge: 16.7,
    dependencyRatio: 98,
    gdpPerCapita: 225,
    literacyRate: 67,
    migrationRate: -0.5,
    employmentRate: 60.6,
    educationEnrollmentRate: 68,
    healthcareAccess: 40,
  },
  {
    date: '2007',
    totalPopulation: 62660551,
    populationGrowthRate: 3.12,
    urbanPopulation: 32.5,
    ruralPopulation: 67.5,
    fertilityRate: 5.8,
    lifeExpectancy: 51,
    medianAge: 16.8,
    dependencyRatio: 98,
    gdpPerCapita: 230,
    literacyRate: 67,
    migrationRate: -0.5,
    employmentRate: 60.7,
    educationEnrollmentRate: 69,
    healthcareAccess: 41,
  },
  {
    date: '2008',
    totalPopulation: 64610000,
    populationGrowthRate: 3.11,
    urbanPopulation: 33,
    ruralPopulation: 67,
    fertilityRate: 5.7,
    lifeExpectancy: 51,
    medianAge: 16.9,
    dependencyRatio: 98,
    gdpPerCapita: 235,
    literacyRate: 68,
    migrationRate: -0.5,
    employmentRate: 60.8,
    educationEnrollmentRate: 70,
    healthcareAccess: 42,
  },
  {
    date: '2009',
    totalPopulation: 66360000,
    populationGrowthRate: 3.08,
    urbanPopulation: 33.5,
    ruralPopulation: 66.5,
    fertilityRate: 5.6,
    lifeExpectancy: 52,
    medianAge: 17,
    dependencyRatio: 98,
    gdpPerCapita: 240,
    literacyRate: 68,
    migrationRate: -0.5,
    employmentRate: 60.9,
    educationEnrollmentRate: 71,
    healthcareAccess: 43,
  },
];
