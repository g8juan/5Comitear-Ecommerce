import React, { useState } from 'react';

export const DEFAULT_CARD_STATE = {
    cardNumber: '"#### #### #### ####',
    cardHolder: 'FULL NAME',
    cardMonth: '',
    cardYear: '',
    cardCVV: '',
    isFlipped: false,
    currentFocusedElm: null,
};

export const cardContext = React.createContext(DEFAULT_CARD_STATE);

export const useCard = () => {
    // eslint-disable-next-line
    const [cardNumber, setCardNumber] = useState(DEFAULT_CARD_STATE.cardNumber);
    // eslint-disable-next-line
    const [cardHolder, setCardHolder] = useState(DEFAULT_CARD_STATE.cardHolder);
    // eslint-disable-next-line
    const [cardMonth, setCardMonth] = useState(DEFAULT_CARD_STATE.cardMonth);
    // eslint-disable-next-line
    const [cardYear, setCardYear] = useState(DEFAULT_CARD_STATE.cardYear);
    // eslint-disable-next-line
    const [cardCVV, setCardCVV] = useState(DEFAULT_CARD_STATE.cardCVV);
    // eslint-disable-next-line
    const [isFlipped, setIsFlipped] = useState(DEFAULT_CARD_STATE.isFlipped);
    // eslint-disable-next-line
    const [currentFocusedElm, setCurrentFocusedElm] = useState(DEFAULT_CARD_STATE.currentFocusedElm);
};

export const useCardState = () => {};
