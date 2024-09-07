import React from 'react'

import { useNavigate } from 'react-router-dom'

import Accordion from '../components/Accordion';

const Collapse = () => {

  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>Lehman's End</h1>
      </div>

      <div className="accordions">
        <Accordion 
          title="Subprime Mortgage Crisis"
          content={
            <>
              <p>
                Lehman Brothers invested heavily in subprime mortgages, which are loans given to borrowers
                with poor credit ratings. These loans were then bundled into financial products called
                mortgage-backed securities (MBS) & collateralized debt obligations (CDOs). These products
                were then sold for a high price and became profitable which made Lehman a lot of short-term
                profits.
              </p>

              <p>
                However, considering the loans were given to borrowers with poor credit history,
                many defaulted their loans, meaning they simply did not pay the banks back. This
                caused the MBS & CDOs to lose value which made huge dents in Lehman's balance sheets 
                as the firm was highly reliant on these financial products.
              </p>
            </>
          }
        />

        <Accordion 
          title="Liquidity Crisis"
          content={
            <>
              <p>
                Liquidity refers to the company's ability to convert assets into cash or to acquire
                case from them. In this case, Lehman Brothers relied so heavily on MBSs & CDOs, that
                when they lost value, they could not sell them anymore to acquire money. This in turn 
                started a self-reinforcing cycle: as more parties withdrew from trading with Lehman,
                its financial position weakened, which will cause more parties to withdrew.
              </p>

              <p>
                Without sufficient cash flow or access to credit, Lehman Brothers struggled to fund 
                its daily operations, including meeting obligations to creditors and maintaining 
                its trading activities. The firm's inability to stabilize its cash position led to 
                mounting losses as the weeks turned into months. Ultimately, this cash shortfall 
                and the erosion of confidence in Lehman's ability to meet its obligations 
                contributed to its downfall.
              </p>
            </>
          }
        />

        <Accordion 
          title="Risk Management Failures"
          content={
            <>
              <p>
                Lehman Brothers invested heavily into the real-estate sector, which means it did not
                diversifying its portfolio. The firm also relied on flawed risk models hat underestimated 
                the potential for a severe market downturn. Lehman operated with extremely high leverage, 
                borrowing heavily to finance its investments, which amplified losses when the housing market 
                collapsed.
              </p>

              <p>
                In addition, Lehman failed to adequately hedge its exposure to these risky assets, 
                relying on strategies like credit default swaps (CDS) that proved insufficient 
                when the crisis hit. Lehman also underestimated the extreme interconnectedness of the 
                global financial markets. With all of these reasons combined, it drove Lehman to bankruptcy
                and triggering a downturn in the economy.
              </p>
            </>
          }
        />

        <Accordion 
          title="Government Response"
          content={
            <>
              <p>
                In March 2008, the US government has be involved in the takeover of Bear Stearns,
                which was acquired by JP Morgan Chase. The Federal Reserve provided a $29 billion 
                loan to stabilize Bear Stearns, fearing that with its collapse, the housing market
                is going to crash. Five months later, the Fed also took over operations of two other 
                enterprises that had a critial role in the housing market. With all of this, people
                (as well as Lehman Brothers) thought that the Fed was also going to bailout Lehman Brothers.
              </p>

              <p>
                There were a lot of reasons why the US government did not intervene on the Lehman case:
                1&#x29; moral hazards - the government tried to send a message that they should be more responsible
                in their behaviours as so not to rely on the government for bailouts if things were to go 
                wrong. 2&#x29; political & public pressure - by September, the public was putting pressure
                on the government about using taxpayer money to bailout banks, especially one that have made
                reckless decisions in the past. 3&#x29; legal barriers - there was no clear buyer or acquisition
                of Lehman Brothers unlike Bear Stearns, (Barclays expressed some vague interest, but was hurdled
                with legal approval) so without a buyer, the US government wanted not to intervene directly.
              </p>
            </>
          }
        />

        <Accordion 
          title="Bankruptcy"
          content={
            <>
              <p>
                On September 9th, 2008, Lehman Brothers market value plummets 45% in a single day.
              </p>

              <p>
                On September 10th, 2008, Lehman Brothers reports a $3.9 billion loss in its third quarter.
                The firm's final attempts at raising capital fell through.
              </p>

              <p>
                On September 12th, 2008, the Federal Reserve hosts emergency meetings on how to rescue
                Lehman Brothers, discussing potential buyers.
              </p>

              <p>
                On September 13-14, 2008, Lehman Brothers potential buyers face legal hurdles, and the decision
                was blocked.
              </p>

              <p>
                On September 15, 2008, Lehman Brothers filed for Chapter 11 bankruptcy, with $639 billion in assets
                and $613 billion in debt, making it the largest bankruptcy filing in the US since Enron 2001.
              </p>
            </>
          }
        />

        <Accordion 
          title="Impact on Global Economy"
          content={
            <>
              <p>
                Following the collapse of Lehman Brothers, the Dow Jones Average, fell by 500 points
                that day, and the stock markets worldwide followed suit. This caused a credit market
                freeze, where traders have stopped trading due to fear of further insolvencies. In addition,
                other businesses and banks faced their own liquidity crisis as investors and people
                withdraw their money in bankruns.
              </p>

              <p>
                In the following weeks of the collapse, other investment banks, such as Merill Lynch,
                Washington Mutual & AIG, was on the brink of collapse. They were later acquired by 
                Bank of America, JP Morgan, & bailed out by the U.S. government in these respective orders.
              </p>

              <p>
                Lehman Brothers' collapse also sparked the beginning of the 2008 Great Recession.
                The recession contracted economic activity, businesses faced declining sales, rising costs
                of credit, and widespread layoffs. In the U.S. alone, unemployment rose from 5% to 10%.
                Other economies, such as Germany, Japan & China faced extreme slowdowns in their economic 
                activities.
              </p>
            </>
          }
        />

        <Accordion 
          title="Legacy & Conclusion"
          content={
            <>
              <p>
                The collapse of Lehman Brothers was often seen as the event that marked the peak of 
                financial crisis, symbolizing the great influence and power excessive risk-taking & 
                the failure of the financial has on economies worldwide. 
              </p>

              <p>
                Lehman Brothers had an impact on the concept of 'too big to fail'. This idea basically
                describes an institution so big & powerful that the government could not afford to let
                it fail. There has been debates about the moral hazards of bailouts and government
                intervention of financial markets.
              </p>

              <p>
                Lehman Brothers' collapse exposed critical vulnerabilities in the financial systems,
                which led to a massive sweep of financial reforms and left and everlating thought
                on the political & financial systems. This legacy continues to shape how businesses &
                governments operate & respond to financial crisises.
              </p>
            </>
          }
        />
      </div>


    </>
  )
}

export default Collapse