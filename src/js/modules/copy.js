  import {
      showSuccess
  } from './notice';

  // copy to clipboard
  const copy = document.querySelectorAll('.js-copy');
  copy.forEach(function (element) {
      const copyButton = element.querySelector('.js-copy-button');
      const copyInput = element.querySelector('.js-copy-input');
      copyButton.onclick = function (e) {
          e.preventDefault;
          copyInput.select();
          copyInput.setSelectionRange(0, 9999);
          document.execCommand('copy');
          showSuccess('Copied');
      }
  });
  //-