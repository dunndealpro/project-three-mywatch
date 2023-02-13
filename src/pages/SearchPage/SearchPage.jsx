import SearchBox from '../../components/SearchBox/SearchBox';
import SummaryText from '../../components/SummaryText/SummaryText';
import SearchResults from '../../components/SearchResults/SearchResults';
import Container from 'react-bootstrap/Container'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


export default function SearchPage(props) {

    return (
        <>

            <div >
                {/* <Col className='mx-auto' > */}
                    <Container className='text-center rounded position-relative' style={{ background: 'rgba(250,232,216,1)' }}>
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

                {/* </Col> */}
            </div>
        </>


    )
}