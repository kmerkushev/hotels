import { NameSpace } from "../root-reducer";

export const getIsOfferLoaded = (state) => state[NameSpace.OFFER].isOfferLoaded;
export const getComments = (state) => state[NameSpace.OFFER].comments;
export const getCurrentOffer = (state) => state[NameSpace.OFFER].currentOffer;
export const getCurrentOfferId = (state) => state[NameSpace.OFFER].currentOffer.id;
export const getIsRatingReady = (state) => state[NameSpace.OFFER].isRatingReady;
export const getIsCommentReady = (state) => state[NameSpace.OFFER].isCommentReady;
export const getIsFormReady = (state) => state[NameSpace.OFFER].getIsFormReady;
export const getSendFormError = (state) => state[NameSpace.OFFER].sendFormError;
export const getHotelsNearby = (state) => state[NameSpace.OFFER].hotelsNearby;
