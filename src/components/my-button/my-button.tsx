import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
    tag: 'my-button',
    styleUrl: 'my-button.css',
    shadow: true
})
export class MyButton {

    @Prop() text: string;
    @Prop() size: string;

    @Event()
    buttonClicked: EventEmitter<void>;

    handleClick() {
        console.log('[inside component] Button clicked');
        this.buttonClicked.emit();
    }

    render() {
        return (
            <Host>
                <button onClick={this.handleClick} class={this.size}>{this.text}</button>
            </Host>
        );
    }
}
