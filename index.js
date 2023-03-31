  
  document.querySelector('.read-btn').onclick = function() {
    let text = '0xdF9F658977206DdCa6f7F151aA9453E65a42E269';
    copyTextToClipboard(text);
    


}

async function copyTextToClipboard(text) {
  try {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard');
  } catch (err) {
      console.error('Error in copying text: ', err);
  }
}