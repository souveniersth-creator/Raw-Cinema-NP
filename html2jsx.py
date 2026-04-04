import re
import sys

def html_to_jsx(html):
    # Regex rules to convert common HTML to JSX
    jsx = html
    # Replace class= with className=
    jsx = re.sub(r'\bclass=', 'className=', jsx)
    
    # Replace tabindex with tabIndex
    jsx = re.sub(r'\btabindex=', 'tabIndex=', jsx)
    
    # Replace inline styles. (This is basic and might miss complex ones, but usually Stitch uses tailwind classes, not style attrs)
    # Self-closing tags
    def close_tags(match):
        tag = match.group(0)
        if not tag.endswith('/>'):
            tag = tag[:-1] + ' />'
        return tag
    
    jsx = re.sub(r'<(img|br|hr|input|meta|link)[^>]*>', close_tags, jsx)
    
    # SVG attributes like stroke-width, fill-rule to camelCase
    jsx = re.sub(r'stroke-width=', 'strokeWidth=', jsx)
    jsx = re.sub(r'fill-rule=', 'fillRule=', jsx)
    jsx = re.sub(r'clip-rule=', 'clipRule=', jsx)
    jsx = re.sub(r'stroke-linecap=', 'strokeLinecap=', jsx)
    jsx = re.sub(r'stroke-linejoin=', 'strokeLinejoin=', jsx)
    
    # Extract body content for component
    body_match = re.search(r'<body[^>]*>(.*?)</body>', jsx, re.DOTALL | re.IGNORECASE)
    if body_match:
        jsx = body_match.group(1)
        
    # Remove HTML comments
    jsx = re.sub(r'<!--.*?-->', '', jsx, flags=re.DOTALL)
    
    return f"""import React from 'react';

export default function Component() {{
  return (
    <>
      {jsx.strip()}
    </>
  );
}}
"""

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python html2jsx.py <input.html> <output.tsx>")
        sys.exit(1)
        
    with open(sys.argv[1], 'r', encoding='utf-8') as f:
        html_content = f.read()
        
    result = html_to_jsx(html_content)
    
    with open(sys.argv[2], 'w', encoding='utf-8') as f:
        f.write(result)
    
    print(f"Converted {sys.argv[1]} to {sys.argv[2]}")
