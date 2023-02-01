import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';


export default function SummaryText(props) {
  let content
  if (props.trendingOverview) {
    content = props.trendingOverview
  } else if (props.searchSummary) {
    content = props.searchSummary
  } 

  let limit = 50


  const [showAll, setShowAll] = useState(false);

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);

  if (content.length <= limit) {
    // there is nothing more to show
    return <div>{content}</div>
  }
  if (showAll) {
    // We show the extended text and a link to reduce it
    return <div>
      {content}
      <br />
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