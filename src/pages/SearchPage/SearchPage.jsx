import SearchBox from '../../components/SearchBox/SearchBox';
import SummaryText from '../../components/SummaryText/SummaryText';
import SearchResults from '../../components/SearchResults/SearchResults';

export default function SearchPage(props){

    return(
<>

<div className='text-center bg-light rounded position-relative'>


<SearchBox
                    setSearch={props.setSearch}
                    search={props.search}
                    getSearch={props.getSearch}
                />
                <SearchResults 
                    searchResults={props.searchResults}
                    handleAddToMyWatch={props.handleAddToMyWatch}
                    mwSearch={props.mwSearch}
                    watched={props.watched}
                    notWatched={props.notWatched}
                    myActors={props.myActors}
                    />
</div>
</>

        
    )
}