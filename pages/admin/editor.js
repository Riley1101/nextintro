import React from "react";
import dynamic from 'next/dynamic';

const Quill = dynamic(
    import('quill'),

    {
        ssr: false,
        loading: () => 'Loading..',
    }
)
const ImageResize = dynamic(
    import('quill-image-resize-module').then(mod => mod.ImageResize),
    {
        ssr: false,
        loading: () => 'Loading..',
    }
)
const VideoResize = dynamic(
    import('quill-video-resize-module2'),
    {
        ssr: false,
        loading: () => 'Loading..',
    }
)



const CustomUndo = () => (
    <svg viewBox="0 0 18 18">
        <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
        <path
            className="ql-stroke"
            d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
        />
    </svg>
);

// Redo button icon component for Quill editor
const CustomRedo = () => (
    <svg viewBox="0 0 18 18">
        <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
        <path
            className="ql-stroke"
            d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
        />
    </svg>
);

// Undo and redo functions for Custom Toolbar
function undoChange() {

    this.quill.history.undo();
}
function redoChange() {
    this.quill.history.redo();
}

// Quill.register('modules/imageResize', ImageResize);
// Quill.register('modules/VideoResize', VideoResize)


// var fontSizeStyle = Quill.import('attributors/style/size');
// fontSizeStyle.whitelist = ['12px', '14px', '18px', '24px', '32px', '42px'];
// Quill.register(fontSizeStyle, true);

// Add fonts to whitelist and register them
// const Font = Quill.import("formats/font");
// Font.whitelist = [
//     "arial",
//     "comic-sans",
//     "courier-new",
//     "georgia",
//     "helvetica",
//     "lucida"
// ];
// Quill.register(Font, true);


// Modules object for setting up the Quill editor
export const modules = {
    toolbar: {
        container: "#toolbar",
        handlers: {
            undo: undoChange,
            redo: redoChange,

        }
    },
    // imageResize: {
    //     parchment: Quill.import('parchment')
    //     // See optional "config" below
    // },
    // VideoResize: {
    //     modules: ['Resize', 'DisplaySize', 'Toolbar'],
    //     tagName: 'iframe', // iframe | video
    // },
    history: {
        delay: 500,
        maxStack: 100,
        userOnly: true
    }
};

// Formats objects for setting up the Quill editor
export const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "align",
    "strike",
    "script",
    "blockquote",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "code-block",
    "video"
];

// Quill Toolbar component
export const QuillToolbar = () => (
    <div id="toolbar">
        <span className="ql-formats">
            <select class="ql-size">
                <option selected>Default</option>
                <option value="12px">12</option>
                <option value="14px">14</option>
                <option value="18px">18</option>
                <option value="24px">24</option>
                <option value="32px">32</option>
                <option value="42px">42</option>
            </select>
            <select className="ql-header" defaultValue="3">
                <option value="1">Heading</option>
                <option value="2">Subheading</option>
                <option value="3">Normal</option>
            </select>
        </span>
        <span className="ql-formats">
            <select className="ql-align" />
            <button className="ql-bold" />
            <button className="ql-italic" />
            <button className="ql-underline" />
            <button className="ql-strike" />
        </span>

        <span className="ql-formats">
            <button className="ql-list" value="ordered" />
            <button className="ql-list" value="bullet" />
            <button className="ql-indent" value="-1" />
            <button className="ql-indent" value="+1" />
            <button className="ql-blockquote" />
            <button className="ql-link" />
            <button className="ql-code-block" />
            <button className="ql-image" />
            <button className="ql-video" />

        </span>
        <span className="ql-formats">
            <button className="ql-undo">
                <CustomUndo />
            </button>
            <button className="ql-redo">
                <CustomRedo />
            </button>
        </span>

    </div>
);

export default QuillToolbar;