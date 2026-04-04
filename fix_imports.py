import glob
import os

for file in glob.glob("src/pages/*.tsx"):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace("import React from 'react';", "")
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
