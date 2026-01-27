// put custom pagination function in here

// parse json pageable response
export function parsePage(page) {
    return {
        items: page.content,
        page: page.number,
        pageSize: page.size,
        totalItems: page.totalElements,
        totalPages: page.totalPages,
        first: page.first,
        last: page.last
      };
}