const PopulationSize: React.FC = () => {

    return (
      <div className="space-y-4 flex flex-col justify-center items-center">

        <div className = "w-[80vw] max-w-[1000px] bg-[#addaf0] rounded-lg"  >
        <p className="text-[13px] sm:text-[13px] md:text-[16px] lg:text-[16px] p-4 text-md"> Breeding population size was estimated through intermittent plot-based surveys across study islands, using extrapolated burrow density across occupied areas, with stratification in large, heterogeneous colonies. Surveys from 2001 to 2023 were included, with some assumed to reflect nearby years to maximize available data. While this introduces a potential bias, the impact on population estimates is believed to be minimal. Modeled population sizes were constrained by survey data using normal distributions, and early-stage population sizes were linked to the breeding population through a stable stage vector. To read more about the model parameters, visit the <a href="/model-schematic">model schematic</a> page. <br></br><br></br> <strong>RESULTS:</strong> the modeled population sizes of breeders generally tracked observed values, showing that the model responded well to available population estimates. For colonies with multiple estimates, like Gull Island and Middle Lawn Island, the model smoothed out extreme population dynamics. For example, in 2012, Gull Island’s modeled population size was 475,000, just outside the observed confidence bounds. Younger cohorts largely followed breeding population trends, though early years showed some transient dynamics due to the starting population vector. For more detailed results, refer to the <a href="/manuscript">full manuscript</a>.</p>
        </div>
        
        <h3>Population size (N)</h3>
        <object 
            data="/figures/N all scenarios as frames plotly widget.html" 
            className="border rounded-lg shadow-md w-[96vw] h-[83vw] max-w-[1210px] max-h-[1050px] justify-center items-center " 
            type="text/html"
          />
      </div>
    );
  };
  
  export default PopulationSize;
  