'use client'
import React from 'react';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

const MainGridHome = () => {
  return (
    <div>
      <section className ='section1'>
        <h1>Work Hard To</h1>
        <h2>Get Better Life</h2>
        <p>
          Starting a workout routine can be challenging, especially when you've
          had trouble maintaining motivation in the past or if you’re working
          out for the first time. While the benefits of regular exercise are
          countless, finding the drive to get to the gym or go for a run isn’t
          always easy.
        </p>
        <Button variant='danger'>Get Started</Button>
      </section>
      </div>
  );
};

export default MainGridHome;