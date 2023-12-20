import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ language, setLanguage, code, onChange }) => {
    const handleEditorChange = (value, event) => {
        if (onChange) {
            onChange(value);
        }
    };

    const languages = [
        { label: 'JavaScript', value: 'javascript' },
        { label: 'HTML', value: 'html' },
        { label: 'CSS', value: 'css' },
        // Add more languages as needed
    ];

    return (
        <div>
            <div>
                <label htmlFor="language" className="block text-sm font-medium leading-6 text-gray-900">
                    Language
                </label>
                <select
                    id="language"
                    name="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="my-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-emerald-600 sm:text-sm sm:leading-6"
                >
                    {languages.map(lang => (
                        <option key={lang.value} value={lang.value}>
                            {lang.label}
                        </option>
                    ))}
                </select>
            </div>
            <Editor
                height="500px"
                language={language}
                value={code}
                onChange={handleEditorChange}
                theme="vs-dark"
                options={{
                    minimap: { enabled: false }
                }}
            />
        </div>
    );
};

export default CodeEditor;
