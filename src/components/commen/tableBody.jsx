import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, colomn) => {
    return colomn.content ? colomn.content(item) : _.get(item, colomn.path);
  };

  CreateKey = (item, colomn) => {
    return item._id + (colomn.path || colomn.key);
  };

  render() {
    const { data, colomns } = this.props;

    return (
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item._id}>
              {colomns.map((colomn) => (
                <td key={this.CreateKey(item, colomn)}>
                  <h6 className="m-2">{this.renderCell(item, colomn)}</h6>
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
