define([
  'when'
], function(when) {
  var Promise = function() {
    this.resolver_;
    this.rejecter_;

    this.whenPromise_ = when.promise(function(resolve, reject) {
      this.resolver_ = resolve.bind(this.whenPromise_);
      this.rejecter_ = reject.bind(this.whenPromise_);
    }.bind(this));
  };

  Promise.prototype.resolve = function() {
    this.resolver_.apply(this, arguments);
  };

  Promise.prototype.reject = function() {
    this.rejecter_.apply(this, arguments);
  };


  /**
   * @method done
   */
  Promise.prototype.done = function() {
    return this.whenPromise_.done.apply(this.whenPromise_, arguments);
  };


  /**
   * @method done
   */
  Promise.prototype.fail = function() {
    return this.whenPromise_.catch.apply(this.whenPromise_, arguments);
  };


  return Promise;
});
