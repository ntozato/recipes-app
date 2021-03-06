import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ShareIcon from '../images/shareIcon.svg';
import CopyMsg from './CopyMsg';
import getRecipeDetailsPath from '../services/getPath';

const writeToClipboard = (text, callback) => {
  const removeTimeout = 2000;
  navigator.clipboard.writeText(text);
  callback(true);
  setTimeout(() => callback(false), removeTimeout);
};

const ShareButton = ({ isFoodPage, index, recipeId, testId }) => {
  const [showMsg, setShowMsg] = useState(false);
  const detailsPath = getRecipeDetailsPath(recipeId, isFoodPage);
  const domain = window.location.origin;
  const detailsUrl = `${domain}${detailsPath}`;

  return (
    <>
      <div
        role="button"
        onClick={ () => writeToClipboard(detailsUrl, setShowMsg) }
        tabIndex={ index }
        onKeyPress={ () => writeToClipboard(detailsUrl, setShowMsg) }
      >
        <img
          src={ ShareIcon }
          alt="Compartilhar receita"
          data-testid={ testId }
        />
      </div>
      { showMsg && <CopyMsg /> }
    </>
  );
};

export default ShareButton;

ShareButton.propTypes = {
  index: PropTypes.number.isRequired,
  isFoodPage: PropTypes.bool.isRequired,
  recipeId: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};
