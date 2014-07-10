require([
  'aeris/util',
  'aeris/maps/map'
], function(_) {
  var styles = [
    {featureType: 'landscape', stylers: [
      {saturation: -100},
      {lightness: 65},
      {visibility: 'on'}
    ]},
    {featureType: 'poi', stylers: [
      {saturation: -100},
      {lightness: 51},
      {visibility: 'simplified'}
    ]},
    {featureType: 'road.highway', stylers: [
      {saturation: -100},
      {visibility: 'simplified'}
    ]},
    {featureType: 'road.arterial', stylers: [
      {saturation: -100},
      {lightness: 30},
      {visibility: 'on'}
    ]},
    {featureType: 'road.local', stylers: [
      {saturation: -100},
      {lightness: 40},
      {visibility: 'on'}
    ]},
    {featureType: 'transit', stylers: [
      {saturation: -100},
      {visibility: 'simplified'}
    ]},
    {featureType: 'administrative.province', stylers: [
      {visibility: 'off'}
    ]},
    {featureType: 'administrative.locality', stylers: [
      {visibility: 'off'}
    ]},
    {featureType: 'administrative.neighborhood', stylers: [
      {visibility: 'on'}
    ]},
    {featureType: 'water', elementType: 'labels', stylers: [
      {visibility: 'on'},
      {lightness: -25},
      {saturation: -100}
    ]},
    {featureType: 'water', elementType: 'geometry', stylers: [
      {hue: '#ffff00'},
      {lightness: -25},
      {saturation: -97}
    ]}
  ];

  var googleMap = new google.maps.Map(document.getElementById('map-canvas'), {
    center: { lat: 39.4592, lng: -77.9678},
    zoom: 8,
    scrollwheel: false,
    styles: styles
  });

  this.aerisMap = new aeris.maps.Map(googleMap);

});

