import type { CSSResult, CSSResultGroup, PropertyValues } from 'lit';
import { LitElement } from 'lit';
declare module 'lit' {
    interface PropertyDeclaration {
        /**
         * Specifies the property’s default value
         */
        default?: any;
        initial?: any;
    }
}
export default class WebAwesomeElement extends LitElement {
    #private;
    /**
     * One or more CSS files to include in the component's shadow root. Host styles are automatically prepended. We use
     * this instead of Lit's styles property because we're importing CSS files as strings and need to convert them using
     * unsafeCSS.
     */
    static css?: CSSResultGroup | CSSResult | string | (CSSResult | string)[];
    /**
     * Override the default styles property to fetch and convert string CSS files. Components can override this behavior
     * by setting their own `static styles = []` property.
     */
    static get styles(): CSSResultGroup;
    initialReflectedProperties: Map<string, unknown>;
    internals: ElementInternals;
    dir: string;
    lang: string;
    didSSR: boolean;
    constructor();
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    protected willUpdate(changedProperties: Parameters<LitElement['willUpdate']>[0]): void;
    protected firstUpdated(changedProperties: Parameters<LitElement['firstUpdated']>[0]): void;
    protected update(changedProperties: PropertyValues<this>): void;
    /**
     * Methods for setting and checking custom states.
     */
    customStates: {
        /** Adds or removes the specified custom state. */
        set: (customState: string, active: boolean) => void;
        /** Determines whether or not the element currently has the specified state. */
        has: (customState: string) => boolean;
    };
    /**
     * Given a native event, this function cancels it and dispatches it again from the host element using the desired
     * event options.
     */
    relayNativeEvent(event: Event, eventOptions?: EventInit): void;
}
