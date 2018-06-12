import React from "react";
import ReactDOM from "react-dom";
import {
  Grid,
  GridColumn as Column,
  GridCell
} from "@progress/kendo-react-grid";

class CustomCell extends GridCell {
  render() {
    return (
      <td>
        <input
          disabled
          type="checkbox"
          checked={this.props.dataItem[this.props.field]}
        />
      </td>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridData: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:2990/products")
      .then(res => res.json())
      .then(res => this.setState({ gridData: res.data }));
  }

  render() {
    return (
      <div>
        <Grid style={{ maxHeight: "400px" }} data={this.state.gridData}>
          <Column field="ProductID" title="ID" width="50px" />
          <Column field="ProductName" title="Name" width="250px" />
          <Column field="Category.CategoryName" title="CategoryName" />
          <Column field="UnitPrice" title="Price" width="80px" />
          <Column field="UnitsInStock" title="In stock" width="80px" />
          <Column
            field="Discontinued"
            title="Discontinued"
            width="120px"
            cell={CustomCell}
          />
        </Grid>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
