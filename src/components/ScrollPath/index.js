import { CircleLevel,TextLevel } from "./ScrollElements"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import React, { useRef, useEffect } from "react"




export default function ScrollPath ()
{
    
gsap.registerPlugin(ScrollTrigger);

  const ref = useRef( null );

  useEffect( () =>
  {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".plans"),
      {
        duration:1,
        opacity: 0,
        x: -50
      },
      {
        duration:1,
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: element.querySelector(".plans"),
          start: "bottom 1000px",
          scurb:1
        }
    } );
  }, [] );

  useEffect( () =>
  {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".text"),
      {
        duration:1,
        opacity: 0,
        y: -50
      },
      {
        duration:1,
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".text"),
          start: "center 1100px",
          scurb:1
        }
    } );
  }, [] );
    
    

    return (
        <>
            
            <div ref={ref}>
                <CircleLevel className="plans">
                    <TextLevel>A1</TextLevel>
                </CircleLevel>

                <CircleLevel className="text">
                    <TextLevel>A2</TextLevel>
                </CircleLevel>
                <CircleLevel className="plans">
                    <TextLevel>B1</TextLevel>
                </CircleLevel>

                <CircleLevel className="text">
                    <TextLevel>B2</TextLevel>
                </CircleLevel>
                <CircleLevel className="plans">
                    <TextLevel>C1</TextLevel>
                </CircleLevel>

                <CircleLevel className="text">
                    <TextLevel>C2</TextLevel>
                </CircleLevel>
                </div>
        </>
    )
}