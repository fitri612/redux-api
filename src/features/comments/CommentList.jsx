import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "./commentSlice";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Loader from "../../loaders/loader";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const CommentList = () => {
  const allComments = useSelector((state) => state.comments.entities);
  const loading = useSelector((state) => state.comments.loading);
  const dispatch = useDispatch();
  const doFetchComments = () => {
    dispatch(fetchComments());
  };

  return (
    <Container>
      <ToastContainer  />
      <h1 className="mt-4">Comments Data</h1>
      <div className="mt-4">
        <Button
          onClick={doFetchComments}
          className="btn btn-dark"
        >
          Get Data
        </Button>
      </div>
      {loading && <Loader />}
      <Table striped className="text-start mt-4">
        <thead>
          <tr align="center" className="table-dark">
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {allComments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CommentList;
