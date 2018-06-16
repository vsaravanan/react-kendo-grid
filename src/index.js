import React from "react";
import ReactDOM from "react-dom";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

import { orderBy } from "@progress/kendo-data-query";

import { products as productimp } from "./products.json";

const products = productimp.data;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.GetProducts([]),
      sort: []
      //     this.GetProducts([]);

      //allowUnsort: true,
      // multiple: false
    };
    this.sortChange = this.sortChange.bind(this);
  }

  componentDidMount() {
    // this.GetProducts([]);
  }

  sortChange(event) {
    this.setState({
      products: this.GetProducts(event.sort),
      sort: event.sort
    });
  }

  GetProducts(sort) {
    return orderBy(products, sort);
  }

  render() {
    return (
      <div>
        <Grid
          style={{ height: "300px" }}
          data={this.state.products}
          sortable={true}
          //allowUnsort: true,
          //mode: this.state.multiple ? 'multiple' : 'single'

          sort={this.state.sort}
          onSortChange={this.sortChange}
        >
          <Column field="ProductID" />
          <Column field="ProductName" title="Product Name" />
          <Column field="UnitPrice" title="Unit Price" />
        </Grid>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
