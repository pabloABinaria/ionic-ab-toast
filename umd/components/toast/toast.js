var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../util/util", "../app/app-constants", "./toast-component", "./toast-transitions", "../../navigation/view-controller"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var util_1 = require("../../../../ionic-angular/util/util");
    var app_constants_1 = require("../../../../ionic-angular/umd/app/app-constants");
    var toast_component_1 = require("./toast-component");
    var toast_transitions_1 = require("./toast-transitions");
    var view_controller_1 = require("../../../../ionic-angular/navigation/view-controller");
    /**
     * @hidden
     */
    var ToastAb = (function (_super) {
        __extends(ToastAb, _super);
        function ToastAb(app, opts, config) {
            if (opts === void 0) { opts = {}; }
            var _this = this;
            opts.dismissOnPageChange = util_1.isPresent(opts.dismissOnPageChange) ? !!opts.dismissOnPageChange : false;
            _this = _super.call(this, toast_component_1.ToastAbCmp, opts, null) || this;
            _this._app = app;
            // set the position to the bottom if not provided
            if (!opts.position || !_this.isValidPosition(opts.position)) {
                opts.position = TOAST_POSITION_BOTTOM;
            }
            _this.isOverlay = true;
            config.setTransition('toast-slide-in', toast_transitions_1.ToastSlideIn);
            config.setTransition('toast-slide-out', toast_transitions_1.ToastSlideOut);
            config.setTransition('toast-md-slide-in', toast_transitions_1.ToastMdSlideIn);
            config.setTransition('toast-md-slide-out', toast_transitions_1.ToastMdSlideOut);
            config.setTransition('toast-wp-slide-out', toast_transitions_1.ToastWpPopOut);
            config.setTransition('toast-wp-slide-in', toast_transitions_1.ToastWpPopIn);
            return _this;
        }
        /**
        * @hidden
        */
        ToastAb.prototype.getTransitionName = function (direction) {
            var key = 'toast' + (direction === 'back' ? 'Leave' : 'Enter');
            return this._nav && this._nav.config.get(key);
        };
        /**
        * @hidden
        */
        ToastAb.prototype.isValidPosition = function (position) {
            return position === TOAST_POSITION_TOP || position === TOAST_POSITION_MIDDLE || position === TOAST_POSITION_BOTTOM;
        };
        /**
         * @param {string} message  Toast message content
         */
        ToastAb.prototype.setMessage = function (message) {
            this.data.message = message;
            return this;
        };
        /**
         * @param {number} dur  Toast message duration
         */
        ToastAb.prototype.setDuration = function (dur) {
            this.data.duration = dur;
            return this;
        };
        /**
         * @param {'top'|'middle'|'bottom'} pos  Toast message position
         */
        ToastAb.prototype.setPosition = function (pos) {
            this.data.position = pos;
            return this;
        };
        /**
         * @param {string} cssClass  Toast message CSS class
         */
        ToastAb.prototype.setCssClass = function (cssClass) {
            this.data.cssClass = cssClass;
            return this;
        };
        /**
         * @param {boolean} closeButton  Toast message close button
         */
        ToastAb.prototype.setShowCloseButton = function (closeButton) {
            this.data.showCloseButton = closeButton;
            return this;
        };
        /**
         * Present the toast instance.
         *
         * @param {NavOptions} [navOptions={}] Nav options to go with this transition.
         * @returns {Promise} Returns a promise which is resolved when the transition has completed.
         */
        ToastAb.prototype.present = function (navOptions) {
            if (navOptions === void 0) { navOptions = {}; }
            navOptions.disableApp = false;
            navOptions.keyboardClose = false;
            return this._app.present(this, navOptions, app_constants_1.PORTAL_TOAST);
        };
        /**
         * Dismiss all toast components which have been presented.
         */
        ToastAb.prototype.dismissAll = function () {
            this._nav && this._nav.popAll();
        };
        return ToastAb;
    }(view_controller_1.ViewController));
    exports.ToastAb = ToastAb;
    var TOAST_POSITION_TOP = 'top';
    var TOAST_POSITION_MIDDLE = 'middle';
    var TOAST_POSITION_BOTTOM = 'bottom';
});
//# sourceMappingURL=toast.js.map