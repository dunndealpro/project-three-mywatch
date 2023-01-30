import { propTypes } from 'react-bootstrap/esm/Image'
import SearchResult from '../SearchResult/SearchResult'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function SearchResults(props) {

    return (
        <>
          
            {props.searchResults.results ?

                <div>
                    <div>
                    <h1>Search Results</h1>

                    </div>
                <Container>
                    <Row>
                    {props.searchResults.results && props.searchResults.results.map((result) => (                        
                        <SearchResult
                            key={result.id}
                            result={result}
                            handleAddToMyWatch={props.handleAddToMyWatch}
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
