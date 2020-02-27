import { Component, ElementRef, Renderer } from '@angular/core';
import { Config, NavParams, ViewController } from 'ionic-angular';

/**
 * @hidden
 */
var ToastAbCmp = (function () {
    function ToastAbCmp(_viewCtrl, _config, _elementRef, params, renderer) {
        this._viewCtrl = _viewCtrl;
        this._config = _config;
        this._elementRef = _elementRef;
        this.dismissTimeout = undefined;
        renderer.setElementClass(_elementRef.nativeElement, "toast-" + _config.get('mode'), true);
        this.d = params.data;
        if (this.d.cssClass) {
            this.d.cssClass.split(' ').forEach(function (cssClass) {
                // Make sure the class isn't whitespace, otherwise it throws exceptions
                if (cssClass.trim() !== '')
                    renderer.setElementClass(_elementRef.nativeElement, cssClass, true);
            });
        }
        this.id = (++toastIds);
        if (this.d.message) {
            this.hdrId = 'toast-hdr-' + this.id;
        }
    }
    ToastAbCmp.prototype.ngAfterViewInit = function () {
        var _this = this;
        // if there's a `duration` set, automatically dismiss.
        if (this.d.duration) {
            this.dismissTimeout = setTimeout(function () {
                _this.dismiss('backdrop');
            }, this.d.duration);
        }
        this.enabled = true;
    };
    ToastAbCmp.prototype.ionViewDidEnter = function () {
        var activeElement = document.activeElement;
        if (activeElement) {
            activeElement.blur();
        }
        var focusableEle = this._elementRef.nativeElement.querySelector('button');
        if (focusableEle) {
            focusableEle.focus();
        }
    };
    ToastAbCmp.prototype.cbClick = function () {
        if (this.enabled) {
            this.dismiss('close');
        }
    };
    ToastAbCmp.prototype.cbEnlaceClick = function () {
        if (this.enabled) {
            this.dismiss('enlaceClose');
        }
    };
    ToastAbCmp.prototype.dismiss = function (role) {
        clearTimeout(this.dismissTimeout);
        this.dismissTimeout = undefined;
        return this._viewCtrl.dismiss(null, role, { disableApp: false });
    };
    ToastAbCmp.decorators = [
        { type: Component, args: [{
                    selector: 'ion-toast',
                    template: '<div class="toast-wrapper" ' +
                        '[class.toast-bottom]="d.position === \'bottom\'" ' +
                        '[class.toast-middle]="d.position === \'middle\'" ' +
                        '[class.toast-top]="d.position === \'top\'"> ' +
                        '<div class="toast-container"> ' +
                        '<div class="toast-image" *ngIf="d.image"><img src="{{d.image}}"></div> ' +
                        '<div class="toast-message" id="{{hdrId}}" *ngIf="d.message">{{d.message}} <b *ngIf="d.subMessage">{{d.subMessage}}</b></div> ' +
                        '<button ion-button clear class="toast-button" *ngIf="d.showCloseButton" (click)="cbClick()"> ' +
                        '{{ d.closeButtonText || \'Close\' }} ' +
                        '</button> ' +
                        '</div> ' +
                        '<div class="toast-aviso"> '+
                        '{{d.messageAviso}}' +
                        '<div class="toast-aviso-enlace" (click)="cbEnlaceClick()">' +
                        '{{d.messageEnlaceAviso}}' +
                        '</div>' +
                        '</div>' +
                        '</div>',
                    host: {
                        'role': 'dialog',
                        '[attr.aria-labelledby]': 'hdrId',
                        '[attr.aria-describedby]': 'descId',
                    },
                },] },
    ];
    /** @nocollapse */
    ToastAbCmp.ctorParameters = function () { return [
        { type: ViewController, },
        { type: Config, },
        { type: ElementRef, },
        { type: NavParams, },
        { type: Renderer, },
    ]; };
    return ToastAbCmp;
}());
export { ToastAbCmp };
var toastIds = -1;
//# sourceMappingURL=toast-component.js.map