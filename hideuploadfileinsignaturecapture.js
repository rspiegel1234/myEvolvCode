function sleep(ms) {  return new Promise(res => setTimeout(res, ms)); } 
let myAsyncFunc = async function() {     
await sleep(200); 
    var src = document.getElementById("form-upload-menu-id").dataset.srcElem;
    var target = document.getElementById(src);
    var typeCode = target.getAttribute('type-code');
if ( typeCode == 'ESIGN' ) {  $('[id="form-upload-menu-id"] [data-action="upload"]').attr('style','display: none;'); }
 }
$("body").on('DOMSubtreeModified', '[id="form-upload-menu-id"]', function(e) {  myAsyncFunc(); })
