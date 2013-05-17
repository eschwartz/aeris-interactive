define(['aeris'], function(aeris) {

  /**
   * @fileoverview Abstraction for a strategy that can handle an extension
   *               object and it's bridge to an implemented map library.
   */


  aeris.provide('aeris.maps.extension.MapExtensionStrategy');


  /**
   * An abstraction for a strategy that support an extension object.
   *
   * @constructor
   */
  aeris.maps.extension.MapExtensionStrategy = function() {};


  return aeris.maps.extension.MapExtensionStrategy;

});