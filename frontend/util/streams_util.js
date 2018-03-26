export const fetchStreams = (userID) => {
  return $.ajax({
    method: "GET",
    url:"http://localhost:3000/streams",
    data: userID
  });
};
