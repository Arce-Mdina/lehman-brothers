import React from 'react'
import Accordion from '../components/Accordion'

const History = () => {

  return (
    <div>
      <h1>Lehman Brothers' Life</h1>
      <div className="accordions">

        <Accordion 
          title="The Early Years and Expansion (1844-1900)"
          content={
            <>

              <p>
                In 1844, Henry Lehman, a 23-year-old German immigrant, 
                founded a small dry-goods store in Montgomery, Alabama. This business, 
                named "H. Lehman," became the cornerstone of Lehman Brothers. 
                Over the next six years, Henry was joined by his brothers Emanuel and Mayer, 
                and the firm was renamed Lehman Brothers. The brothers expanded their operations, 
                accepting raw cotton as payment from local plantations and trading the commodity. 
                Cotton became a significant part of their business operations, marking the firm’s 
                early success in commodities trading.
              </p>

              <p>
                By 1858, the brothers relocated the firm to New York City, 
                opening an office at 119 Liberty Street, placing them in the heart of 
                American commerce. After Henry's death in 1855, Emanuel and Mayer guided the 
                firm through the post-Civil War era, partnering with John Durr to form a new 
                corporation focused on expanding their cotton trade. Lehman Brothers also helped 
                establish the New York Cotton Exchange in 1870, further solidifying their influence 
                in the commodities market. By the 1880s, they had joined the Coffee Exchange and the 
                New York Stock Exchange, establishing themselves as key players in the evolving 
                financial sector.
              </p>
            </>
          }
        />

        <Accordion 
          title="Early 20th Century Growth (1900-1940)"
          content={
            <>
              <p>
                Under Philip Lehman, the son of Emanuel, the firm entered a new 
                phase of growth in the early 20th century. Partnering with Goldman 
                Sachs in 1906, Lehman Brothers helped bring several major companies to market, 
                including General Cigar Co. This marked the firm’s expansion into the underwriting 
                business, where it played a key role in financing the growth of American industry. 
                By facilitating the public offerings of companies in emerging sectors, 
                Lehman Brothers solidified its role as a major force in investment banking.
              </p>

              <p>
                In 1925, Robert "Bobbie" Lehman took over as head of the firm, steering 
                it through the turbulent years of the Great Depression. He focused on venture 
                capital during the financial crisis of 1929, ensuring the firm’s survival at a 
                time when many others failed. Additionally, the firm took on its first non-family 
                partner, John M. Hancock, in 1924, signaling a shift toward a more corporate structure. 
                Despite the challenges of the Great Depression, Lehman Brothers emerged with its 
                eputation intact and ready to capitalize on new opportunities in the post-war economy.
              </p>
            </>
          }
        />

        <Accordion 
          title="Surviving World War I and Its Aftermath"
          content={
            <>
              <p>
                The outbreak of World War I in 1914 caused significant disruptions in 
                global trade and financial markets, but Lehman Brothers adapted by shifting 
                its focus to domestic markets. The firm played a key role in supporting the 
                U.S. government’s war financing efforts through the sale of Liberty Bonds. 
                This participation allowed Lehman Brothers to remain profitable during a period 
                of economic uncertainty while deepening its ties with the U.S. government and 
                key domestic industries.
              </p>

              <p>
                Lehman’s conservative risk management practices also contributed 
                to its survival. Unlike many other firms, Lehman Brothers avoided speculative 
                excesses during the war, focusing instead on maintaining liquidity and ensuring 
                stable operations. This prudent approach enabled the firm to emerge from World War I 
                in a strong position, positioning itself for further expansion during the economic 
                boom of the 1920s.
              </p>
            </>
          }
        />
        

        <Accordion 
          title="Post-War Success and Challenges (1940-1984)"
          content={
            <>
              <p>
                After World War II, Lehman Brothers capitalized on the economic boom, expanding 
                its operations into new markets and industries. Robert Lehman continued to lead 
                the firm until his death in 1969, during which time Lehman Brothers became 
                increasingly involved in mergers and acquisitions (M&A), underwriting, 
                and venture capital. However, following Robert Lehman’s death, 
                the firm faced significant leadership challenges. Without any active 
                family members to guide the company, Lehman Brothers turned to external 
                executives like Pete Peterson, who was brought in to stabilize the company 
                in the early 1970s.
              </p>

              <p>
                The following decades were marked by internal power struggles and a series of mergers, 
                particularly with Lewis Glucksman, who eventually rose to prominence within the firm. 
                In 1984, Shearson/American Express acquired Lehman Brothers for $360 million, 
                as part of a broader trend toward consolidation within the financial services industry. 
                Despite this acquisition, Lehman Brothers retained much of its operational independence, 
                continuing to play a key role in investment banking and corporate finance.
              </p>
            </>
          }
        />

        <Accordion 
          title="Rise to Financial Power (1984-2007)"
          content={
            <>
              <p>
                Lehman Brothers' journey to becoming a global financial powerhouse began in earnest 
                after its spinoff from American Express in 1994, forming Lehman Brothers Holdings, Inc. 
                With Dick Fuld at the helm, the firm aggressively expanded into new markets and asset 
                classes, becoming one of the dominant players on Wall Street. Fuld’s leadership was 
                marked by an emphasis on high-risk, high-reward strategies, which included expanding 
                into mortgage-backed securities (MBS) and proprietary trading. Lehman’s dominance in 
                fixed-income securities, particularly in mortgage markets, helped fuel its rapid rise 
                during the housing boom of the early 2000s.
              </p>

              <p>
                Lehman Brothers’ ability to innovate in financial products, 
                especially in the securitization of mortgages, became a key driver of its 
                profitability. The firm was a major participant in the packaging and sale of MBS 
                and collateralized debt obligations (CDOs), which generated significant returns 
                during the housing boom. By the mid-2000s, Lehman Brothers had solidified its position 
                as one of the most influential investment banks in the world, with a global footprint 
                that spanned Europe, Asia, and the United States.
              </p>
            </>
          }
        />
      

        <Accordion 
          title="The 9/11 Attacks and Resilience"
          content={
            <>
              <p>
                Lehman Brothers faced another major crisis on September 11, 2001, 
                when its headquarters at 3 World Financial Center was severely damaged 
                in the terrorist attacks. Despite the devastation, the firm quickly relocated 
                its operations to New Jersey and other offices, resuming business within a week. 
                Lehman’s response to the 9/11 attacks demonstrated its resilience and determination 
                to continue operating despite adversity. Dick Fuld’s leadership during this period 
                further solidified his reputation as a strong and capable leader who could guide the
                firm through turbulent times.
              </p>

              <p>
                The firm’s ability to recover from the 9/11 attacks, however, 
                stood in stark contrast to its ultimate collapse in 2008. While Lehman 
                successfully navigated the aftermath of the attacks, the firm’s overexposure to 
                risky financial products in the years that followed would prove to be its undoing.
              </p>
            </>
          }
        />
        

        <Accordion 
          title="The Path to Collapse (2007-2008)"
          content={
            <>
              <p>
                The seeds of Lehman Brothers’ collapse were planted during its years 
                of aggressive growth. The firm’s heavy reliance on mortgage-backed securities 
                left it highly exposed to the risks of the U.S. housing market. 
                As the housing bubble began to burst in 2007, the value of Lehman’s mortgage-related 
                assets plummeted. Despite warning signs, Lehman continued to take on risk in an attempt 
                to maintain profitability, betting on the recovery of the housing market. 
                However, as defaults on subprime mortgages surged, the firm faced mounting losses.
              </p>

              <p>
                Lehman Brothers’ financial position deteriorated rapidly in 2008. 
                The firm’s attempts to raise capital, including reaching out to potential investors 
                like Warren Buffett, proved unsuccessful. Efforts to find a buyer, 
                such as Barclays or Bank of America, fell through at the last minute due to 
                regulatory and financial hurdles. On September 15, 2008, Lehman Brothers filed 
                for bankruptcy, marking the largest bankruptcy in U.S. history. 
                The firm’s collapse sent shockwaves through the global financial system, 
                triggering a credit crisis that contributed to the broader global financial meltdown.
              </p>
            </>
          }
        />

        <Accordion 
          title="The Collapse and Aftermath (2008-Present)"
          content={
            <>
              <p>
                Lehman Brothers’ bankruptcy in September 2008 was a 
                watershed moment in the global financial crisis. 
                The firm’s collapse was not only the largest bankruptcy in U.S. history 
                but also a catalyst for the widespread panic that followed. 
                The failure of Lehman Brothers highlighted the systemic risks posed by the 
                interconnectedness of global financial institutions and the dangers of excessive 
                leverage and risk-taking. In the wake of Lehman’s collapse, financial markets around 
                the world experienced unprecedented volatility, leading to government bailouts of 
                other major institutions and massive regulatory reforms.
              </p>

              <p>
                The aftermath of Lehman’s collapse brought significant changes to the
                 financial industry. The Dodd-Frank Wall Street Reform and Consumer Protection Act, 
                 passed in 2010, aimed to prevent future financial crises by increasing oversight of 
                 financial institutions and reducing systemic risks. Although Lehman Brothers no longer 
                 exists, its legacy continues to shape the way global financial markets are regulated 
                 and understood today. The firm’s collapse remains a powerful reminder of the 
                 consequences of unchecked risk-taking and the importance of sound financial regulation.
              </p>

            </>
          }
          
        />

        <br></br>
        <br></br>
        <br></br>

      </div>
    </div>
  )
}


export default History