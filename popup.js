


function modifyDOM() {
   let input = document.getElementsByTagName("input")
   let textarea = document.getElementsByTagName("textarea")
   let select = document.getElementsByTagName("select")
   _handleInput(input)
   _handleTextarea(textarea)
   _handleSelect(select)
   return document.body.innerHTML;
}

//We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
chrome.tabs.executeScript({
  code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
}, (results) => {
  //Here we have just the innerHTML and not DOM structure
  console.log('Popup script:')
  console.log(results[0]);
});