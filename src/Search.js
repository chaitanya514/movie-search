import React,{useState} from "react";



const Search = ({search}) => {
    const [searchValue,setSearchValue] = useState("")

   function handleSearchInputChanges(event){
    setSearchValue(event.target.value);
  
   }

   function resetInputField(){
       setSearchValue("")
   }

   function callSearchFunction(event){
        event.preventDefault();
        search(searchValue);  
        resetInputField()
   }
    return (
        <form className="search">
            <input type="text"
                onChange={handleSearchInputChanges}
                value = {searchValue}
                placeholder="Search movies here..."
            />
            <input type="submit"
                onClick={callSearchFunction}
                value= "SEARCH"
            />
        </form>

    )
}

export default Search;