var example = function(fileObject, fileName, config, onUploadSuccess, onUploadFail){ // filename isn't strictly necessary, just useful for console logging
  var target = config.capturedMedia.REMOTE_API.endpoint + '/image';
  console.log('Uploading image ' + fileName + ' to ' + target);

  if(typeof(fileObject) !== undefined) {
    console.log('File object: ' + JSON.stringify(fileObject));

    var rdr = new FileReader();

    rdr.onloadend = function(evt) {
      var imageBlob = new Blob([new Uint8Array(evt.target.result)], {
        'type': 'image/jpeg', // you might want to parameterise (or omit?) this, I've already tried deriving from Blob to no avail
        });

      // https://blog.garstasio.com/you-dont-need-jquery/ajax/ - thank you!!
      var dataFields = new FormData();
      dataFields.append('image', imageBlob);
      dataFields.append('type', 'file');
      if (config.capturedMedia.hasOwnProperty('album')) {
        dataFields.append('album', config.capturedMedia.album);
      }
      var post = new XMLHttpRequest();
      post.open('POST', target);
      post.setRequestHeader('Authorization', 'Bearer ' + config.capturedMedia.REMOTE_API.OAuth.access_token);
      post.send(dataFields);

      post.onloadend = function(evt) {
        onUploadSuccess.call(evt) || function(evt) { 
          console.log('Uploaded image from ' + fileName + ' to ' + target);
          var responseJSON = JSON.parse(post.responseText);
          console.log(JSON.stringify(responseJSON.data));
          // do someting with responseJSON
          }();
    };

      post.onerror = function(err) { // untested
        onUploadFail || function(err) {
          console.log('Failed uploading image from ' + fileName + ': ' + JSON.stringify(err));
          console.log('Output: ' + post.responseText);
          }();
        };

      };
      
    // rdr.error = function {} // TODO
    
    rdr.readAsArrayBuffer(fileObject);
  }
  else {
    console.log("Upload won't work without file system stuff, maybe implement a fix later");
  }
}
