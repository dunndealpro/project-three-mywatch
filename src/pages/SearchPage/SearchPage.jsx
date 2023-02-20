import Container from 'react-bootstrap/Container'

import SearchBox from '../../components/SearchBox/SearchBox';
import SearchResults from '../../components/SearchResults/SearchResults';

export default function SearchPage(props) {

    return (
        <>
            <div >
                <Container className='text-center rounded position-relative' style={{ background: 'rgba(226,206,153,1)' }}>
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
                </Container>
            </div>
        </>
    )
}