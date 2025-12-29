"use client";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Loader2 = () => {
  const textRef = useRef();

  useEffect(() => {
    const messages = ["Loading...", "Coming Soon...", "Stay Tuned!"];
    let current = 0;

    const typeMessage = () => {
      const text = messages[current];
      const tl = gsap.timeline({
        onComplete: () => {
          // Move to next message
          current = (current + 1) % messages.length;
          typeMessage(); // recursion for infinite loop
        },
      });

      tl.to({}, { duration: 0.5 }) // small delay
        .to(textRef.current, {
          duration: 1,
          text: text,
          ease: "none",
          onUpdate: function () {
            const length = Math.floor(this.progress() * text.length);
            textRef.current.innerText = text.substring(0, length);
          },
        })
        .to(textRef.current, { duration: 0.5, opacity: 0 })
        .to(textRef.current, {
          duration: 0,
          opacity: 1,
          onComplete: () => {
            textRef.current.innerText = ""; // reset text for next message
          },
        });
    };

    typeMessage();
  }, []);

  return (
    <PreloaderWrapper>
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control close" />
            <div className="control minimize" />
            <div className="control maximize" />
          </div>
        </div>
        <div className="text" ref={textRef}></div>
      </div>
    </PreloaderWrapper>
  );
};

const PreloaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .terminal-loader {
    border: 0.1em solid #333;
    background-color: #1a1a1a;
    color: #0f0;
    font-family: "Courier New", Courier, monospace;
    font-size: 1em;
    padding: 1.5em 1em;
    width: 12em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
  }

  .terminal-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1.5em;
    background-color: #333;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 0 0.4em;
    box-sizing: border-box;
  }

  .terminal-controls {
    float: right;
  }

  .control {
    display: inline-block;
    width: 0.6em;
    height: 0.6em;
    margin-left: 0.4em;
    border-radius: 50%;
    background-color: #777;
  }

  .control.close {
    background-color: #e33;
  }

  .control.minimize {
    background-color: #ee0;
  }

  .control.maximize {
    background-color: #0b0;
  }

  .terminal-title {
    float: left;
    line-height: 1.5em;
    color: #eee;
  }

  .text {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    border-right: 0.2em solid green;
    margin-top: 1.5em;
    font-weight: bold;
    letter-spacing: 0.05em;
    animation: blinkCursor 0.5s step-end infinite alternate;
  }

  @keyframes blinkCursor {
    50% {
      border-right-color: transparent;
    }
  }
`;

export default Loader2;
