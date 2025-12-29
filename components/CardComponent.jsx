import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Card = ({ title, description, badge, href }) => {
    return (
        <StyledWrapper>
            <div className="flex">
                <div className="parent cursor-pointer">
                    <div className="card">
                        {/* LOGO / CIRCLES */}
                        <div className="logo">
                            <span className="circle circle1" />
                            <span className="circle circle2" />
                            <span className="circle circle3" />
                            <span className="circle circle4" />
                            <span className="circle circle5">
                                <svg viewBox="0 0 29.667 31.69" className="svg">
                                    <path d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628Z" />
                                </svg>
                            </span>
                        </div>

                        <div className="glass" />

                        {/* CONTENT */}
                        <div className="content">
                            <div className="header">
                                <h3>{title}</h3>
                                <span className="badge">{badge}</span>
                            </div>

                            <p className="description">{description}</p>

                            <Link target="_blank" href={href} className="explore">
                                Explore →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .parent {
    width: 370px;
    height: 360px;
    perspective: 1200px;
  }

  .card {
    height: 100%;
    border-radius: 40px;
    background: linear-gradient(
      135deg,
      #1f1f1f 0%,
      #2c2c2c 50%,
      #111111 100%
    );
    transition: all 0.6s ease-in-out;
    transform-style: preserve-3d;
    box-shadow:
      rgba(0, 0, 0, 0.6) 40px 50px 25px -40px,
      rgba(0, 0, 0, 0.4) 0px 25px 25px -5px;
  }

  .glass {
    position: absolute;
    inset: 10px;
    border-radius: 45px;
    border-top-left-radius: 100%;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.06) 0%,
      rgba(255, 255, 255, 0.28) 100%
    );
    transform: translate3d(0, 0, 30px);
    border-right: 1px solid rgba(255, 255, 255, 0.18);
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  }

  .content {
    padding: 90px 50px 0 25px;
    transform: translate3d(0, 0, 31px);
  }

  .content .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content h3 {
    color: #e5e7eb;
    font-weight: 800;
    font-size: 22px;
  }

  .content .badge {
    background: #6366f1;
    color: #fff;
    font-size: 11px;
    padding: 4px 10px;
    border-radius: 999px;
  }

  .content .description {
    color: #9ca3af;
    font-size: 14px;
    margin-top: 14px;
    line-height: 1.6;
  }

  .content .explore {
    display: inline-block;
    margin-top: 16px;
    font-size: 13px;
    font-weight: 600;
    color: #818cf8;
    text-decoration: none;
  }

  .content .explore:hover {
    text-decoration: underline;
  }

  /* 🔥 UPDATED CIRCLE COLORS */
  .logo {
    position: absolute;
    left: 0;
    top: 0;
    transform-style: preserve-3d;
  }

  .logo .circle {
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50%;
    background: radial-gradient(
      circle at top left,
      rgba(99, 102, 341, 0.15),
      rgba(31, 41, 55, 0.35)
    );
    box-shadow: rgba(0, 0, 0, 0.6) 10px 10px 25px;
    transition: all 0.6s ease-in-out;
  }

  .logo .circle1 {
    width: 160px;
    transform: translate3d(0, 0, 25px);
    top: 10px;
    left: 10px;
  }

  .logo .circle2 {
    width: 130px;
    transform: translate3d(0, 0, 45px);
    top: 12px;
    left: 12px;
    transition-delay: 0.3s;
  }

  .logo .circle3 {
    width: 100px;
    transform: translate3d(0, 0, 65px);
    top: 15px;
    left: 15px;
    transition-delay: 0.6s;
  }

  .logo .circle4 {
    width: 70px;
    transform: translate3d(0, 0, 85px);
    top: 20px;
    left: 20px;
    transition-delay: 0.9s;
  }

  .logo .circle5 {
    width: 40px;
    transform: translate3d(0, 0, 105px);
    top: 25px;
    left: 25px;
    display: grid;
    place-content: center;
    transition-delay: 1.2s;
  }

  .logo .circle5 .svg {
    width: 18px;
    fill: #e5e7eb;
  }

  .parent:hover .card {
    transform: rotate3d(1, -1, 0, 25deg);
  }

  .parent:hover .logo .circle2 {
    transform: translate3d(0, 0, 65px);
  }

  .parent:hover .logo .circle3 {
    transform: translate3d(0, 0, 85px);
  }

  .parent:hover .logo .circle4 {
    transform: translate3d(0, 0, 105px);
  }

  .parent:hover .logo .circle5 {
    transform: translate3d(0, 0, 125px);
  }
`;

export default Card;
