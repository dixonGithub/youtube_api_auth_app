


  <script src="https://apis.google.com/js/api.js"></script>

  <script>

      
  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("AIzaSyBhTqbqqFcuNT_NFIL9_tsQBQgTNewOcgw");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }

      // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.videos.list({
      "part": [
        "snippet,contentDetails,statistics"
      ],
      "myRating": "like"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
                const likedVideos = response.result.items;
    if (likedVideos) {
      let output = '<br><h4 class="center-align">Liked Videos</h4>';

      // Loop through videos and append output
      var count = 0;
      likedVideos.forEach(item => {
        if (!(count < 5))
          throw exception;  
        else count++;
 
        const videoId = item.id;

        output += `
          <div class="col s3">
            <h1>Test</h1>
          </div>
        `;
      });

      // Output videos
      containerForVideo.innerHTML = output;
    } else {
      containerForVideo.innerHTML = 'No Liked Videos';
    }
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "639956940266-01r3fcbb4p16pc6250g5d08j795onr4n.apps.googleusercontent.com"});
  });
  </script>
<button onclick="authenticate().then(loadClient)">authorize and load</button>
<button onclick="execute()">execute</button>
