import os

directories = ['app', 'components']

for d in directories:
    for root, _, files in os.walk(d):
        for file in files:
            if file.endswith('.tsx'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = content.replace(
                    'from-purple-500 to-cyan-500', 
                    'from-purple-700 to-cyan-700 dark:from-purple-500 dark:to-cyan-500'
                )
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Fixed gradient in {path}")
print("Done")
