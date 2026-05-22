import re

def fix_file(path):
    with open(path, 'r') as f:
        content = f.read()

    content = content.replace('          </ScrollReveal>\n        </div>', '          </div>\n        </ScrollReveal>')
    
    # Let's fix line 257 and 258:
    content = content.replace('            </div>\n          </ScrollReveal>', '            </ScrollReveal>\n          </div>')

    with open(path, 'w') as f:
        f.write(content)

fix_file('src/components/RMA.jsx')
