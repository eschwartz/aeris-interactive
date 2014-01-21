define(['ai/util'], function(_) {
  /**
   * Options for an {aeris.geolocate.AbstractGeolocateService}
   *
   * @class aeris.geolocate.options.GeolocateServiceOptions
   * @constructor
   *
   * @param {Object=} opt_options
   * @param {Boolean=} opt_options.enableHighAccuracy
   * @param {number} opt_options.timeout
   * @param {number} opt_options.maximumAge
   */
  var GeolocateServiceOptions = function(opt_options) {
    var options = _.defaults(opt_options || {}, this.getDefaultOptions());

    /** @type {Boolean}*/
    this.enableHighAccuracy = options.enableHighAccuracy;

    /** @type {number} */
    this.maximumAge = options.maximumAge;

    /** @type {number} */
    this.timeout = options.timeout;
  };


  /**
   * @return {Object}
   */
  GeolocateServiceOptions.prototype.getDefaultOptions = function() {
    return _.clone(GeolocateServiceOptions.DEFAULT_OPTIONS);
  };


  /**
   * @static
   * @type {Object}
   */
  GeolocateServiceOptions.DEFAULT_OPTIONS = {
    enableHighAccuracy: false,
    maximumAge: 30000,
    timeout: 10000
  };


  return GeolocateServiceOptions;
});