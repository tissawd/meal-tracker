import { useHistory } from "react-router";

export const BackButton = () => {
  const history = useHistory();
 
  return (
    <button className="back-button" onClick={history.goBack}>Back</button>
  )
}