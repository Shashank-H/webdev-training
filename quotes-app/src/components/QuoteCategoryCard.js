import { imageBase } from "../constants/consts";
import './QuoteCategoryCard.css';

export function QuoteCategoryCard({background,name, title, onClick}){
  return (
    <div className="category-card" onClick={onClick}>
      <img src={imageBase+background} className="category-bg" />
      <div className="category-card__main">
        <h3 className="category-name">{name}</h3>
        <h2 className="category-title">{title}</h2>
      </div>
    </div>
  )
}