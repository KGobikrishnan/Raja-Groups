import re

def fix_file(path):
    with open(path, 'r') as f:
        content = f.read()

    # Swap improperly ordered tags
    content = content.replace('              </ScrollReveal>\n            </div>', '              </div>\n            </ScrollReveal>')
    content = content.replace('          </ScrollReveal>\n          </div>', '          </div>\n          </ScrollReveal>')

    with open(path, 'w') as f:
        f.write(content)

fix_file('src/components/RMA.jsx')
fix_file('src/components/MEW.jsx')
