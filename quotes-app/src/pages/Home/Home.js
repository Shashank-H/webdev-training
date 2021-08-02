import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header'
import { QuoteCategoryCard } from '../../components/QuoteCategoryCard';
import { QuoteOfTheDay } from '../../components/QuoteOfTheDay';

import './Home.css'

export function Home(){

  const [qod,setQod] = useState()
  const [categories,setCategories] = useState();
  useEffect(() => {
    getQod();
  }, []);

  useEffect(() => {
    console.log(qod);
  }, [qod]);

  function getQod() {
    fetch("https://quotes.rest/qod")
      .then((res) => res.json())
      .then((res) => setQod(res.contents.quotes[0]));
  }

  return(
    <>
    <Header />
    
    <div className="home">
      <div className="home-qod">
        <QuoteOfTheDay image={qod?.background} category={qod?.category} content={qod?.quote} author={qod?.author} tags={qod?.tags||{}} />
      </div>
        <QuoteCategoryCard background="https://picsum.photos/200" name="management" title="management quote of the day" />
        <QuoteCategoryCard background="https://picsum.photos/200" name="management" title="management quote of the day" />
        <QuoteCategoryCard background="https://picsum.photos/200" name="management" title="management quote of the day" />
        
        <QuoteCategoryCard background="https://picsum.photos/200" name="management" title="management quote of the day" />
        <QuoteCategoryCard background="https://picsum.photos/200" name="management" title="management quote of the day" />
        <QuoteCategoryCard background="https://picsum.photos/200" name="management" title="management quote of the day" />
        
        <QuoteCategoryCard background="https://picsum.photos/200" name="management" title="management quote of the day" />
        <QuoteCategoryCard background="https://picsum.photos/200" name="management" title="management quote of the day" />
        <QuoteCategoryCard background="https://picsum.photos/200" name="management" title="management quote of the day" />
        
        <QuoteCategoryCard background="https://picsum.photos/200" name="management" title="management quote of the day" />
        <QuoteCategoryCard background="https://picsum.photos/200" name="management" title="management quote of the day" />
        <QuoteCategoryCard background="https://picsum.photos/200" name="management" title="management quote of the day" />
        
      </div>
    </>
  )
}