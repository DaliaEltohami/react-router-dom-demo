import { Link } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
  console.log("delete action");
  const deleted = await deleteContact(params.contactId);
  return deleted;
}

export default function Delete() {
  return (
    <div>
      <h4>Contact Deleted</h4>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}
