export const success = (res, data, status = 200) =>
  res.status(status).json({ success: true, data });

export const fail = (res, error, status = 400) =>
  res.status(status).json({ success: false, error });
