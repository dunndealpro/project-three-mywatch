import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function SummaryText(props) {
  let content
  if (props.trendingOverview) {
    content = props.trendingOverview
  } else if (props.searchSummary) {
    content = props.searchSummary
  } 

  let haveSeen
  let mwMediaType = props.posterUrl.media_type
  console.log(mwMediaType)

  let limit = 50
  let mwID = props.posterUrl.id

  const [showAll, setShowAll] = useState(false);
  const [display, setDisplay] = useState("I have not seen this")
  const [seen, setSeen] = useState()

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);

  let mwHaveSeen =seen
let mwTitle
let mwName

  const handleChange = (e) => {
    haveSeen = e.target.checked
    console.log(haveSeen)
    if (haveSeen) {
        console.log("true? ", haveSeen)
        setDisplay("I have seen this",)
        setSeen(true)

    } else {
        setDisplay("I have not see this")
        setSeen(false)
    }
    console.log("State: ", display)
    console.log("haveSeen? ", haveSeen)
    return( haveSeen)
}

  if (content.length <= limit) {
    // there is nothing more to show
    return <div>{content}</div>
  }
  if (showAll) {
    // We show the extended text and a link to reduce it
    return <div>
      {content}
      <br />
      <Form.Check
                            onChange={e => handleChange(e)}
                            type="switch"
                            id="custom-switch"                           
                        />
                       

                        <Form.Check.Label>{display}</Form.Check.Label>
      <Button variant="info" size="sm" onClick={() => props.handleAddToMyWatch(mwID, mwMediaType, mwTitle, mwName,mwHaveSeen)}>Add to My Watch</Button>
      <Button variant="info" size="sm" onClick={showLess}>Read less</Button>
    </div>
  }
  // In the final case, we show a text with ellipsis and a `Read more` Button
  const toShow = content.substring(0, limit) + "...";
  return <div>
    {toShow} <br />
    <Button variant="info" size="sm" onClick={showMore}>Read more</Button>
  </div>
}