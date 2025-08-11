/* eslint-disable @typescript-eslint/no-explicit-any */
// types/react-markdown.d.ts
declare module 'react-markdown' {
  import { ReactNode } from 'react';
  
  export interface Components {
    [key: string]: React.ComponentType<any>;
  }

  export interface ReactMarkdownProps {
    children: string;
    components?: Components;
    remarkPlugins?: any[];
    rehypePlugins?: any[];
    className?: string;
  }

  declare const ReactMarkdown: React.FC<ReactMarkdownProps>;
  export default ReactMarkdown;
}