import * as b from 'bobril';

export const footerHeight = 0; // no footer now

export const basicLayout = b.styleDef({
    minHeight: '100%',
    minWidth: 1200,
    position: 'relative',
    overflow: 'hidden',
});

export const header = b.styleDef({
    width: '100%',
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 500
});

export const content = b.styleDef({
    paddingBottom: footerHeight,
    paddingTop: 60
});

export const footer = b.styleDef({
    height: footerHeight,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0
});