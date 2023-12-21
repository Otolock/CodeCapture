'use client'

import React, { useRef, useCallback } from 'react';
import { toPng } from 'html-to-image';
import CodeEditor from '@/components/CodeEditor';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const codeEditorRef = useRef();

  const convertToImage = useCallback(() => {
    if (codeEditorRef.current) {
      const width = codeEditorRef.current.scrollWidth; // Get the full width of the element
      toPng(codeEditorRef.current, { cacheBust: true, width })
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
  }, [codeEditorRef]);

  return (
    <>
      <Header />
      <Container>
        <div ref={codeEditorRef}>
          <CodeEditor />
        </div>
        <button
          onClick={convertToImage}
          className='rounded-md bg-emerald-600 mt-4 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600'
        >
          Download Image
        </button>
      </Container>
      <Footer version={0.3} />
    </>
  );
}
