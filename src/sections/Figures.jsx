import React, { useState } from 'react'
import Overlay from '../components/Overlay'

const Figures = () => {

  const [zeroOverlay, setZeroOverlay] = useState(false)

  {/* Zero */}
  const openZeroOverlay = () => {
    setZeroOverlay(true);
  }

  const closeZeroOverlay = () => {
    setZeroOverlay(false);
  }

  const [oneOverlay, setOneOverlay] = useState(false)

  {/* One */}
  const openOneOverlay = () => {
    setOneOverlay(true);
  }

  const closeOneOverlay = () => {
    setOneOverlay(false);
  }

  const [twoOverlay, setTwoOverlay] = useState(false)

  {/* Two */}
  const openTwoOverlay = () => {
    setTwoOverlay(true);
  }

  const closeTwoOverlay = () => {
    setTwoOverlay(false);
  }

  const [threeOverlay, setThreeOverlay] = useState(false)

  {/* Three */}
  const openThreeOverlay = () => {
    setThreeOverlay(true);
  }

  const closeThreeOverlay = () => {
    setThreeOverlay(false);
  }

  const [fourOverlay, setFourOverlay] = useState(false)

  {/* Four */}
  const openFourOverlay = () => {
    setFourOverlay(true);
  }

  const closeFourOverlay = () => {
    setFourOverlay(false);
  }

  const [fiveOverlay, setFiveOverlay] = useState(false)

  {/* Five */}
  const openFiveOverlay = () => {
    setFiveOverlay(true);
  }

  const closeFiveOverlay = () => {
    setFiveOverlay(false);
  }

  const [sixOverlay, setSixOverlay] = useState(false)

  {/* Six */}
  const openSixOverlay = () => {
    setSixOverlay(true);
  }

  const closeSixOverlay = () => {
    setSixOverlay(false);
  }

  const [sevenOverlay, setSevenOverlay] = useState(false)

  {/* Seven */}
  const openSevenOverlay = () => {
    setSevenOverlay(true);
  }

  const closeSevenOverlay = () => {
    setSevenOverlay(false);
  }

  const [eightOverlay, setEightOverlay] = useState(false)

  {/* Eight */}
  const openEightOverlay = () => {
    setEightOverlay(true);
  }

  const closeEightOverlay = () => {
    setEightOverlay(false);
  }

  const [nineOverlay, setNineOverlay] = useState(false)

  {/* Nine */}
  const openNineOverlay = () => {
    setNineOverlay(true);
  }

  const closeNineOverlay = () => {
    setNineOverlay(false);
  }

  const [tenOverlay, setTenOverlay] = useState(false)

  {/* Ten */}
  const openTenOverlay = () => {
    setTenOverlay(true);
  }

  const closeTenOverlay = () => {
    setTenOverlay(false);
  }

  const [elevenOverlay, setElevenOverlay] = useState(false)

  {/* Eleven */}
  const openElevenOverlay = () => {
    setElevenOverlay(true);
  }

  const closeElevenOverlay = () => {
    setElevenOverlay(false);
  }

  const [twelveOverlay, setTwelveOverlay] = useState(false)

  {/* Twelve */}
  const openTwelveOverlay = () => {
    setTwelveOverlay(true);
  }

  const closeTwelveOverlay = () => {
    setTwelveOverlay(false);
  }

  const [thirteenOverlay, setThirteenOverlay] = useState(false)

  {/* Thirteen */}
  const openThirteenOverlay = () => {
    setThirteenOverlay(true);
  }

  const closeThirteenOverlay = () => {
    setThirteenOverlay(false);
  }


  return (
    <div>
      <h1>Key Figures in Lehman History</h1>
      <h2>Internal Figures</h2>
      <div className="card-grid-double" style={{ width: "85vw" }}>
        <div className="visit-card" style={{ cursor: "pointer" }} id={0} onClick={openZeroOverlay}>
          {/* <img src="https://upload.wikimedia.org/wikipedia/en/1/15/HenryLehmann.jpg"/> */}
          Henry Lehman
        </div>
        <div className="visit-card" style={{ cursor: "pointer" }} id={1} onClick={openOneOverlay}>
          <img src=""/>
          Emanuel Lehman
        </div>
        <div className="visit-card" style={{ cursor: "pointer" }} id={2} onClick={openTwoOverlay}>
          <img src=""/>
          Mayer Lehman
        </div>
        <div className="visit-card" style={{ cursor: "pointer" }} id={3} onClick={openThreeOverlay}>
          <img src=""/>
          Robert "Bobbie" Lehman
        </div>
        <div className="visit-card" style={{ cursor: "pointer" }} id={4} onClick={openFourOverlay}>
          <img src=""/>
          Richard S. Fuld Jr.
        </div>
        <div className="visit-card" style={{ cursor: "pointer" }} id={5} onClick={openFiveOverlay}>
          <img src=""/>
          Erin Callan
        </div>
        <div className="visit-card" style={{ cursor: "pointer" }} id={6} onClick={openSixOverlay}>
          <img src=""/>
          Joseph Gregory
        </div>
        <div className="visit-card" style={{ cursor: "pointer" }} id={7} onClick={openSevenOverlay}>
          <img src=""/>
          Herbert McDade III
        </div>
      </div>
      <h2>External Figures</h2>
      <div className="card-grid-double" style={{ width: "85vw" }}>
        <div className="visit-card" style={{ cursor: "pointer" }} id={8} onClick={openEightOverlay}>
          <img src=""/>
          Henry Paulson
        </div>
        <div className="visit-card" style={{ cursor: "pointer" }} id={9} onClick={openNineOverlay}>
          <img src=""/>
          Ben Bernanke
        </div>
        <div className="visit-card" style={{ cursor: "pointer" }} id={10} onClick={openTenOverlay}>
          <img src=""/>
          Timothy Geithner
        </div>
        <div className="visit-card" style={{ cursor: "pointer" }} id={11} onClick={openElevenOverlay}>
          <img src=""/>
          John Thain 
        </div>
        <div className="visit-card" style={{ cursor: "pointer" }} id={12} onClick={openTwelveOverlay}>
          <img src=""/>
          Warren Buffett
        </div>
        <div className="visit-card" style={{ cursor: "pointer" }} id={13} onClick={openThirteenOverlay}>
          <img src=""/>
          Jamie Dimon
        </div>
      </div>

      
      {/* Overlays */}
      <Overlay
        heading="Henry Lehman (1822-1855)"
        type={zeroOverlay}
        
        closeFunc={closeZeroOverlay}
        content={
          <>
            <div>
              <span style={{ fontWeight:"bold" }}>Role: </span>
              <span>Founder</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Contribution: </span>
              <span>
              Henry Lehman founded the original business in Montgomery, Alabama, in 1844. 
              His vision and entrepreneurial spirit laid the groundwork for what would eventually 
              become Lehman Brothers. He initiated the firm’s expansion from a general store into 
              the cotton trade, which was a crucial step in establishing the firm’s early financial 
              success.
              </span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Impact: </span>
              <span>
                Positive. Henry Lehman’s foundation provided the initial stability and direction for the firm.
              </span>
            </div>
          </>
        }
      />

      <Overlay 
        heading="Emanuel Lehman (1827-1907)"
        type={oneOverlay}
        
        closeFunc={closeOneOverlay}
        content={
          <>
            <div>
              <span style={{ fontWeight:"bold" }}>Role: </span>
              <span>Co-Founder and Leader after Henry's Death</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Contribution: </span>
              <span>
                After Henry’s death, Emanuel Lehman took over the business and expanded its operations. 
                He was instrumental in moving the firm’s headquarters to New York City and diversifying 
                its operations into financial services and commodity trading. He played a key role in 
                establishing Lehman Brothers as a major player in the New York financial community.
              </span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Impact: </span>
              <span> Positive. Emanuel’s leadership and vision helped establish Lehman Brothers as a significant financial institution.</span>
            </div>
          </>
        }
      />

      <Overlay 
        heading="Mayer Lehman (1830-1897)"
        type={twoOverlay}
        
        closeFunc={closeTwoOverlay}
        content={
          <>
            <div>
              <span style={{ fontWeight:"bold" }}>Role: </span>
              <span>Co-Founder and Partner</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Contribution: </span>
              <span>Mayer Lehman joined his brothers in the business, contributing to the expansion and diversification of the firm. His work in New York helped Lehman Brothers transition from a regional player in the South to a key financial institution on Wall Street.</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Impact: </span>
              <span>Positive. Mayer’s contributions helped solidify the firm’s presence in the financial capital of the U.S.</span>
            </div>
          </>
        }
      />

      <Overlay 
        heading='Robert "Bobbie" Lehman (1891-1969)'
        type={threeOverlay}
        
        closeFunc={closeThreeOverlay}
        content={
          <>
            <div>
              <span style={{ fontWeight:"bold" }}>Role: </span>
              <span>Senior Partner</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Contribution: </span>
              <span>Robert Lehman, a grandson of Emanuel, led the firm through its golden years in the early to mid-20th century. He played a crucial role in the firm’s expansion into underwriting and investment banking. Robert oversaw many of the firm’s significant deals, including underwriting for major companies like R.H. Macy & Co. and Woolworth.</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Impact: </span>
              <span> Positive. Under his leadership, Lehman Brothers became one of the most respected names on Wall Street.</span>
            </div>
          </>
        }
      />

      <Overlay 
        heading="Richard S. Fuld Jr. (1946-)"
        type={fourOverlay}
        
        closeFunc={closeFourOverlay}
        content={
          <>
            <div>
              <span style={{ fontWeight:"bold" }}>Role: </span>
              <span>CEO (1994-2008)</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Contribution: </span>
              <span>Richard Fuld was the longest-serving CEO of Lehman Brothers, leading the firm from 1994 until its collapse in 2008. He aggressively expanded Lehman’s global presence and pushed the firm into high-risk areas such as mortgage-backed securities and proprietary trading. Fuld’s leadership style was characterized by an emphasis on risk-taking and rapid growth, which contributed to the firm’s high profitability during the housing boom.</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Impact: </span>
              <span>Mixed/Negative. While Fuld was instrumental in the firm’s rise during the 1990s and early 2000s, his leadership was also directly linked to the firm’s collapse in 2008 due to excessive risk-taking and failure to manage the firm’s exposure to subprime mortgages.</span>
            </div>
          </>
        }
      />

      <Overlay 
        heading="Erin Callan (1965-)"
        type={fiveOverlay}
        
        closeFunc={closeFiveOverlay}
        content={
          <>
            <div>
              <span style={{ fontWeight:"bold" }}>Role: </span>
              <span>Chief Financial Officer (2007-2008)</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Contribution: </span>
              <span>Erin Callan was appointed CFO in 2007, during a critical period when Lehman Brothers was facing increasing financial pressure due to its exposure to subprime mortgages. She played a key role in communicating the firm’s financial position to investors and the public, often downplaying the severity of the firm’s problems. Her tenure as CFO was brief but marked by attempts to reassure the market about Lehman’s stability, which ultimately proved to be unfounded.</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Impact: </span>
              <span>Negative. Callan’s role in presenting an overly optimistic view of Lehman’s financial health contributed to the loss of confidence among investors and creditors, accelerating the firm’s downfall.</span>
            </div>
          </>
        }
      />

      <Overlay 
        heading="Joseph Gregory (1952-)"
        type={sixOverlay}
        
        closeFunc={closeSixOverlay}
        content={
          <>
            <div>
              <span style={{ fontWeight:"bold" }}>Role: </span>
              <span>President and Chief Operating Officer (2002-2008)</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Contribution: </span>
              <span>Joseph Gregory was a close ally of Richard Fuld and served as the firm’s COO during its final years. He was responsible for much of the day-to-day management of the firm and supported Fuld’s aggressive expansion strategy. Gregory was also involved in Lehman’s risk management practices, which failed to adequately account for the dangers posed by the firm’s heavy reliance on subprime mortgages.</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Impact: </span>
              <span>Negative. Gregory’s management practices and support for high-risk strategies were significant factors in the firm’s collapse.</span>
            </div>
          </>
        }
      />

      <Overlay 
        heading="Herbert McDade III (1954-)"
        type={sevenOverlay}
        
        closeFunc={closeSevenOverlay}
        content={
          <>
            <div>
              <span style={{ fontWeight:"bold" }}>Role: </span>
              <span>Chief Operating Officer (2008)</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Contribution: </span>
              <span>Herbert McDade took over as COO in 2008, during the final months leading up to Lehman’s bankruptcy. He was involved in the last-ditch efforts to secure additional capital and find a buyer for the firm. Despite his efforts, the attempts to save Lehman were unsuccessful.</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Impact: </span>
              <span>Neutral. McDade’s tenure was too short and during a period too turbulent for him to make a meaningful impact in preventing the collapse.</span>
            </div>
          </>
        }
      />

      <Overlay 
        heading="Henry Paulson (1946-)"
        type={eightOverlay}
        
        closeFunc={closeEightOverlay}
        content={
          <>
            <div>
              <span style={{ fontWeight:"bold" }}>Role: </span>
              <span>U.S. Secretary of the Treasury (2006-2009)</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Contribution: </span>
              <span>Henry Paulson was the U.S. Treasury Secretary during the financial crisis of 2008. He played a crucial role in the government’s response to the crisis, including the decision not to bail out Lehman Brothers. Paulson believed that allowing Lehman to fail would demonstrate that the government would not rescue every troubled financial institution, which he hoped would encourage more responsible behavior in the financial sector.</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Impact: </span>
              <span>Negative (from Lehman’s perspective). The decision not to bail out Lehman Brothers is widely considered a pivotal moment that exacerbated the financial crisis, leading to a loss of confidence in the global financial system.</span>
            </div>
          </>
        }
      />

      <Overlay 
        heading="Ben Bernanke (1953-)"
        type={nineOverlay}
        
        closeFunc={closeNineOverlay}
        content={
          <>
            <div>
              <span style={{ fontWeight:"bold" }}>Role: </span>
              <span>Chairman of the Federal Reserve (2006-2014)</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Contribution: </span>
              <span>As Chairman of the Federal Reserve, Ben Bernanke was a key figure in managing the U.S. response to the financial crisis. He was involved in the discussions about whether to provide emergency funding to Lehman Brothers. Ultimately, the Fed decided that it did not have the legal authority to save Lehman without collateral, leading to the firm’s bankruptcy.</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Impact: </span>
              <span>Neutral/Negative (from Lehman’s perspective). While Bernanke’s actions were guided by legal and policy constraints, the decision not to intervene in Lehman’s collapse had severe consequences for the global financial system.</span>
            </div>
          </>
        }
      />

      <Overlay 
        heading="Timothy Geithner (1961-)"
        type={tenOverlay}
        
        closeFunc={closeTenOverlay}
        content={
          <>
            <div>
              <span style={{ fontWeight:"bold" }}>Role: </span>
              <span>President of the Federal Reserve Bank of New York (2003-2009)</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Contribution: </span>
              <span>Timothy Geithner was the President of the New York Fed during the financial crisis and played a key role in the discussions leading up to Lehman Brothers' collapse. Geithner was deeply involved in the efforts to find a private-sector solution to save Lehman, including potential mergers or acquisitions. However, these efforts were ultimately unsuccessful.</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Impact: </span>
              <span>Neutral/Negative (from Lehman’s perspective). Despite his efforts, Geithner was unable to prevent Lehman’s collapse, which contributed to the broader financial crisis.</span>
            </div>
          </>
        }
      />

      <Overlay 
        heading="John Thain (1955-)"
        type={elevenOverlay}
        
        closeFunc={closeElevenOverlay}
        content={
          <>
            <div>
              <span style={{ fontWeight:"bold" }}>Role: </span>
              <span>CEO of Merrill Lynch (2007-2008)</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Contribution: </span>
              <span>John Thain was the CEO of Merrill Lynch during the financial crisis. His decision to sell Merrill Lynch to Bank of America in a hurried deal during the same weekend that Lehman Brothers collapsed likely saved Merrill from a similar fate. Thain’s actions underscored the seriousness of the financial crisis and the speed at which major financial institutions could unravel.</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Impact: </span>
              <span>Neutral/Negative (from Lehman’s perspective). Thain’s decision to secure a deal for Merrill Lynch highlighted the urgency of the situation, contrasting with Lehman’s inability to find a similar lifeline, which contributed to its downfall.</span>
            </div>
          </>
        }
      />

      <Overlay 
        heading="Warren Buffett (1930-)"
        type={twelveOverlay}
        
        closeFunc={closeTwelveOverlay}
        content={
          <>
            <div>
              <span style={{ fontWeight:"bold" }}>Role: </span>
              <span>CEO of Berkshire Hathaway</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Contribution: </span>
              <span>Warren Buffett was approached by Lehman Brothers in the months leading up to its collapse as a potential investor to provide much-needed capital. Although Buffett had successfully invested in Goldman Sachs during the crisis, he ultimately declined to invest in Lehman due to concerns about the firm’s financial stability and management’s transparency.</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Impact: </span>
              <span>Neutral/Negative (from Lehman’s perspective). Buffett’s decision not to invest was a missed opportunity for Lehman to secure a financial lifeline, contributing to its failure to survive the crisis.</span>
            </div>
          </>
        }
      />

      <Overlay 
        heading="Jamie Dimon (1956-)"
        type={thirteenOverlay}
        
        closeFunc={closeThirteenOverlay}
        content={
          <>
            <div>
              <span style={{ fontWeight:"bold" }}>Role: </span>
              <span>CEO of JPMorgan Chase</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Contribution: </span>
              <span>Jamie Dimon, as CEO of JPMorgan Chase, was involved in the broader context of the financial crisis. JPMorgan played a role in the final days of Lehman Brothers by demanding additional collateral from Lehman to maintain clearing and settlement services, which strained Lehman’s liquidity even further. Dimon’s actions reflected the cautious and defensive strategies banks adopted during the crisis.</span>
            </div>

            <br></br>

            <div>
              <span style={{ fontWeight:"bold" }}>Impact: </span>
              <span>Neutral/Negative (from Lehman’s perspective). Dimon’s demand for collateral was a standard risk management practice, but it contributed to Lehman’s liquidity crisis.</span>
            </div>
          </>
        }
      />

    </div>
  )
}

export default Figures