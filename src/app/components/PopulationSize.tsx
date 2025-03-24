const PopulationSize: React.FC = () => {

    return (
      <div className="space-y-4 flex flex-col justify-center items-center">

        <div className = "w-[70vw] bg-[#addaf0] rounded-lg"  >
        <p className="text-md p-4 text-md"> [Info on population size data and results] </p>
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
  