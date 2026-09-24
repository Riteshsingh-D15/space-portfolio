import os
import re

directories = ['app', 'components']

replacements = [
    # Backgrounds
    (r'bg-\[#030014\]', r'bg-slate-50 dark:bg-[#030014]'),
    (r'bg-\[#0300145c\]', r'bg-white/50 dark:bg-[#0300145c]'),
    (r'bg-\[#03001477\]', r'bg-white/70 dark:bg-[#03001477]'),
    (r'bg-\[#03001427\]', r'bg-white/20 dark:bg-[#03001427]'),
    (r'bg-\[#030014\]/80', r'bg-white/80 dark:bg-[#030014]/80'),
    
    # Texts
    (r'text-white', r'text-slate-900 dark:text-white'),
    (r'text-gray-200', r'text-gray-800 dark:text-gray-200'),
    (r'text-gray-300', r'text-gray-700 dark:text-gray-300'),
    (r'text-gray-400', r'text-gray-600 dark:text-gray-400'),
    
    # Borders
    (r'border-\[#2A0E61\]', r'border-gray-300 dark:border-[#2A0E61]'),
]

for d in directories:
    for root, _, files in os.walk(d):
        for file in files:
            if file.endswith('.tsx'):
                path = os.path.join(root, file)
                # Skip layout and navbar since I already modified them
                if file in ['layout.tsx', 'navbar.tsx']:
                    continue
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = content
                for old, new in replacements:
                    # Use negative lookbehind to avoid replacing already replaced classes
                    # e.g., if 'dark:bg-[#030014]' is already there, don't replace 'bg-[#030014]' again
                    new_content = re.sub(r'(?<!dark:)' + old, new, new_content)
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {path}")
print("Done")
