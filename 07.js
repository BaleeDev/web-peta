// variabel
var map;
var RuteTampil;
var RuteService;
var PasanganTitik = [];
var no=1;

// function haversine_distance(mk1, mk2) {
//     var R = 3958.8; // Radius of the Earth in miles
//     var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
//     var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
//     var difflat = rlat2-rlat1; // Radian difference (latitudes)
//     var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

//     var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
//     return d;
//   }


// menampilkan peta
function initMap(){
    // menentukan kordinat peta
    var mapOptios={
        // center atau kordinat pada peta yang akan ditampilkan
        center: new google.maps.LatLng(-8.373908,116.277707),
        // zoom peta
        zoom: 12,
        // type map
        mapTypeId:google.maps.MapTypeId.HYBRID
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptios);

    // ketika peta di tekan
    map.addListener('click', function(e){
        // membuat marker
        var marker = new google.maps.Marker({
            position: e.latLng,
            map: map,
            label: String(no)
        });
        PasanganTitik.push(e.latLng);
        no +=1;
    });
   
}

// function cek(){
//      // Locations of landmarks
//   const dakota = PasanganTitik[0];
//   const frick = PasanganTitik[1];
//    // The markers for The Dakota and The Frick Collection
//    var mk1 = new google.maps.Marker({position: dakota, map: map});
//    var mk2 = new google.maps.Marker({position: frick, map: map});
//    // Draw a line showing the straight distance between the markers
//     var line = new google.maps.Polyline({path: [dakota, frick], map: map});
//     // Calculate and display the distance between markers
//     var distance = haversine_distance(mk1, mk2);
//     document.getElementById('msg').innerHTML = "Distance between markers: " + distance.toFixed(2) + " mi.";
// }
// fungsi melihat route
// function LihatRute(){
//     var pilihan = document.getElementById('jenis').value;
//     // mengambil destination
//     var request = {
//         origin: PasanganTitik[0],
//         destination: PasanganTitik[1],
//         // travelMode: googel.maps.TravelMode.TravelMode[pilihan]
//         travelMode: 'DRIVING'
//     };
//     RuteService = new google.maps.DirectionsService();
//     // untuk menampilkan rute
//     RuteService.route(request, function(response, status){
//         if(status == google.maps.DirectionsStatus.OK){
//             // RuteTampil = new google.maps.DirectionsRenderer();
//             // RuteTampil.setDirections(response);
//             // RuteTampil.setMap(map);
//             // document.getElementById('distance').innerHTML = result.routes[0].legs[0]
//             // .distance.text;
//             alert(result.routes[0].legs[0]
//                 .distance.text);
//         }else{
//             // alert('Informasi rute tidak dapat ditampilkan!');
//             alert(result.routes[0].legs[0]
//                 .distance.text);
//         }
//         no=0;
//         PasanganTitik.length=0;
//     });
// }

