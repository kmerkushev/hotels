import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsCommentReadyAction } from "../../redux/offer/actions";
import { getIsCommentReady } from "../../redux/offer/selectors";
import { textLimit } from "../../const";

const CommentTextField = () => {
  const isCommentReady = useSelector(getIsCommentReady);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const text = evt.target.value;
    if ((text.length >= textLimit.MIN_SYMBOLS) && (text.length <= textLimit.MAX_SYMBOLS) && !isCommentReady) {
      dispatch(setIsCommentReadyAction(true));
    } else if (((text.length < textLimit.MIN_SYMBOLS) || (text.length > textLimit.MAX_SYMBOLS)) && isCommentReady) {
      dispatch(setIsCommentReadyAction(false));
    }
  };

  return <React.Fragment>
    <textarea className="reviews__textarea form__textarea" id="review" name="review" onChange={handleChange}
      placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
  </React.Fragment>;
};

export default CommentTextField;
