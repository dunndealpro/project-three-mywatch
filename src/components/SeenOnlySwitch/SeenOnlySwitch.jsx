import Form from 'react-bootstrap/Form';
import { useState } from 'react';


export default function SeenOnlySwitch(props) {
    const [seen, setSeen] = useState(props.seenBoolean)
    const [display, setDisplay] = useState(props.display)

    let haveSeen
    let mwMediaType
    let mwTitle
    let mwName
    let mwID

    let mwMediaTypeMw
    let mwTitleMw
    let mwNameMw
    let mwIDMw
    let mwHaveSeenMw 

    let person = "person"

    if (props.watchedDetails) {
        mwMediaTypeMw = props.mediaType
        mwTitleMw = props.watchedDetails.title
        mwNameMw = props.watchedDetails.name
        mwIDMw = props.watchedDetails.id
        mwHaveSeenMw = true        
    }

    if (props.posterUrl) {
        mwMediaType = props.posterUrl.media_type
        mwTitle = props.posterUrl.title
        mwName = props.posterUrl.name
        mwID = props.posterUrl.id
    }

    if (props.cast) {
        mwMediaType = props.cast.media_type || props.cast.known_for_department
        if (props.cast.known_for_department) {
            mwMediaType = "person"
        }
        mwTitle = props.cast.title
        mwName = props.cast.name
        mwID = props.cast.id       
    }

    const handleChange = (e) => {
        haveSeen = e.target.checked
        if (haveSeen) {
            setDisplay("I have seen this",)
            setSeen(true)

        } else {
            setDisplay("I have not seen this")
            setSeen(false)
        }
        mwHaveSeen = seen
        props.handleAddToMyWatch(mwIDMw, mwName, mwMediaTypeMw, mwTitleMw, haveSeen)
        return (haveSeen)
    }

    let mwHaveSeen = seen
    mwName = mwName || mwTitle

    if (props.searchedDetails) {
        mwMediaType = props.mediaTypeMw
        mwTitle = props.searchedDetails.title
        mwName = props.searchedDetails.name
        mwID = props.searchedDetails.id       
    }

    return (
        <>
            {mwMediaTypeMw !== "person" &&
                <>
                    <Form.Check
                        checked={seen}
                        onChange={e => handleChange(e)}
                        type="switch"
                        id="custom-switch"
                    />
                    <Form.Check.Label>{display}</Form.Check.Label>
                </>
            }
        </>

    )
}