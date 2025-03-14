const PopulationSize: React.FC = () => {

    return (
      <div className="space-y-4 flex flex-col justify-center items-center">

        <div className = "w-[70vw] bg-[#addaf0] rounded-lg"  >
        <p className="text-md p-4 text-md"> [Info on population size data and results] </p>
        </div>
        
        <h3>Population size (N)</h3>
        <iframe
          src="/figures/N all scenarios as frames plotly widget.html"
          className="w-[96vw] h-[80vw] sm:w-[96vw] sm:h-[80vw] md:w-[96vw] md:h-[80vw] lg:w-[70vw] lg:h-[55vw] border rounded-lg shadow-md"
          title="Population Size Figure"
        />
      </div>
    );
  };
  
  export default PopulationSize;
  