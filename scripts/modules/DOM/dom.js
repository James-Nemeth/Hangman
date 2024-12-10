export const createEl = (elType, textVal, parent, id) => {
    const el = document.createElement(elType);
    el.id = id;
    const text = document.createTextNode(textVal);
    el.appendChild(text);
    parent.appendChild(el);
};