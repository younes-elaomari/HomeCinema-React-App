import _ from "lodash";

export function Paginate(items, PageSize, currentPage) {
  const startIndex = (currentPage - 1) * PageSize;

  return _(items).slice(startIndex).take(PageSize).value();
}
