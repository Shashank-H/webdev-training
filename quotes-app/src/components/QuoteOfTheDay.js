import './QuoteOfTheDay.css'

export function QuoteOfTheDay({image,category,content,author,tags}){
  
  return (
    <div className="qod-card">
      <img src={image} className="qod-bg" />
      <div className="qod-card__main">
        <h3 className="qod-category">{category}</h3>
        <h2 className="qod-content"><span className="quote-symbol">"</span>{content}<span className="quote-symbol">"</span></h2>
        <h4 className="qod-author">- {author}</h4>
        <div className="qod-tags">
          {Object.values(tags)?.map(tag=><h4 className="tag">#{tag}</h4>)}
        </div>
      </div>
    </div>
  )
}