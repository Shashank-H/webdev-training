import { QuoteOfTheDay } from "../../components/QuoteOfTheDay";
import { useHistory, useParams} from "react-router";
import { useState, useEffect } from "react";
import { Header } from '../../components/Header'

import './CategoryQuote.css';

export function CategoryQuote(){

  const history = useHistory();
  const [qod,setQod] = useState()
  const { category } = useParams();

  useEffect(() => {
    getQod(category)
  },[category])

  useEffect(() => {
    console.log(qod);
  }, [qod]);
  
  function getQod(category) {
    fetch("https://quotes.rest/qod?category="+category)
      .then((res) => res.json())
      .then((res) => setQod(res.contents.quotes[0]));
  }

  return (
    <>
      <Header />
      <div className="home-qod category-qod">
        <QuoteOfTheDay image={qod?.background} category={qod?.category} content={qod?.quote} author={qod?.author} tags={qod?.tags||{}} />
      </div>
    </>
  )
}