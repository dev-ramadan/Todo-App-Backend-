export const paginate = (total, page = 1, limit = 5) => {
  const skip = (page - 1) * limit;

  return {
    page,
    limit,
    skip,
    totalItems: total,
    totalPages: Math.ceil(total / limit),
    hasNext: page * limit < total,
    hasPrev: page > 1,
  };
};
