import { Directive, ElementRef, OnInit, AfterViewInit, Renderer2, AfterViewChecked, Input } from '@angular/core';

/**
 * Adds validity checks to all divs with the .form-group classes
 * This can be disabled via the [disableValidityCheck] property
 */
@Directive({
    selector: '.form-group'
})
export class FormGroupDirective implements AfterViewInit, AfterViewChecked {

    @Input() disableValidityCheck = false;

    /**
     * We need to have a child with the .form-control class
     */
    private inputChild;
    /**
     * This is an optional child with the .help-block class
     */
    private labelChild;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngAfterViewInit() {
        // search for the two children which we need
        for (let element of this.elementRef.nativeElement.children) {
            if (this.inputChild == null && element.classList.contains('form-control')) {
                this.inputChild = element;
            } else if (this.labelChild == null && element.classList.contains('help-block')) {
                this.labelChild = element;
            }
        }
    }

    ngAfterViewChecked() {
        if (this.disableValidityCheck) {
            return;
        }

        // the input is invalid and has been touched
        if (!this.inputChildValid() && this.inputChildTouched()) {
            this.renderer.addClass(this.elementRef.nativeElement, 'has-error');
            if (this.labelChild) {
                this.renderer.removeClass(this.labelChild, 'hidden');
            }
        } else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'has-error');
            if (this.labelChild) {
                this.renderer.addClass(this.labelChild, 'hidden');
            }
        }
    }

    inputChildValid() { return this.inputChild != null && this.inputChild.classList.contains('ng-valid'); }
    inputChildTouched() { return this.inputChild != null && this.inputChild.classList.contains('ng-touched'); }
}
