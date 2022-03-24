import React from "react";

import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ data, colomns, sortColomn, onSort }) => {
  return (
    <table className="table">
      <TableHeader colomns={colomns} sortColomn={sortColomn} onSort={onSort} />
      <TableBody data={data} colomns={colomns} />
    </table>
  );
};

export default Table;
