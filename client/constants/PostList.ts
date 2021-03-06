interface Post {
    level: 'Basic' | 'Intermediate' |  'Advanced';
    slug: string;
}

const PostList: Post[] = [
    { slug: 'add-or-remove-class-from-an-element', level: 'Basic' },
    { slug: 'allow-to-enter-particular-characters-only', level: 'Intermediate' },
    { slug: 'append-to-an-element', level: 'Basic', },
    { slug: 'attach-or-detach-an-event-handler', level: 'Basic' },
    { slug: 'calculate-the-mouse-position-relative-to-an-element', level: 'Basic' },
    { slug: 'calculate-the-size-of-scrollbar', level: 'Intermediate' },
    { slug: 'change-the-website-favicon', level: 'Intermediate' },
    { slug: 'check-an-element-against-a-selector', level: 'Basic' },
    { slug: 'check-if-an-element-has-given-class', level: 'Basic' },
    { slug: 'check-if-an-element-is-a-descendant-of-another', level: 'Basic' },
    { slug: 'check-if-an-element-is-in-the-viewport', level: 'Basic' },
    { slug: 'check-if-an-element-is-scrollable', level: 'Intermediate' },
    { slug: 'check-if-the-native-date-input-is-supported', level: 'Basic' },
    { slug: 'clone-an-element', level: 'Basic' },
    { slug: 'communication-between-an-iframe-and-its-parent-window', level: 'Intermediate' },
    { slug: 'copy-highlighted-code-to-the-clipboard', level: 'Advanced' },
    { slug: 'copy-text-to-the-clipboard', level: 'Intermediate' },
    { slug: 'count-the-number-of-characters-of-a-textarea', level: 'Basic' },
    { slug: 'create-a-range-slider', level: 'Advanced' },
    { slug: 'create-an-element', level: 'Basic' },
    { slug: 'create-an-image-comparison-slider', level: 'Advanced' },
    { slug: 'create-one-time-event-handler', level: 'Basic' },
    { slug: 'create-resizable-split-views', level: 'Advanced' },
    { slug: 'detect-clicks-outside-of-an-element', level: 'Basic' },
    { slug: 'detect-if-an-element-is-focused', level: 'Basic' },
    { slug: 'detect-if-the-caps-lock-is-on', level: 'Intermediate' },
    { slug: 'detect-mac-os-browser', level: 'Basic' },
    { slug: 'determine-the-height-and-width-of-an-element', level: 'Basic' },
    { slug: 'distinguish-between-left-and-right-mouse-clicks', level: 'Basic' },
    { slug: 'download-a-file', level: 'Intermediate' },
    { slug: 'drag-and-drop-element-in-a-list', level: 'Advanced' },
    { slug: 'drag-and-drop-table-column', level: 'Advanced' },
    { slug: 'drag-and-drop-table-row', level: 'Advanced' },
    { slug: 'execute-code-when-the-document-is-ready', level: 'Basic' },
    { slug: 'export-a-table-to-csv', level: 'Intermediate' },
    { slug: 'get-css-styles-of-an-element', level: 'Basic' },
    { slug: 'get-or-set-the-document-title', level: 'Basic' },
    { slug: 'get-or-set-the-html-of-an-element', level: 'Basic' },
    { slug: 'get-set-and-remove-attributes', level: 'Basic' },
    { slug: 'get-set-and-remove-data-attributes', level: 'Basic' },
    { slug: 'get-siblings-of-an-element', level: 'Basic', },
    { slug: 'get-size-of-the-selected-file', level: 'Basic', },
    { slug: 'get-the-closest-element-by-given-selector', level: 'Basic' },
    { slug: 'get-the-default-value-of-a-css-property', level: 'Intermediate' },
    { slug: 'get-the-document-height-and-width', level: 'Basic' },
    { slug: 'get-the-first-scrollable-parent-of-an-element', level: 'Intermediate' },
    { slug: 'get-the-parent-node-of-an-element', level: 'Basic' },
    { slug: 'get-the-position-of-an-element-relative-to-another', level: 'Basic' },
    { slug: 'get-the-position-of-an-element-relative-to-the-document', level: 'Basic' },
    { slug: 'get-the-selected-text', level: 'Basic' },
    { slug: 'get-the-size-of-an-image', level: 'Basic' },
    { slug: 'get-the-text-content-of-an-element', level: 'Basic' },
    { slug: 'go-back-to-the-previous-page', level: 'Basic' },
    { slug: 'highlight-an-element-when-dragging-a-file-over-it', level: 'Intermediate' },
    { slug: 'insert-an-element-after-or-before-other-element', level: 'Basic' },
    { slug: 'insert-given-html-after-or-before-an-element', level: 'Basic' },
    { slug: 'load-a-css-file-dynamically', level: 'Intermediate' },
    { slug: 'load-a-javascript-file-dynamically', level: 'Intermediate' },
    { slug: 'loop-over-a-nodelist', level: 'Basic' },
    { slug: 'make-a-draggable-element', level: 'Advanced' },
    { slug: 'make-a-resizable-element', level: 'Advanced' },
    { slug: 'measure-the-width-of-given-text-of-given-font', level: 'Intermediate' },
    { slug: 'paste-an-image-from-the-clipboard', level: 'Intermediate' },
    { slug: 'paste-as-plain-text', level: 'Intermediate' },
    { slug: 'placeholder-for-a-contenteditable-element', level: 'Intermediate' },
    { slug: 'prepend-to-an-element', level: 'Basic' },
    { slug: 'press-shift-and-enter-for-a-new-line', level: 'Basic' },
    { slug: 'prevent-body-from-scrolling-when-opening-a-modal', level: 'Basic' },
    { slug: 'prevent-the-default-action-of-an-event', level: 'Basic' },
    { slug: 'preview-an-image-before-uploading-it', level: 'Intermediate' },
    { slug: 'print-an-image', level: 'Intermediate' },
    { slug: 'put-cursor-at-the-end-of-an-input', level: 'Basic' },
    { slug: 'redirect-to-another-page', level: 'Basic' },
    { slug: 'reload-the-current-page', level: 'Basic' },
    { slug: 'remove-all-children-of-a-node', level: 'Basic' },
    { slug: 'remove-an-element', level: 'Basic' },
    { slug: 'replace-an-element', level: 'Basic' },
    { slug: 'replace-broken-images', level: 'Basic' },
    { slug: 'resize-an-iframe-to-fit-its-content', level: 'Basic' },
    { slug: 'resize-an-image', level: 'Intermediate' },
    { slug: 'resize-columns-of-a-table', level: 'Advanced' },
    { slug: 'resize-the-width-of-a-text-box-to-fit-its-content-automatically', level: 'Intermediate' },
    { slug: 'save-and-restore-the-text-selection', level: 'Intermediate' },
    { slug: 'scale-a-text-to-fit-inside-of-an-element', level: 'Intermediate' },
    { slug: 'scroll-to-an-element', level: 'Basic' },
    { slug: 'scroll-to-top-of-the-page', level: 'Basic' },
    { slug: 'select-an-element-or-list-of-elements', level: 'Basic' },
    { slug: 'select-the-children-of-an-element', level: 'Basic' },
    { slug: 'select-the-text-content-of-an-element', level: 'Basic' },
    { slug: 'select-the-text-of-a-textarea-automatically', level: 'Basic' },
    { slug: 'serialize-form-data-into-a-query-string', level: 'Basic' },
    { slug: 'set-css-style-for-an-element', level: 'Basic' },
    { slug: 'show-a-ghost-element-when-dragging-an-element', level: 'Intermediate' },
    { slug: 'show-a-loading-indicator-when-an-iframe-is-being-loaded', level: 'Intermediate' },
    { slug: 'show-or-hide-an-element', level: 'Basic' },
    { slug: 'sort-a-table-by-clicking-its-headers', level: 'Advanced' },
    { slug: 'strip-html-from-a-given-text', level: 'Basic' },
    { slug: 'submit-a-form-with-ajax', level: 'Basic' },
    { slug: 'swap-two-nodes', level: 'Basic' },
    { slug: 'toggle-an-element', level: 'Basic' },
    { slug: 'toggle-password-visibility', level: 'Basic' },
    { slug: 'trigger-an-event', level: 'Basic' },
    { slug: 'unwrap-an-element', level: 'Basic' },
    { slug: 'upload-files-with-ajax', level: 'Basic' },
    { slug: 'wrap-an-element-around-a-given-element', level: 'Basic' },
    { slug: 'zoom-an-image', level: 'Advanced' },
];

export default PostList;
