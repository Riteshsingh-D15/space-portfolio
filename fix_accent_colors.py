import os
import re

directories = ['app', 'components']

replacements = [
    # Accent text colors
    (r'text-purple-200', r'text-purple-700 dark:text-purple-200'),
    (r'text-purple-300', r'text-purple-800 dark:text-purple-300'),
    (r'text-purple-400', r'text-purple-700 dark:text-purple-400'),
    (r'text-cyan-300', r'text-cyan-700 dark:text-cyan-300'),
    (r'text-cyan-400', r'text-cyan-700 dark:text-cyan-400'),
]

for d in directories:
    for root, _, files in os.walk(d):
        for file in files:
            if file.endswith('.tsx'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = content
                for old, new in replacements:
                    new_content = re.sub(r'(?<!dark:)' + old, new, new_content)
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {path}")
print("Done")
