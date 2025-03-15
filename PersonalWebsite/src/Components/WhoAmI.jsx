/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//Components
import React, { useEffect }  from "react";

import "../CSS/style.css"

function isInViewport(item) {
    if (item instanceof Element) {
      const rect = item.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    } else {
      console.error('item is not a valid DOM element:', item);
      return false;
    }
  }
  
  
  function throttle(fn, wait)
  {
      let time = Date.now();
      return () => {
          if((time + wait - Date.now()) < 0)
          {
              fn();
              time = Date.now();
          }
      }
  }
  
  function onScroll()
  {
    console.log("Added item class")
    const items = document.querySelectorAll('.animate-text-transition');
      items.forEach((item) => {
          if (isInViewport(item)) {
              if(item.style.display !== "block")
              {
                  item.style.display = "block"
                  item.classList.add("absolute",
                    "lg:h-10",
                    "md:h-15",
                    "before:content-['']", 
                    "before:text-white",
                    "before:absolute",
                    "before:inset-0",
                    "before:animate-typewriter",
                    "before:bg-black",
                    "after:content-['']",
                    "after:absolute",
                    "after:inset-0",
                    "after:w-[0.125em]",
                    "after:animate-caret",
                    "after:bg-white");
                  
              }
      
          }
          else {
              if (item.style.display !== "none") {
                item.style.display = "none";
              }
            }
        });
  }
  
  

const WhoAmI = ({ img, alt, title, text, left=false }) => {
    useEffect(() => {
        const throttledScroll = throttle(onScroll, 200)
        window.addEventListener("scroll", throttledScroll)
    
        return () => {
          window.removeEventListener("scroll", throttledScroll)
        };
      }, []);
    if(!left)
    {
        return (
          <div className="card lg:card-side card-side shadow-sm">
            <figure className="w-1/3">
              <img
                src={img}
                alt={alt} />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-mono">{title}</h2>
              <p>{text}</p>
            </div>
          </div>
        );
    }
    else
    {
        return (
          <div className="card lg:card-side card-side shadow-sm">
            <div className="card-body">
              <h2 className="card-title font-mono">{title}</h2>
              <p>{text}</p>
            </div>
            <figure className="w-1/3 border-r-8">
              <img
                src={img}
                alt={alt} />
            </figure>
          </div>
        );
    }
};

export default WhoAmI;