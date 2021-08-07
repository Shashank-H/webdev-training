import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header'
import { QuoteCategoryCard } from '../../components/QuoteCategoryCard';
import { QuoteOfTheDay } from '../../components/QuoteOfTheDay';
import { useHistory } from 'react-router'

import './Home.css'


export function Home(props){

  const history = useHistory();
  const [qod,setQod] = useState()
  const [categories,setCategories] = useState();
  useEffect(() => {
    getQod();
    getCategories();
  }, []);

  useEffect(() => {
    console.log(qod);
  }, [qod]);

  function getQod() {
    fetch("https://quotes.rest/qod")
      .then((res) => res.json())
      .then((res) => setQod(res.contents.quotes[0]));
  }
  
  function getCategories() {
    fetch("https://quotes.rest/qod/categories?detailed=true")
      .then((res) => res.json())
      .then((res) => setCategories(res.contents.categories))
  }

  return(
    <>
    <Header />
    
    <div className="home">
      <div className="home-qod">
        <QuoteOfTheDay image={qod?.background} category={qod?.category} content={qod?.quote} author={qod?.author} tags={qod?.tags||{}} />
      </div>

      {
        categories?.map((category)=>{
          function goToCategory(){
            history.push('/quote/'+category.name);
          }
          return (
            <QuoteCategoryCard onClick={goToCategory} key={category.name} background={category.background} name={category.name} title={category.title} />
          )
        })
      }
      
      {/* <QuoteCategoryCard background="https://picsum.photos/200" name="management" title="management quote of the day" />
      <QuoteCategoryCard background="https://picsum.photos/200" name="management" title="management quote of the day" />
      <QuoteCategoryCard background="https://picsum.photos/200" name="management" title="management quote of the day" /> */}
      
    </div>
    </>
  )
}