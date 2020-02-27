import { AfterViewInit, ElementRef, Renderer } from '@angular/core';
import { Config, NavParams, ViewController } from 'ionic-angular';

/**
 * @hidden
 */
export declare class ToastAbCmp implements AfterViewInit {
    _viewCtrl: ViewController;
    _config: Config;
    _elementRef: ElementRef;
    d: {
        message?: string;
        subMessage?: string;
        messageAviso?: string;
        cssClass?: string;
        duration?: number;
        showCloseButton?: boolean;
        closeButtonText?: string;
        dismissOnPageChange?: boolean;
        position?: string;
    };
    descId: string;
    dismissTimeout: number;
    enabled: boolean;
    hdrId: string;
    id: number;
    constructor(_viewCtrl: ViewController, _config: Config, _elementRef: ElementRef, params: NavParams, renderer: Renderer);
    ngAfterViewInit(): void;
    ionViewDidEnter(): void;
    cbClick(): void;
    dismiss(role: string): Promise<any>;
}
