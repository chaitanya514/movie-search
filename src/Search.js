import React,{useState} from "react";



const Search = (props) => {
    const [searchValue,setSearchValue] = useState("")

   function handleSearchInputChanges(event){
    setSearchValue(event.target.value);
  
   }

   function resetInputField(){
       setSearchValue("")
   }

   function callSearchFunction(event){
        event.preventDefault();
        props.search(searchValue);  
        resetInputField()
   }
    return (
        <form className="search">
            <input type="text"
                onChange={handleSearchInputChanges}
                value = {searchValue}
            />
            <input type="submit"
                onClick={callSearchFunction}
                value= "SEARCH"
            />
        </form>

    )
}

export default Search;