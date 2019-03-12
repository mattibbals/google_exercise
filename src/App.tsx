import * as React from 'react';
import { MultiLineChart } from './components/charts/multilinechart/component'
import { Header } from './components/header/page';
import { Table } from './components/table/component';



const App: React.StatelessComponent = () => { 

  const base_URL = '//storage.googleapis.com/gweb-dat-coding-challenge-data-sources/';
  const data_files = [
    'us_house_price_idx.json',
    'global_co2_emissions_from_fossil_fuels.json',
    'us_employment_and_unemployment_rates.json',
    'corruptions_perceptions_index.json',
    'global_historical_population.json',
    'global_temp_time_series_annual.json',
    'global_temp_time_series_monthly.json',
    'pharmaceutical_drug_spending_by_counties.json'
  ];
  const data_sources = [
    {
      data_file: 'us_house_price_idx.json',
      legend: 'US House Price Index',
      date_format: '%Y-%m-%d'
    },
    {
      data_file: 'global_co2_emissions_from_fossil_fuels.json',
      legend: 'Global CO2 Emissions from Fossil Fuel',
      date_format: '%Y'
    }
  ];
  const report_idx = 0;


  return (
    <div>
      <Header title={data_sources[report_idx].legend} />
      <MultiLineChart uriPath={ base_URL + data_sources[report_idx].data_file } dateFormat={ data_sources[report_idx].date_format } height="800" legendAxisY={ data_sources[report_idx].legend }/>
      <br/>
      <Table uriPath={ base_URL + data_sources[report_idx].data_file } />
    </div>
  );
}

export default App;