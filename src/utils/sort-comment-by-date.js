let sortCommentsByDate = (comments) => {
  return comments.slice().sort((a, b) => {
    let aDate = new Date(a.date).getTime();
    let bDate = new Date(b.date).getTime();
    return bDate - aDate;
  });
};

export default sortCommentsByDate;
