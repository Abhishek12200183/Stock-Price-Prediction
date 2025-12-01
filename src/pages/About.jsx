// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white">
      {/* Background with stock pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/trading-background-with-graphic-illustration_53876-115825.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.2'
        }}
      />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-black"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="flex items-center gap-4 mb-6 justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z" fill="currentColor"/>
              <path d="M12 11a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z" fill="currentColor"/>
              <path d="M12 7a1 1 0 100 2h.01a1 1 0 100-2H12z" fill="currentColor"/>
            </svg>
          </div>
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            About Us
          </h1>
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            This app predicts stock trends using live market data and advanced machine learning algorithms. 
            Get accurate predictions and make informed investment decisions with our cutting-edge technology.
          </p>

          {/* Rich historical incidents and facts (summary) */}
          <div className="text-gray-300 text-base leading-relaxed mb-8">
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">Historical incidents & key facts</h2>

            <p className="mb-4">Below is a concise, factual summary of major historical market incidents and important facts about financial markets and the rise of algorithmic and AI-driven trading. These points highlight how market structure, technology, and regulation evolved — and why data-driven prediction tools like this app matter.</p>

            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>
                <strong>1929 — The Great Crash:</strong> The U.S. stock market crash of October 1929 marked the start of the Great Depression. Rapid speculative buying, excessive margin (borrowed) purchases and a lack of coordinated circuit breakers produced a multi-week collapse in prices. The episode demonstrated how leverage and panic can amplify losses across the financial system.
              </li>

              <li>
                <strong>1987 — Black Monday (October 19, 1987):</strong> Global markets fell sharply (the Dow Jones Industrial Average dropped about 22% in a single day). This event exposed the systemic risk posed by portfolio insurance strategies and computerized trading programs that could accelerate selling when markets moved down.
              </li>

              <li>
                <strong>1997–1998 — Asian Financial Crisis & Long-Term Capital Management:</strong> Contagion in emerging markets and the collapse of highly leveraged hedge funds (e.g., LTCM in 1998) illustrated the risks of concentrated leverage and correlated strategies across global markets, pushing regulators and firms to rethink counterparty and liquidity risks.
              </li>

              <li>
                <strong>2000 — Dot-com Bubble & Burst:</strong> A technology-sector-driven speculative bubble popped in 2000, resulting in years of price declines for high-flying internet companies. The episode taught investors lessons about valuation discipline and the danger of narratives outrunning fundamentals.
              </li>

              <li>
                <strong>2007–2009 — Global Financial Crisis:</strong> Triggered by a collapse in U.S. subprime mortgage markets, the crisis spread through securitized products and shadow banking. Lehman Brothers' failure (September 2008) and severe market dislocations led to broad policy responses (monetary easing, fiscal support, and regulatory reforms such as Dodd‑Frank) to restore functioning credit markets.
              </li>

              <li>
                <strong>2010 — The Flash Crash (May 6, 2010):</strong> U.S. equity markets experienced a rapid plunge and rebound within minutes; the event highlighted the impact of high-frequency trading (HFT), order-routing interactions, and the need for improved circuit breakers and market protections.
              </li>

              <li>
                <strong>2015–2016 — China & Global Volatility Episodes:</strong> Surges in volatility driven by structural flows, margin selling, and macro uncertainty demonstrated how local shocks can ripple globally in highly interconnected markets.
              </li>

              <li>
                <strong>2020 — COVID-19 Market Crash and Rapid Recovery:</strong> Global markets plunged in March 2020 as the pandemic spread, then rebounded strongly following unprecedented central bank and fiscal support. The episode emphasized how macro policy, liquidity provision, and forward-looking expectations drive valuations.
              </li>

              <li>
                <strong>2021 — Retail trading and social-media-driven moves (e.g., GameStop):</strong> Coordinated retail activity, enabled by commission-free trading apps and social platforms, caused outsized moves in certain securities. Market structure, short positioning, and retail liquidity dynamics became prominent in public debate.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-300 mb-3">Technology & algorithmic trading — timeline highlights</h3>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>
                <strong>Early quant strategies (1970s–1990s):</strong> Institutional investors and academic researchers began applying statistical arbitrage, mean reversion, and factor-based strategies using early computing power and historical datasets.
              </li>

              <li>
                <strong>Rise of electronic trading (1990s–2000s):</strong> Order matching transitioned from floor trading to electronic venues. Execution algorithms and smart order routing reduced explicit transaction costs but made microstructure effects more important for strategy design.
              </li>

              <li>
                <strong>High-frequency trading (2000s):</strong> HFT firms used co-location, low-latency connectivity, and sophisticated market-making algorithms. While HFT provided liquidity in many periods, it also contributed to episodes of instability under stress, prompting regulatory focus on market resiliency.
              </li>

              <li>
                <strong>Machine learning & AI adoption (2010s–present):</strong> As datasets grew and compute became affordable, financial firms adopted machine learning models (random forests, gradient boosting, neural networks) for signal generation, risk forecasting, and execution optimization. Today, 'alternative data' (satellite imagery, credit-card aggregates, web traffic, social sentiment) is widely used to augment traditional price and fundamentals data.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-300 mb-3">Important structural & regulatory facts</h3>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>
                <strong>Market depth & liquidity vary over time:</strong> Even highly liquid markets can become illiquid during stress; risk models must account for regime changes and liquidity costs.
              </li>
              <li>
                <strong>Regulation evolved after crises:</strong> Reforms such as circuit breakers, short-sale restrictions, capital and margin rules, and trade reporting requirements have been implemented to improve stability, transparency, and investor protection.
              </li>
              <li>
                <strong>Exchange-traded funds (ETFs) and passive investing:</strong> The explosion of ETFs changed market flows and passive exposures — these instruments now represent a material source of daily trading volume and portfolio allocation decisions.
              </li>
              <li>
                <strong>Data & model risk:</strong> Models are only as good as their data and assumptions; historical backtests can fail when market regimes shift, and model overfitting is a persistent danger.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-300 mb-3">Why historical facts matter for prediction</h3>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>
                <strong>Context for model design:</strong> Understanding historical crashes, microstructure events, and policy responses guides the choice of features, risk controls, and evaluation metrics for predictive models.
              </li>
              <li>
                <strong>Stress-testing & scenario analysis:</strong> Real incidents provide scenarios (shock magnitudes, correlation breakdowns, liquidity droughts) used to test model robustness and portfolio resilience.
              </li>
              <li>
                <strong>Human oversight:</strong> Automated systems perform best with layered governance — monitoring, human review, and kill-switches — especially when markets behave in previously unseen ways.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-blue-300 mb-3">Quick factual reference (concise bullets)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Global market cap has grown exponentially over the last century, driven by economic expansion, financial innovation, and accessibility.</li>
              <li>Algorithmic trading accounts for a significant share of daily equities volume in developed markets; estimates vary by market and method.</li>
              <li>ETFs transformed how investors access asset classes: passive flows can amplify market moves during stress periods.</li>
              <li>Alternative data sources (satellite, web, sentiment) are increasingly used to create early signals for company activity and macro trends.</li>
              <li>Regulators often respond to market incidents with rules that trade off efficiency against resilience — circuit breakers and enhanced reporting are examples.</li>
            </ul>

            <p className="mt-6 text-sm text-gray-400">If you want, I can expand any of the above bullets into a detailed report, add citations and links to primary sources (academic papers, regulator reports, historical market data), or tailor the content to a particular region or time period.</p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <a
              href="https://twitter.com/stockpredictor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/stockpredictor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/stockpredictor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="mailto:contact@stockpredictor.com"
              className="text-gray-400 hover:text-red-400 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
              </svg>
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-gray-400">
            <p>Contact us: contact@stockpredictor.com</p>
            <p className="mt-2">Follow us for updates and market insights</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
