import React from "react";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import { Fade } from "react-reveal";


export default function Twitter() {

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="tw-main-div">   
        <div className="section-heading">Twitter Feed</div>    
        <div className="centerContent">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName ="DjkhutySA"
            options={{height:800,width: 1200, backgroundColor: "#000"}}
            placeholder="Can't load? Check privacy protection settings"
            autoHeight= {false}
            borderColor= "#000"
            backgroundColor="#000"
            noFooter= {true}
            theme="dark"
          />
        </div>
      </div>
    </Fade>
  );  
}