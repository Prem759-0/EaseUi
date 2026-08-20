import os
import re

card_page_path = r'd:\Downloads\linkden post\task\Easeui-project\src\pages\components\CardPage.tsx'

with open(card_page_path, 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('const reactCodeDark = import', 'const reactCodeDark = import')
c = c.replace('          Jiggle\n        </Button>\n      }\n    />\n  )\n}', '          Jiggle\n        </Button>\n      }\n    />\n  )\n}')

c = c.replace('const htmlCodeDark = <!--', 'const htmlCodeDark = <!--')
c = c.replace('  </div>\n</div>', '  </div>\n</div>')
# the above might replace too many, let's just do regex
c = re.sub(r'(const htmlCodeDark = <!--.*?</div>\n</div>)(?!)', r'\1', c, flags=re.DOTALL)

c = c.replace('const reactCodeOutline = import', 'const reactCodeOutline = import')
c = re.sub(r'(const reactCodeOutline = import.*?    />\n  \)\n})(?!)', r'\1', c, flags=re.DOTALL)

c = c.replace('const htmlCodeOutline = <!--', 'const htmlCodeOutline = <!--')
c = re.sub(r'(const htmlCodeOutline = <!--.*?</div>\n</div>)(?!)', r'\1', c, flags=re.DOTALL)

c = c.replace('const reactCodeLight = import', 'const reactCodeLight = import')
c = re.sub(r'(const reactCodeLight = import.*?    />\n  \)\n})(?!)', r'\1', c, flags=re.DOTALL)

c = c.replace('const htmlCodeLight = <!--', 'const htmlCodeLight = <!--')
c = re.sub(r'(const htmlCodeLight = <!--.*?</div>\n</div>)(?!)', r'\1', c, flags=re.DOTALL)

c = c.replace('const allExamplesCode = import', 'const allExamplesCode = import')
c = c.replace('      <Card variant="outline" title="Outline Card" description="This is an outline card." />\n    </div>\n  )\n}', '      <Card variant="outline" title="Outline Card" description="This is an outline card." />\n    </div>\n  )\n}')

with open(card_page_path, 'w', encoding='utf-8') as f:
    f.write(c)
print('DONE REPLACING BACKTICKS')
