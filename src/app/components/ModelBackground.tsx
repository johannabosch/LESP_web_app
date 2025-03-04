"use client";

import React from 'react';

const ModelBackground: React.FC = () => {

    return(

        <div className = "px-10">

            <h1>
            Eastern Canadian Leach’s Storm-petrel Integrated Population Model    
            </h1>
            <p className = "flex-grow text-gray-700 indent-8 mb-5">
            Monitoring wildlife is challenging, especially when species are widespread and subject to different pressures across their range. In these scenarios, monitoring at one or a limited number of sites may provide detailed information on trends and possible stressors but may not accurately reflect the dynamics of the whole population. On the other hand, limited monitoring at a number sites may not provide sufficient power to determine overall trends and are unlikely to provide deep insights into population drivers.
            </p>
            
            <p className = "flex-grow text-gray-700 indent-8">
            Colonial birds represent an interesting case, as most species are amenable to intensive monitoring, including capturing and handling, and large numbers of individuals can be monitored at one site or even a single study plot. However, working on colonies generally requires dedicated and trained staff, and deploying this level of intensive monitoring at multiple colonies may not be possible. This limits knowledge of how well the monitored sites reflect the dynamics of regional populations. Large-scale stressors may affect colonies similarly, while local stressors (such as predation on specific islands), may overwhelm large-scale pressures and monitoring data will only reflect local conditions. Moreover, even when some level of limited monitoring is possible at multiple sites, the challenge then becomes combining these data sources in a way that accounts for their inherent variation in sample size, estimation error, and site-level characteristics.
            </p>
           
        </div>
    )
}


export default ModelBackground;

