import {ConfigType, ModalType, KeukenhofType} from './types';
import {ATTRIBUTES, SCROLL_STATE, CLASS_NAMES, KEY} from './consts';

export const Keukenhof = ((): KeukenhofType => {
    /**
     * Modal window
     */
    class Modal {
        $modal: HTMLElement | null;
        onOpen: (event?: Event) => void;
        onClose: (event?: Event) => void;
        beforeOpen: (event?: Event) => boolean;
        beforeClose: (event?: Event) => boolean;
        openAttribute: string;
        closeAttribute: string;
        openClass: string;
        hasAnimation: boolean;
        scrollBehavior: {
            isDisabled: boolean;
            container: string;
            defaultValue: string;
        };

        /**
         * Modal constructor
         *
         * @param {ConfigType} param - Config
         */
        constructor({
            selector = '',
            triggers = [],
            openAttribute = ATTRIBUTES.OPEN,
            closeAttribute = ATTRIBUTES.CLOSE,
            openClass = CLASS_NAMES.IS_OPEN,
            hasAnimation = false,
            scrollBehavior = {},
            onOpen = () => {},
            onClose = () => {},
            beforeOpen = () => true,
            beforeClose = () => true,
        }: ConfigType) {
            this.$modal = document.querySelector(selector);

            this.onOpen = onOpen;
            this.onClose = onClose;
            this.beforeOpen = beforeOpen;
            this.beforeClose = beforeClose;

            this.openAttribute = openAttribute;
            this.closeAttribute = closeAttribute;
            this.openClass = openClass;
            this.hasAnimation = hasAnimation;
            this.scrollBehavior = {
                isDisabled: true,
                container: 'body',
                defaultValue: '',
                ...scrollBehavior,
            };

            this.registerNodes(triggers);

            this.onClick = this.onClick.bind(this);
            this.onKeyup = this.onKeyup.bind(this);
        }

        /**
         * Add handlers for clicking on elements to open related modal windows
         *
         * @param {Array} nodeList  - List of elements for opening modal windows
         */
        registerNodes(nodeList: HTMLElement[]) {
            nodeList
                .filter(Boolean)
                .forEach((element) =>
                    element.addEventListener('click', (event) => this.open(event)),
                );
        }

        /**
         * Open moda window
         *
         * @param {Event} event - Event data
         */
        open(event?: Event) {
            const isContinue = this.beforeOpen(event);
            if (!isContinue) return;
            this.$modal?.classList.add(this.openClass);
            this.changeScrollBehavior(SCROLL_STATE.DISABLE);
            this.addEventListeners();
            this.preparationOpeningModal(event);
        }

        /**
         * Preparing a modal window for opening
         *
         * @param {Event} event - Event data
         */
        preparationOpeningModal(event?: Event) {
            if (this.hasAnimation) {
                this.$modal?.classList.add(CLASS_NAMES.IS_OPENING);
                const handler = () => {
                    this.$modal?.classList.remove(CLASS_NAMES.IS_OPENING);
                    this.onOpen(event);
                    this.$modal?.removeEventListener('animationend', handler);
                };
                this.$modal?.addEventListener('animationend', handler);
            } else {
                this.onOpen(event);
            }
        }

        /**
         * Close modal window
         *
         * @param {Event} event - Event data
         */
        close(event?: Event) {
            const isContinue = this.beforeClose(event);
            if (!isContinue) return;
            this.changeScrollBehavior(SCROLL_STATE.ENABLE);
            this.removeEventListeners();
            this.preparationClosingModal(event);
        }

        /**
         * Preparing a modal window for closing
         *
         * @param {Event} event - Event data
         */
        preparationClosingModal(event?: Event) {
            if (this.hasAnimation) {
                this.$modal?.classList.add(CLASS_NAMES.IS_CLOSING);
                const handler = () => {
                    this.$modal?.classList.remove(CLASS_NAMES.IS_CLOSING);
                    this.$modal?.classList.remove(this.openClass);
                    this.onClose(event);
                    this.$modal?.removeEventListener('animationend', handler);
                };
                this.$modal?.addEventListener('animationend', handler);
            } else {
                this.$modal?.classList.remove(this.openClass);
                this.onClose(event);
            }
        }

        /**
         * Close modal window by selector
         *
         * @param {string} selector - Modal window selector to close
         */
        closeBySelector(selector: string) {
            const element = document.querySelector<HTMLElement>(selector);
            if (!element) return;
            this.$modal = element;
            this.close();
        }

        /**
         * Click handler
         *
         * @param {object} event - Event data
         */
        onClick(event: Event) {
            if ((event.target as Element).closest(`[${this.closeAttribute}]`)) this.close();
        }

        /**
         * Keyboard press handler
         *
         * @param {KeyboardEvent} event - Event data
         */
        onKeyup(event: KeyboardEvent) {
            if (event.key === KEY.ESCAPE || event.key === KEY.ESC) this.close();
        }

        /**
         * Add event listeners for an open modal
         */
        addEventListeners() {
            this.$modal?.addEventListener('touchstart', this.onClick);
            this.$modal?.addEventListener('click', this.onClick);
            document.addEventListener('keyup', this.onKeyup);
        }

        /**
         * Remove event listener for an open modal
         */
        removeEventListeners() {
            this.$modal?.removeEventListener('touchstart', this.onClick);
            this.$modal?.removeEventListener('click', this.onClick);
            document.removeEventListener('keyup', this.onKeyup);
        }

        /**
         * Change scroll behavior
         *
         * @param {string} value - Scroll state value
         */
        changeScrollBehavior(value: 'disable' | 'enable') {
            if (!this.scrollBehavior.isDisabled) return;
            const element = document.querySelector<HTMLElement>(this.scrollBehavior.container);
            if (!element) return;
            if (value === SCROLL_STATE.ENABLE)
                element.style.overflow = this.scrollBehavior.defaultValue;
            else if (value === SCROLL_STATE.DISABLE) element.style.overflow = 'hidden';
        }
    }

    let modal: ModalType;

    /**
     * Create a map for registering modal windows
     *
     * @param {Array} nodeList - List of items
     * @param {string} attribute - Selector for opening
     * @returns {object} - Nodes map
     */
    const createRegisterMap = (nodeList: HTMLElement[], attribute: string) => {
        return nodeList.reduce((acc: {[key: string]: HTMLElement[]}, element: HTMLElement): {
            [key: string]: HTMLElement[];
        } => {
            const attributeValue = element.getAttribute(attribute);
            if (!attributeValue) return acc;
            if (!acc[attributeValue]) acc[attributeValue] = [];
            acc[attributeValue].push(element);
            return acc;
        }, {});
    };

    /**
     * Open modal window by selector
     *
     * @param {string} selector - Modal window selector
     * @param {ConfigType} config - Modal window configuration
     */
    const open = (selector: string, config?: ConfigType) => {
        const options = config || {};
        modal = new Modal({...options, selector});
        modal.open();
    };

    /**
     * Close modal
     *
     * @param {string} selector - Modal window selector
     */
    const close = (selector?: string) => {
        if (!modal) return;
        selector ? modal.closeBySelector(selector) : modal.close();
    };

    /**
     * Initialize modal windows according to markup
     *
     * @param {ConfigType} config - modal window configur
     */
    const init = (config?: ConfigType) => {
        const options = {openAttribute: ATTRIBUTES.OPEN, ...config};
        const nodeList = document.querySelectorAll<HTMLElement>(`[${options.openAttribute}]`);
        const registeredMap = createRegisterMap(Array.from(nodeList), options.openAttribute);

        for (const selector in registeredMap) {
            const value = registeredMap[selector];
            options.selector = selector;
            options.triggers = [...value];
            modal = new Modal(options);
        }
    };

    return {init, open, close};
})();

window.Keukenhof = Keukenhof;
