import WebAwesomeElement from '../../internal/webawesome-element.js';
import type { HTMLTemplateResult, PropertyValues } from 'lit';
/**
 * @summary Icons are symbols that can be used to represent various options within an application.
 * @documentation https://webawesome.com/docs/components/icon
 * @status stable
 * @since 2.0
 *
 * @event wa-load - Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit.
 * @event wa-error - Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit.
 *
 * @csspart svg - The internal SVG element.
 * @csspart use - The `<use>` element generated when using `spriteSheet: true`
 *
 * @cssproperty [--primary-color=currentColor] - Sets a duotone icon's primary color.
 * @cssproperty [--primary-opacity=1] - Sets a duotone icon's primary opacity.
 * @cssproperty [--secondary-color=currentColor] - Sets a duotone icon's secondary color.
 * @cssproperty [--secondary-opacity=0.4] - Sets a duotone icon's secondary opacity.
 */
export default class WaIcon extends WebAwesomeElement {
    static css: string;
    private svg;
    /** The name of the icon to draw. Available names depend on the icon library being used. */
    name?: string;
    /**
     * The family of icons to choose from. For Font Awesome Free, valid options include `classic` and `brands`. For
     * Font Awesome Pro subscribers, valid options include, `classic`, `sharp`, `duotone`, `sharp-duotone`, and `brands`.
     * A valid kit code must be present to show pro icons via CDN. You can set `<html data-fa-kit-code="...">` to provide
     * one.
     */
    family: string;
    /**
     * The name of the icon's variant. For Font Awesome, valid options include `thin`, `light`, `regular`, and `solid` for
     * the `classic` and `sharp` families. Some variants require a Font Awesome Pro subscription. Custom icon libraries
     * may or may not use this property.
     */
    variant: string;
    /** Draws the icon in a fixed-width both. */
    fixedWidth: false;
    /**
     * An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
     * can result in XSS attacks.
     */
    src?: string;
    /**
     * An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
     * ignored by assistive devices.
     */
    label: string;
    /** The name of a registered custom icon library. */
    library: string;
    connectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    disconnectedCallback(): void;
    private getIconSource;
    /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
    private resolveIcon;
    handleLabelChange(): void;
    setIcon(): Promise<void>;
    updated(changedProperties: PropertyValues<this>): void;
    render(): HTMLTemplateResult | SVGElement | null;
}
declare global {
    interface HTMLElementTagNameMap {
        'wa-icon': WaIcon;
    }
}
