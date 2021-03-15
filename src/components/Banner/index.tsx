import { Box, BoxProps } from "@chakra-ui/react"
import React, { useEffect, useState, useRef } from "react"
import ImgMetaBanner from "../../assets/img/img-metabanner.png"
import bannerCity from "../../assets/img/banner-city.png"
import bannerPlanet from "../../assets/img/banner-planet.png"
import bannerCrane from '../../assets/crane.svg';
import bannerStar from '../../assets/banner-star.svg';
import bannerCrane1 from '../../assets/banner-planet1.svg';
import bannerMeta from '../../assets/banner-meta.png';
import { ReactSVG } from 'react-svg'
import Head from "next/head";

import styled, { keyframes } from 'styled-components';
import { useMount } from 'ahooks';

import styles from './index.module.scss';

const StyledWrapper = styled.div`
width: 100%;
height: 1000px;
background-position: center;
background-repeat: no-repeat;
background-color: #542DE0;
background-size: cover;
/* background-image: url(${ImgMetaBanner}); */
position: relative;
overflow: hidden;

// default 1920

.bc {
  position: absolute;
  left: -170px;
  bottom: -6px;
  width: 1444px;
  height: 400px;
  z-index: 1;
  overflow: hidden;

  @media screen and (min-width: 1921px) {
    left: 0
  }

  @media screen and (max-width: 1680px) {
    left: -400px;
    width: 1200px;
    height: 332.41px;
  }

  @media screen and (max-width: 1200px) {
    left: -1000px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }

  img {
    height: 100%;
  }
}

.planet {
  height: 174px;
  left: 50px;
  position: absolute;
  top: 40px;
  z-index: 3;
  animation: rotateCrane1 linear 60s infinite;
  @media screen and (max-width: 1680px) {
    height: 150px;
    top: 50px;
  }
  @media screen and (max-width: 768px) {
    height: 100px;
  }
}

.crane {
  position: absolute;
  right: -50px;
  bottom: -6px;
  z-index: 2;

  @media screen and (min-width: 1921px) {
    right: 0
  }
  @media screen and (max-width: 1920px) {
  }
  @media screen and (max-width: 1680px) {
    right: -100px;
    & > svg {
      height: 340px;
    }
  }

  @media screen and (max-width: 768px) {
    right: -50%;
    transform: translate(-50%, 0);
  }
  @media screen and (max-width: 540px) {
    transform: translate(0, 0);
    & > svg {
      height: 200px;
    }
  }

  .line {
    transform: scaleY(0);
    animation: line linear 5s infinite alternate;
  }

  .window {
    transform: translateY(0);
    animation: window linear 5s infinite alternate;
  }

  .line1 {
    transform: scaleY(0);
    animation: line1 linear 8s infinite alternate;
  }

  .window1 {
    transform: translateY(0);
    animation: window1 linear 8s infinite alternate;
  }

  .box {
    animation: box linear 10s infinite alternate;
  }

  .box1 {
    animation: box1 linear 10s infinite alternate;
  }
}

.crane1 {
  position: absolute;
  right: 550px;
  top: 120px;
  z-index: 2;
  animation: rotateCrane linear 5s infinite alternate;

  @media screen and (max-width: 1920px) {
    right: 100px;
  }

  @media screen and (max-width: 1680px) {
    & > svg {
      transform: scale(0.8);
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }

}

.meta {
  z-index: 4;
  width: 890px;
  margin: 0 auto;
  position: absolute;
  left: 44%;
  bottom: 0;
  transform: translate(-50%, 0);

  @media screen and (min-width: 1921px) {
    width: 1200px;
    bottom: -30px;
  }

  @media screen and (max-width: 1920px) {
    width: 800px;
    bottom: -50px;
  }

  @media screen and (max-width: 1680px) {
    width: 600px;
    bottom: 0px;
  }

  @media screen and (max-width: 1200px) {
    width: 500px;
  }
  @media screen and (max-width: 768px) {
    width: 400px;
  }
}

@keyframes rotateCrane {
  0% {
    transform: rotate(4deg) translateX(20px);
  }

  100% {
    transform: rotate(-4deg) translateX(-20px);
  }
}

@keyframes rotateCrane1 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes window {
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(100px);
  }
}

@keyframes line {
  0% {
    transform: scaleY(0);
  }

  100% {
    transform: scaleY(1.2);
  }
}

@keyframes window1 {
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(110px);
  }
}

@keyframes line1 {
  0% {
    transform: scaleY(0);
  }

  100% {
    transform: scaleY(1.55);
  }
}

@keyframes box {
  0% {
    transform: translateX(20px);
  }

  100% {
    transform: translateX(-66px);
  }
}

@keyframes box1 {
  0% {
    transform: translateX(-30px);
  }

  100% {
    transform: translateX(30px);
  }
}
`



export function Banner() {

    const resizeFn = () => {
        const wrapperRef: any = document.querySelector('#banner')
        console.log('wrapperRef', wrapperRef)
        const clientHeight = document.documentElement.clientHeight || document.body.clientHeight
        if (clientHeight > 600) {
            wrapperRef.style.height = `${clientHeight}px`
        } else {
            wrapperRef.style.height = '600px'
        }
    }

    useMount(() => {
        resizeFn()
        window.addEventListener('resize', resizeFn, false)
    })

    return (
        <StyledWrapper id='banner'>
          <Head>
            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script> */}
          </Head>
            <img src={bannerPlanet} alt="planet" className="planet" />
            <div className="bc">
                <img src={bannerCity} alt="city" />
            </div>
            <ReactSVG src={bannerCrane} className="crane" />
            <ReactSVG src={bannerStar} className={ `${styles.star} banner-star` } />
            <ReactSVG src={bannerCrane1} className="crane1" />
            <img src={bannerMeta} className="meta" />
        </StyledWrapper>
    )
}
