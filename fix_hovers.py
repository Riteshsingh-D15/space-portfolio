import os
import re

directories = ['app', 'components']

for d in directories:
    for root, _, files in os.walk(d):
        for file in files:
            if file.endswith('.tsx'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Fix broken hover dark mode classes for all words, e.g. hover:text-slate-900 dark:text-white -> hover:text-slate-900 dark:hover:text-white
                new_content = re.sub(r'hover:([a-z0-9-]+) dark:([a-z0-9-]+)', r'hover:\1 dark:hover:\2', content)
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Fixed hover in {path}")
print("Done")
