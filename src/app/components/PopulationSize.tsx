const PopulationSize: React.FC = () => {

    return (
      <div className="space-y-4 flex flex-col justify-center items-center">

        <div className = "max-w-[70vw] bg-[#addaf0] rounded-lg"  >
        <p className="text-md p-4 text-md">Breeding population size ( [Equation] ) was estimated from intermittent plot-based surveys of the study islands (Table 3.3, Figure 3.3). Methods vary slightly among study colonies, but generally involved extrapolating an occupied burrow density across the occupied area of the island. For large and heterogeneous colonies, these extrapolations were stratified across different breeding habitats (Wilhelm et al., 2020).  To maximize the number of colony surveys available for the modeling, we included surveys conducted up to 2 years before (2001) and after the time period of modeling (2003, 2021). Survey conducted in 2001 and 2002 were assumed to also reflect a 2003 survey, similarly 2022 and 2023 surveys were assumed to reflect 2021. Although this does add a potential bias to the population model, it allows us to use as much survey data as possible and we believe that population sizes should not be greatly changed after 1 or 2 years.  </p>
        </div>
        
        <iframe
          src="/figures/Dflox.html"
          className="w-full h-[600px] border rounded-lg shadow-md"
          title="Population Size Figure"
        />
        <iframe
          src="/figures/Dflox.html"
          className="w-full h-[600px] border rounded-lg shadow-md"
          title="Population Size Figure 2"
        />
      </div>
    );
  };
  
  export default PopulationSize;
  