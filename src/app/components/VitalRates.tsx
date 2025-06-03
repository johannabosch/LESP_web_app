const VitalRates: React.FC = () => {

  return (
    <div className="space-y-4 flex flex-col justify-center items-center">

        <div className = "w-[80vw] max-w-[1000px] bg-[#addaf0] rounded-lg"  >
        <p className="text-[13px] sm:text-[13px] md:text-[16px] lg:text-[16px] p-4 text-md">

           Survival and productivity rates were modeled based on capture-mark-recapture methods for breeding adults across all six colonies, with survival constrained to the logit of the estimated survival rates and associated sampling error. Productivity was modeled as a binomial, with random effects applied in years lacking data. Transition probabilities for immature, pre-breeding, and breeding stages were based on survival and age-specific breeding propensity. To read more about the model parameters, visit the <a href="/model-schematic">model schematic</a> page. <br /><br /> <strong>RESULTS:</strong> Modeled productivity generally tracked observed values, with differences between colonies, especially higher productivity in Newfoundland compared to Maritime colonies. Survival estimates for younger cohorts varied, with Baccalieu and Kent Islands showing lower post-fledge juvenile survival. Transition probabilities remained uncertain but did not notably affect overall model behavior. For more detailed results, refer to the <a href="/manuscript">full manuscript</a>.
           
        </p>
      </div>
      
      <h3>Modeled Survival (S)</h3>
      <object 
            data="/figures/S all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"

      />
      
      <h3>Mortality from Unknown Sources (M) </h3>
      <object 
            data="/figures/M all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"
          />
      
      <h3>Modeled Productivity (F)</h3>
      <object 
            data="/figures/F all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"
          />

    <h3> Transitions (ψ)</h3>
    <object 
      data="/figures/psi all scenarios as frames plotly widget.html" 
      className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
      type="text/html"
    />

      <h3>Annual deviations in survival (eps.y)</h3>
      <object 
        data="/figures/eps.y all scenarios as frames plotly widget.html" 
        className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
        type="text/html"
      />
    </div>
  );
};

export default VitalRates;

  