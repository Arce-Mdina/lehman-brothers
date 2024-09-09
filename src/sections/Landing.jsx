import React, { useRef } from 'react'

import { useNavigate } from 'react-router-dom'

import Section from '../components/Section'
import Footer from '../components/Foot'

const Landing = () => {

  const navigate = useNavigate();

  const explanationRef = useRef(null);

  const scrollToExplanation = () => {
    explanationRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div>
      <div className="header">
        <img src="https://www.wikicorporates.org/mediawiki/images/thumb/3/31/Lehman-Brothers-stacked.svg/320px-Lehman-Brothers-stacked.svg.png" className="logo-img"/>
        {/* <div>
          <h1>Lehman Brothers</h1>
        </div> */}
        <br></br>
        <br></br>
        <h2 style={{ fontWeight: "normal", paddingBottom: "15px", fontFamily: "EB Garamond" }}>The tragic story of a banking superpower whose epic downfall ignited a global recession.</h2>
        <div className="title-btns">
          <button className="link-btn link-1" onClick={scrollToExplanation}>Learn more</button>
          <button className="link-btn link-2" onClick={() => navigate('/collapse')} style={{ color: "black" }}>Lehman's Collapse</button>
        </div>
      </div>

      <div ref={explanationRef}>

        <Section 
          title="We know it is hard to find information about Lehman Brothers"
          fontSize="1.9rem"
          backgroundColor='maroon'
          color="white"
          content={
            <>
              <br></br>
              <div>
                Which is why Filfoletta.eu brings you this site.
              </div>
              <br></br>
            </>
          }
          footer={
            <>
              <button onClick={() => navigate('/data')} style={{ borderRadius: "15px", color: "black", backgroundColor: "white" }}>
                Look & interact with Lehman's statistics
              </button>
            </>
          }
        />

        <Section 
          title="Background & Context"
          fontSize="1.9rem"
          // backgroundColor="#f5f5f5"
          content={
            <>
              <p>
                Lehman Brothers, officialy Lehman Brothers Inc. was an American global finanicial firm
                founded in 1850. In the early 2000s, it was the fourth-biggest investment bank in the US 
                (after Goldman Sachs, Morgan Stanley, Merrill Lynch), with approx. 25,000 employees worldwide.
              </p>

              <p>
                The whole banking society (Lehman included) was reliant on each other,
                as a result of all the bonds they sold from all the loans for mortgage payments.
                This means that if one bank were to fail, all the others were to be affected. 
                (In this case, Bear Stearns fell first).
              </p>
            </>
          }
          footer={
            <>
              <footer>
                <button onClick={() => navigate('/history')} style={{ borderRadius: "15px", backgroundColor: "#6CA0DC", color: "white" }}>
                  Learn about Lehman's History
                </button>
              </footer>
            </>
          }
        />

        <Section 
          title="Government's Involvement"
          fontSize="1.9rem"
          backgroundColor='#0f0f5f'
          color="white"
          content={
            <>
              <p>
                On September 12, 2008, Federal Reserve Bank President Timothy F. Geithner 
                convened a meeting to discuss the future of Lehman Brothers, marking a critical 
                moment for the financial system. Key Wall Street bankers were present, considering 
                an emergency liquidation of Lehman’s assets.
              </p>

              <p>
                Two days later, Barclays withdrew from a rescue deal, and U.S. officials, 
                including Treasury Secretary Henry Paulson, made it clear there would be no 
                government bailout. On September 15, 2008, Lehman filed for bankruptcy with 
                $639 billion in assets and $613 billion in debt, making it the largest bankruptcy in 
                U.S. history.
              </p>
            </>
          }
          footer={
            <>
              <button onClick={() => navigate('/key-figures')} style={{ borderRadius: "15px", backgroundColor: "#c4c4c4", color: "black" }}>
                Learn about Lehman's Key Figures
              </button>
            </>
          }
        />

        <Footer />
      </div>
    </div>
  )
}

export default Landing