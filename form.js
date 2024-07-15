import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

function Formm(){
    const navigate = useNavigate();
    return(
        <div>
            <h1>Form Page</h1>
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>
      <button type="button" class="btn btn-primary">Add</button>
<button type="button" class="btn btn-danger">Delete</button>
<button type="button" class="btn btn-success">Edit</button>
</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}
export default Formm;