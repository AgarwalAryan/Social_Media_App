
import { Models } from 'appwrite';
import GridPostList from './GridPostList';
import Loader from './Loader';
type SearchResultProps= {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];

}
const SearchResult = ({ isSearchFetching, searchedPosts}:
  SearchResultProps) => {
    if(isSearchFetching) return <Loader />

    if(searchedPosts.document.length>0) {
      return(
        <GridPostList posts={ searchedPosts.document} />
      )
    }

  return (
    <p className= "text-light-4 mt-10 text-center w-full">No results found</p>
  )
}

export default SearchResult