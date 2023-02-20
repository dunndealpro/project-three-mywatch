import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import SearchItem from '../SearchItem/SearchItem';

export default function SearchResults(props) {

    return (
        <>
            {props.searchResults.results ?
                <div>
                    <div>
                        <h1>Search Results</h1>
                    </div>
                    <Container fluid className='text-center'>
                        <Row fluid className="justify-content-center">
                            {props.searchResults.results && props.searchResults.results.map((result) => (
                                <SearchItem
                                    key={result.id}
                                    result={result}
                                    handleAddToMyWatch={props.handleAddToMyWatch}
                                    mwSearch={props.mwSearch}
                                    watched={props.watched}
                                    notWatched={props.notWatched}
                                    myActors={props.myActors}
                                />
                            ))}
                        </Row>
                    </Container>
                </div>
                :
                <div></div>
            }
        </>
    )
}
