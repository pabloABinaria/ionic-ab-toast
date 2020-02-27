import { App, Config, NavOptions, ViewController} from 'ionic-angular';
import { ToastAbOptions } from './toast-options';
/**
 * @hidden
 */
export declare class ToastAb extends ViewController {
    private _app;
    constructor(app: App, opts: ToastAbOptions, config: Config);
    /**
    * @hidden
    */
    getTransitionName(direction: string): string;
    /**
    * @hidden
    */
    isValidPosition(position: string): boolean;
    /**
     * @param {string} message  Toast message content
     */
    setMessage(message: string): ToastAb;
    /**
     * @param {number} dur  Toast message duration
     */
    setDuration(dur: number): ToastAb;
    /**
     * @param {'top'|'middle'|'bottom'} pos  Toast message position
     */
    setPosition(pos: 'top' | 'middle' | 'bottom'): ToastAb;
    /**
     * @param {string} cssClass  Toast message CSS class
     */
    setCssClass(cssClass: string): ToastAb;
    /**
     * @param {boolean} closeButton  Toast message close button
     */
    setShowCloseButton(closeButton: boolean): ToastAb;
    /**
     * Present the toast instance.
     *
     * @param {NavOptions} [navOptions={}] Nav options to go with this transition.
     * @returns {Promise} Returns a promise which is resolved when the transition has completed.
     */
    present(navOptions?: NavOptions): Promise<any>;
    /**
     * Dismiss all toast components which have been presented.
     */
    dismissAll(): void;
}
