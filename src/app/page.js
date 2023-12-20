'use client'

import React, { useRef, useState, useCallback } from 'react';
import { toPng } from 'html-to-image';
import CodeEditor from '@/components/CodeEditor';
import CodeBlock from '@/components/CodeBlock';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState(`
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Hello, world!</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));
  `.trim()); // Initialize code state with sample code

  const codeBlockRef = useRef();

  const convertToImage = useCallback(() => {
    if (codeBlockRef.current) {
      const width = codeBlockRef.current.scrollWidth; // Get the full width of the element
      toPng(codeBlockRef.current, { cacheBust: true, width })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'code-snippet.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error('oops, something went wrong!', error);
        });
    }
  }, [codeBlockRef]);
  

  return (
    <>
      <Header />
      <Container>
        <CodeEditor
          language={language}
          setLanguage={setLanguage}
          code={code}
          onChange={setCode}
        />
        <div ref={codeBlockRef} className="mb-4">
          <CodeBlock key={code} code={code} language={language} />
        </div>
        <button
          onClick={convertToImage}
          className='rounded-md bg-emerald-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600'
        >
          Download Image
        </button>
      </Container>
      <Footer version={0.2} />
    </>
  );
}
