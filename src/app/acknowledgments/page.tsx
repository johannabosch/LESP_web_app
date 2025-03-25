"use client";

import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Acknowledgments() {

  return (
    <div className="flex flex-col bg-white min-h-screen">

      <Header currentScreen={1} />    
    
      <main>
       <div className="flex flex-col justify-center items-center text-center mx-auto">

        <h1>Acknowledgments</h1>

        <p className="w-[80vw] max-w-[1000px]">We thank Dave Taylor, long-time Research Manager for ESRF, for expertly guiding us through yet another successful ESRF project. Dave, your ability to seamlessly navigate among the research community, the public service, and private sector was a wonder, and all with a goal of getting the good work done and moving forward. Your contributions and leadership helped us better understand the interplay between environmental issues and the marine industries in Atlantic Canada, to the benefit of all.</p> 

          <p className="w-[80vw] max-w-[1300px] text-[13px] sm:text-[13px] md:text-[14px] lg:text-[14px] mt-5">
          
          Funding for this analysis was provided by Environment & Climate Change Canada and the <a href="https://www.esrfunds.org/">Environmental Studies Research Fund</a>.

          For safely transporting us to Gull and Baccalieu Islands, we thank Tony and Tommy Doyle, Joe and Loyola O’Brien, Pierre Ryan, Danny and Tyler, and Canadian Coast Guard Port Bickerton NS.
          
          For help in the field on Gull and Baccalieu, we thank Gail Davoren, Peter Mallam, Cameron Hedd, Joshua Hedd, Lee Hedd, Chantelle Burke, Paul Regular, Bronwyn Harkness, Noelle Laite, Abby Hann, Michelle Fitzsimmons, Cerren Richards, Marina Montevecchi, Garry Donaldson, Joshua Cunningham, Katharine Studholme, Kyle d’Entremont, Rielle Hoeg, Danielle Fife, and Christopher Ward.
          
          Research on Baccalieu and Gull Islands was supported by NSERC Discovery Grants to William A. Montevecchi and an NSERC Post-Doctoral Fellowship to April Hedd.

          For petrel research on Middle Lawn Island, we thank Toby Lockyer, Keith Drake, Alejandra Nuñez de la Mora, Leesa Fawcett, Peter Thomas, Merrill Francis, and Dorothy Diamond for logistical support and assistance in the field, and York University’s Faculty of Environmental and Urban Change for some funding.

          Canadian Wildlife Service provided financial support to the Alder Institute towards the data collected on Middle Lawn Island, and Alder provided in-kind support.

          The Country Island field program would not be possible without in-kind support from the province of Nova Scotia, the Country Island field teams, especially annual coordinators (Virginia Noble, Myriam Trottier-Paquet, Avery Nagy-MacArthur) and various Canadian Wildlife Service staff that assist annually (especially Megan Boucher, Beth MacDonald, Becky Whittam).

          We thank Lee Adams for logistical support getting to and while on Bon Portage (BP) Island. Funding for work on Bon Portage was provided through a Natural Sciences and Engineering Research Council (NSERC) Post-Graduate Scholarship to ILP, and Nova Scotia Habitat Conservation Fund. For help in the field at BP we thank Dave Shutler, Emily Mills, Holly Lightfoot, Bradley Woodworth, Chelsea Ryan, Erika Holland, Danielle Fife, Anik Obomsawin, Rielle Hoeg, Mathieu Godbold-Smith, and Linda Hutchinson.

          The storm-petrel dataset on Kent Island has been supported by Bowdoin College, Kenyon College, and a grant from Environment and Climate Change Canada (GCXE22C311).
          
          We thank Rielle Hoeg and Sue Abbott of Birds Canada for information on Storm-petrel strandings in Nova Scotia. We thank Eleanor Gnam and Tony Bicknell for information on the breeding status of Storm-petrels found on Gull Island.</p> <br></br><br></br>

        </div>

      </main>

      <Footer />
    </div>
  );
}