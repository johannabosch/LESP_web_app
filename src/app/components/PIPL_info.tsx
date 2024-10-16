"use client";

import React from 'react';

const PIPL_info: React.FC = () => {
  return (
    <div className="h-auto">

      {/* Overlay content */}
      <div className="z-10 mt-[50px] left-[100px]">

        <div className="border bg-white p-[20px] w-[50vw]">
        <p style={{textIndent: '30px'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. </p>
        </div>
        

      </div>

      <img
        className="w-[280px] h-auto bottom-4 right-4" 
        src="/images/PIPL/HarryCollins2.svg"
        alt="by Harry Collins from Getty Images"
      />

    </div>
  );
};

export default PIPL_info;
