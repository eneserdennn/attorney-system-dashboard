import React, { useEffect, useRef } from 'react';

const DocumentEditor = ({ fileUrl, config }) => {
    const editorRef = useRef(null);

    useEffect(() => {
        if (editorRef.current && fileUrl && config) {
            new window.DocsAPI.DocEditor(editorRef.current.id, {
                ...config,
                document: {
                    ...config.document,
                    url: fileUrl,
                },
            });
        }
    }, [editorRef, fileUrl, config]);

    return (
        <div
            ref={editorRef}
            id={`onlyoffice-editor-${Math.random()
                .toString(36)
                .substr(2, 9)}`}
            style={{ width: '100%', height: '100%' }}
        ></div>
    );
};

export default DocumentEditor;
