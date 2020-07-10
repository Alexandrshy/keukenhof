export const ATTRIBUTES = {
    OPEN: 'data-keukenhof-open',
    CLOSE: 'data-keukenhof-close',
};

export const SCROLL_STATE = {
    DISABLE: 'disable',
    ENABLE: 'enable',
} as const;

export const CLASS_NAMES = {
    IS_OPEN: 'isOpen',
    IS_OPENING: 'isOpening',
    IS_CLOSING: 'isClosing',
} as const;

export const KEY = {
    ESC: 'Esc',
    ESCAPE: 'Escape',
    TAB: 'Tab',
} as const;

export const FOCUSING_ELEMENTS = [
    'a[href]',
    'area[href]',
    'button:not([disabled]):not([aria-hidden])',
    'input:not([disabled]):not([aria-hidden])',
    'select:not([disabled]):not([aria-hidden])',
    'textarea:not([disabled]):not([aria-hidden])',
    '[tabindex]:not([tabindex^="-"])',
];
