
import './Block.css';

export function Block({value, id, onBlockClick}){

  function onThisBlockClick(){
    onBlockClick(id);
  }

  return (
    <div className="block" onClick={onThisBlockClick} >
      {
        value===3?"X":value<0?"":"O"
      }
    </div>
  )
}