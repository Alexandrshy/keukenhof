export type ConfigType = {
    selector?: string;
    triggers?: HTMLElement[];
    openAttribute?: string;
    closeAttribute?: string;
    openClass?: string;
    hasAnimation?: boolean;
    isAssignFocus?: boolean;
    scrollBehavior?: {
        isDisabled?: boolean;
        container?: string;
        defaultValue?: string;
    };
    onOpen?: (event?: Event) => void;
    onClose?: (event?: Event) => void;
    beforeOpen?: (event?: Event) => boolean;
    beforeClose?: (event?: Event) => boolean;
    setAriaHidden?: (value: boolean) => void;
};

export type ModalType = {
    registerNodes: (nodeList: HTMLElement[]) => void;
    open: (event?: Event) => void;
    preparationOpeningModal: (event?: Event) => void;
    close: (event?: Event) => void;
    preparationClosingModal: (event?: Event) => void;
    closeBySelector: (selector: string) => void;
    onClick: (event: Event) => void;
    onKeyup: (event: KeyboardEvent) => void;
    addEventListeners: () => void;
    removeEventListeners: () => void;
    changeScrollBehavior: (value: 'disable' | 'enable') => void;
};

export type KeukenhofType = {
    init: (config?: ConfigType) => void;
    open: (selector: string, config?: ConfigType) => void;
    close: (selector?: string) => void;
};
