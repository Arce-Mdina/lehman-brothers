import React, { useState, useEffect } from 'react'

import BarChart from '../components/BarChart'
import PieChart from '../components/PieChart'
import LineChart from '../components/LineChart'

import {
  performance,
  assets,
  leverageRatio,
  liquidityRatio,
  MBS,
  defaultRates,
  marketShare,
  mbsShare,
  leverageComparison,
  liquidityComparison,
  assetComparison,
  performanceComparison,
  defaultRatesComparison,
  stockPrice,
  stockPriceComparison,
  unemploymentRates,
  capitalRequirements,
  governmentBailouts,
  housesBuilt,
  debtEquityRatio,
  debtEquityRatioComparison,
  debt,
  debtComparison,
  investors,
  investorsComparison,
  liabilities,
} from './rawData'




const Data = () => {

  // Viewport State
  const [screenMessage, setScreenMessage] = useState(false)

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth <= 800) {
        setScreenMessage(true);
      } else {
        setScreenMessage(false);
      }
    };

    // Initial check
    checkWindowSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkWindowSize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, [])
  

  // Chart States
  const [isOpenOne, setIsOpenOne] = useState(false)

  const toggleChartOne = () => {
    setIsOpenOne(!isOpenOne);
  }

  const [isOpenTwo, setIsOpenTwo] = useState(false)

  const toggleChartTwo = () => {
    setIsOpenTwo(!isOpenTwo);
  }

  const [isOpenThree, setIsOpenThree] = useState(false)

  const toggleChartThree = () => {
    setIsOpenThree(!isOpenThree);
  }

  const [isOpenFour, setIsOpenFour] = useState(false)

  const toggleChartFour = () => {
    setIsOpenFour(!isOpenFour);
  }

  // Data States
  const [performanceData, setPerformanceData] = useState(
    {
      labels: performance.map((data) => data.year),
      datasets: [
        {
          label: "Lehman Brothers' Profit 1998-2008",
          data: performance.map((data) => data.profit),
        }
      ],
    }
  )

  const [assetsData, setAssetsData] = useState(
    {
      labels: assets.map((data) => data.year),
      datasets: [
        {
          label: "Lehman Brothers' Assets' Value (1998-2008)",
          data: assets.map((data) => data.value),
        }
      ],
    }
  )

  const [debtData, setDebtData] = useState(
    {
      labels: debt.map((data) => data.year),
      datasets: [
        {
          label: "Lehman Brothers' Debt (1998-2008)",
          data: debt.map((data) => data.value),
        }
      ],
    }
  )

  const [liabilitiesData, setLiabilitiesData] = useState(
    {
      labels: liabilities.map((data) => data.year),
      datasets: [
        {
          label: "Lehman Brothers' Liabilities Including Debt (1998-2008)",
          data: liabilities.map((data) => data.valueWithDebt),
        },
        {
          label: "Lehman Brothers' Liabilities Excluding Debt (1998-2008)",
          data: liabilities.map((data) => data.valueWithoutDebt),
        }
      ],
    }
  )

  const [liquidityData, setLiquidityData] = useState(
    {
      labels: liquidityRatio.map((data) => data.year),
      datasets: [
        {
          label: "Lehman Brothers' Liquidity (1998-2008)",
          data: liquidityRatio.map((data) => data.ratio),
        },
      ],
    }
  )

  const [stockPriceData, setStockPriceData] = useState(
    {
      labels: stockPrice.map((data) => data.year),
      datasets: [
        {
          label: "Lehman Brothers' Stock Price (1998-2008)",
          data: stockPrice.map((data) => data.price),
        },
      ],
    }
  )

  const [stockPriceComparisonData, setStockPriceComparisonData] = useState(
    {
      labels: stockPriceComparison.map((data) => data.year),
      datasets: [
        {
          label: "Lehman's Stock Price (1998-2008)",
          data: stockPriceComparison.map((data) => data.lehmanBrothersPrice),
        },
        {
          label: "Goldman Sachs' Stock Price (1999-2008)",
          data: stockPriceComparison.map((data) => data.goldmanSachsPrice),
        },
        {
          label: "Morgan Stanley's Stock Price (1998-2008)",
          data: stockPriceComparison.map((data) => data.morganStanleyPrice),
        },
        // {
        //   label: "AIG's Stock Price (1998-2008)",
        //   data: stockPriceComparison.map((data) => data.aigPrice),
        // },
        {
          label: "Bear Stearns' Stock Price (1998-2008)",
          data: stockPriceComparison.map((data) => data.bearStearnsPrice),
        },
        {
          label: "Citigroup's Stock Price (1998-2008)",
          data: stockPriceComparison.map((data) => data.citigroupPrice),
        },
      ],
    }
  )

  const [leverageRatioData, setLeverageRatioData] = useState(
    {
      labels: leverageRatio.map((data) => data.year),
      datasets: [
        {
          label: "Lehman Brothers' Leverage Ratio (1998-2008)",
          data: leverageRatio.map((data) => data.ratio),
        },
      ],
    }
  )

  return (
    <>

      <br></br>
      <h1>Statistics of Lehman</h1>
      {screenMessage && <p style={{ backgroundColor: "yellow" }}>For a better view of the graphs, a switch to a computer is recommended</p>}

      <div className="accordions">
        <div id='performance' className="stats visit-card">
          <h2>Lehman's Profit (1998-2008)</h2>
          <button onClick={toggleChartTwo}>
            {isOpenTwo ? 'Switch to Line Chart': 'Switch to Bar Chart'}
          </button>
          <br></br>
          {isOpenTwo ? <BarChart chartData={performanceData}/> : <LineChart chartData={performanceData}/>}
        </div>


        <div id='assets' className="stats visit-card">
          <h2>Lehman's Assets Value (1998-2008)</h2>
          <BarChart chartData={assetsData}/>
        </div>


        <div id='debt' className="stats visit-card">
          <h2>Lehman's Debt Value (1998-2008)</h2>
          <BarChart chartData={debtData}/>
        </div>

        <div id='liabilities' className="stats visit-card">
          <h2>Lehman's Liabilities (1998-2008)</h2>
          <button onClick={toggleChartOne}>
            {isOpenOne ? 'Switch to Bar Chart': 'Switch to Line Chart'}
          </button>
          <br></br>
          {isOpenOne ? <LineChart chartData={liabilitiesData}/> : <BarChart chartData={liabilitiesData}/>}
        </div>


        <div id="liquidity" className="stats visit-card">
          <h2>Lehman's Liquidity (1998-2008)</h2>
          <LineChart chartData={liquidityData}/>
        </div>

        <div id="leverage" className="stats visit-card">
          <h2>Lehman's Leverage Ratio (1998-2008)</h2>
          <button onClick={toggleChartFour}>Switch to {isOpenFour ? "Line" : "Bar"} Chart</button>
          <br></br>
          {isOpenFour ? <BarChart chartData={leverageRatioData}/> : <LineChart chartData={leverageRatioData}/>}
        </div>

        <div id="stockPrice" className="stats visit-card">
          <h2>{isOpenThree ? "Lehman's Stock Price - End of each year (1998-2008)": "Stock Price Comparisons - End of each year (1998-2008)"}</h2>
          <button onClick={toggleChartThree}>
            {isOpenThree ? "Compare Other Stocks" : "Only Lehman Brother's Stock"}
          </button>
          <br></br>
          {isOpenThree ? <LineChart chartData={stockPriceData}/> : <LineChart chartData={stockPriceComparisonData}/>}
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
    </>
  )
}

export default Data