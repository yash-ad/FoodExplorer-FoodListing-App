
import ItemsList from "./ItemsList";


const RestaurantCategory = (props)=>{
  // Destructuring the props.
  const {data,showItems,showTheIndex} = props;


  //Whenever the state variables update,react triggers a reconciliation process or cycle it re-renders the components or component.
// const [showItems,setShowItems] = useState(false);


//Defined `handleClick()` function to enabling and closing accordions
const handleClick = ()=>{
  // console.log("Clicked");

showTheIndex();
  //The `Javascript !` operator is the logical not operator which returns the true if its operand is false and false if its operand its true.
  // setShowItems(true);
  // setShowItems(!showItems);
}

    return(
        <div>

         <li>
          <div className="main-menu">
<div className="category-items">
          {/* Accordions Header */}
<div className="Accordions-header" onClick={handleClick}>
<h1 className="menu-title">
              {data.title}
              <span>({data.itemCards.length})</span>
            </h1>
  <span className="arrow-symbol"><span className="material-symbols-outlined">
expand_more
</span></span>
</div>  

    {/* Accordions Body  */}
{/* The logical AND operator ( && ) returns true if both operands are true and returns false otherwise. 
The operands are implicitly converted to type bool before evaluation, and the result is of type bool . 
Logical AND has left-to-right associativity. */}
{showItems && <div className="Accordions-body">
<ItemsList items={data.itemCards} />

</div>}

</div>
     </div>
        </li>
            </div>
    )
};
export default RestaurantCategory;