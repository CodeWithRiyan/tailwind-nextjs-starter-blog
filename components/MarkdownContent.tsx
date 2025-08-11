// components/MarkdownContent.js
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const MarkdownContent = ({ content, className = "" }) => {
  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm, remarkBreaks]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;