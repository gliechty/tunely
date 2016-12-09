/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
var sampleAlbums = [];
sampleAlbums.push({
             artistName: 'Ladyhawke',
             name: 'Ladyhawke',
             releaseDate: '2008, November 18',
             genres: [ 'new wave', 'indie rock', 'synth pop' ]
           });
sampleAlbums.push({
             artistName: 'The Knife',
             name: 'Silent Shout',
             releaseDate: '2006, February 17',
             genres: [ 'synth pop', 'electronica', 'experimental' ]
           });
sampleAlbums.push({
             artistName: 'Juno Reactor',
             name: 'Shango',
             releaseDate: '2000, October 9',
             genres: [ 'electronic', 'goa trance', 'tribal house' ]
           });
sampleAlbums.push({
             artistName: 'Philip Wesley',
             name: 'Dark Night of the Soul',
             releaseDate: '2008, September 12',
             genres: [ 'piano' ]
           });
/* end of hard-coded data */

// var ajax = $.get("http://localhost:3000/api/albums");
//   $(document).ready(function(albums){
//     for (i=0; i<albums.length; i++){

//     }
//   });


// var appendAlbums =
//   $.ajax({
//   dataType: "json",
//   url: "http://localhost:3000/api/albums",
//   success: function(data){
//   event.preventDefault();
//   var div = $("#albums");
//     for (var i=0; i<data.length; i++){
//       div.append(data[i]);
//     }
//   }
//   });

// console.log("getting this far");
$(document).ready(function(){
  console.log("maybe?");
  $.get('/api/albums', function(response){
    console.log(response);
    for (i=0; i<(response).length; i++){
    $('#albums').append(renderAlbum(response[i]));
  //   for (i=0; i<response.albums.length; i++){
  //     console.log("for loop");
  //     var album = renderAlbum(response.albums[i]);
  //     console.log("album is ");
  //     $("div#albums").append(album);   
  //   }
  //   $("#albums").append(renderAlbum(album));
    }
  });
});


// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album:', album);

  var albumHtml =
  "        <!-- one album -->" +
  "        <div class='row album' data-album-id='" + album.id + "'>" +
  "          <div class='col-md-10 col-md-offset-1'>" +
  "            <div class='panel panel-default'>" +
  "              <div class='panel-body'>" +
  "              <!-- begin album internal row -->" +
  "                <div class='row'>" +
  "                  <div class='col-md-3 col-xs-12 thumbnail album-art'>" +
  "                     <img src='" + "http://placehold.it/400x400'" +  " alt='album image'>" +
  "                  </div>" +
  "                  <div class='col-md-9 col-xs-12'>" +
  "                    <ul class='list-group'>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Album Name:</h4>" +
  "                        <span class='album-name'>" + album.name + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Artist Name:</h4>" +
  "                        <span class='artist-name'>" +  album.artistName+ "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Released date:</h4>" +
  "                        <span class='album-releaseDate'>" + album.releaseDate + "</span>" +
  "                      </li>" +
  "                    </ul>" +
  "                  </div>" +
  "                </div>" +
  "                <!-- end of album internal row -->" +

  "              </div>" + // end of panel-body

  "              <div class='panel-footer'>" +
  "              </div>" +

  "            </div>" +
  "          </div>" +
  "          <!-- end one album -->";
  return albumHtml;
  }
// //   // render to the page with jQuery
//   $(document).ready(function(data){
//     for (i=0; i<sampleAlbums.length;i++){
//       var newAlbum = renderAlbum(sampleAlbums[i]);
//       $('#albums').append(newAlbum);
//     }
// });

