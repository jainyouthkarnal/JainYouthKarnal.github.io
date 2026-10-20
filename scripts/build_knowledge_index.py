#!/usr/bin/env python3
"""Generate data/knowledge-index.json from supported files in knowledge/."""
from pathlib import Path
import json, re
ROOT=Path(__file__).resolve().parents[1]
BASE=ROOT/'knowledge'
OUT=ROOT/'data'/'knowledge-index.json'
EXT={'.pdf':'PDF','.md':'Article','.html':'Article','.htm':'Article','.txt':'Text','.png':'Image','.jpg':'Image','.jpeg':'Image','.webp':'Image','.gif':'Image','.svg':'Image','.doc':'Document','.docx':'Document','.ppt':'Presentation','.pptx':'Presentation','.mp3':'Audio','.mp4':'Video','.webm':'Video','.epub':'eBook','.csv':'Data'}
FOLDER_LABELS={'articles':'Articles','pdfs':'PDFs','images':'Images','resources':'Other resources'}
def title_of(path):
    s=path.stem.replace('_',' ').replace('-',' ').strip()
    return re.sub(r'\s+',' ',s).title() or path.name
items=[]
for path in sorted(BASE.rglob('*')):
    if not path.is_file() or path.name.startswith('.') or path.suffix.lower() not in EXT: continue
    rel=path.relative_to(ROOT).as_posix()
    folder=path.relative_to(BASE).parts[0] if path.relative_to(BASE).parts else 'resources'
    category=FOLDER_LABELS.get(folder,'Other resources')
    desc=''
    if path.suffix.lower()=='.md':
        try:
            first=path.read_text(encoding='utf-8').splitlines()
            for line in first:
                if line.strip() and not line.lstrip().startswith('#'):
                    desc=line.strip()[:220]; break
        except Exception: pass
    item={'title':title_of(path),'description':desc,'category':category,'type':EXT[path.suffix.lower()],'url':rel,'action':'Read article' if EXT[path.suffix.lower()]=='Article' else ('View image' if EXT[path.suffix.lower()]=='Image' else 'Open resource')}
    if EXT[path.suffix.lower()]=='Image': item['image']=rel
    items.append(item)
# Arghya is a maintained, bilingual knowledge page currently kept at the site root to preserve existing relative links.
if (ROOT/'arghya.html').exists():
    items.insert(0,{'title':'Choubis Tirthankara Arghya','description':'Traditional arghya verses for the 24 Tirthankaras and additional Jain prayers, with Devanagari and Roman transliteration.','category':'Prayers & Stotras','type':'Article','url':'arghya.html','action':'Read Arghya'})
OUT.parent.mkdir(parents=True,exist_ok=True)
OUT.write_text(json.dumps({'generatedBy':'scripts/build_knowledge_index.py','items':items},ensure_ascii=False,indent=2)+chr(10),encoding='utf-8')
print(f'Wrote {len(items)} knowledge resources to {OUT.relative_to(ROOT)}')
