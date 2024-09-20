import { useParams } from "react-router-dom";

export default function DestroyError() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h2>erorrrrrrrr</h2>
      <p>cannot delete contact with id {params.contactId}</p>
    </div>
  );
}
