const Survival: React.FC = () => {

    return (
      <div className="space-y-4 justify-center items-center">

        <div className = "flex items-center justify-center max-w-[80vw] bg-[#addaf0] rounded-lg"  >
        <p className="text-md p-1">This section explores population size trends over time...</p>
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
  
  export default Survival;
  