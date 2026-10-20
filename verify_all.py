import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('app.js', 'r', encoding='utf-8') as f:
    js = f.read()

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

with open('README.md', 'r', encoding='utf-8') as f:
    readme = f.read()

print('=== 1. CHECKING FORBIDDEN JARGON & EM DASHES ===')
forbidden = ['specimen', 'telemetry', 'hegemony', 'ontological', 'somatic']
files_to_check = [
    ('index.html', html),
    ('app.js', js),
    ('styles.css', css),
    ('README.md', readme)
]

for name, content in files_to_check:
    em_count = len(re.findall(r'[\u2014]|&mdash;', content))
    assert em_count == 0, f'{name} has {em_count} em dashes!'
    for w in forbidden:
        w_count = content.lower().count(w)
        assert w_count == 0, f'{name} has {w_count} occurrences of "{w}"!'
print('PASS: Zero em dashes and zero forbidden words across all 4 key files.')

print('\n=== 2. CHECKING CSS SYNTAX & BRACE BALANCE ===')
open_braces = css.count('{')
close_braces = css.count('}')
assert open_braces == close_braces, f'styles.css has unbalanced braces: {open_braces} open vs {close_braces} close!'
print(f'PASS: styles.css braces are perfectly balanced ({open_braces} pairs).')

print('\n=== 3. CHECKING 6 CHAPTERS & HEADINGS ===')
expected_chapters = [
    ('chapter-ses', 'Socio-Economic Status'),
    ('chapter-religion', 'Religion &amp; Spirituality'),
    ('chapter-language', 'First Language &amp; National Origin'),
    ('chapter-ability', 'Ability &amp; Disability'),
    ('chapter-age', 'Age'),
    ('chapter-gender', 'Gender')
]

for ch_id, ch_title in expected_chapters:
    assert f'id="{ch_id}"' in html, f'Missing chapter id: {ch_id}'
    assert ch_title in html, f'Missing chapter title: {ch_title}'
    print(f'PASS: Found chapter {ch_id} with title "{ch_title}"')

print('\n=== 4. CHECKING RUBRIC SECTIONS PER CHAPTER ===')
for ch_id, ch_title in expected_chapters:
    start = html.find(f'id="{ch_id}"')
    end = html.find('</section>', start)
    ch_text = html[start:end]
    
    assert 'Interpretation:' in ch_text, f'Missing Interpretation in {ch_id}'
    assert 'Complication:' in ch_text, f'Missing Complication in {ch_id}'
    assert 'Connection:' in ch_text, f'Missing Connection in {ch_id}'
    assert 'Questions &amp; Shifts:' in ch_text or 'Questions & Shifts:' in ch_text, f'Missing Questions & Shifts in {ch_id}'
    
    # Check Evidence 1 and Evidence 2
    assert 'EVIDENCE 1' in ch_text, f'Missing EVIDENCE 1 in {ch_id}'
    assert 'EVIDENCE 2' in ch_text, f'Missing EVIDENCE 2 in {ch_id}'
    
    print(f'PASS: Chapter {ch_id} has all 4 rubric sections + Evidence 1 & Evidence 2.')

print('\n=== 5. CHECKING IMAGE ARTIFACTS ON DISK ===')
img_srcs = re.findall(r'src=[\'"]([^\'"]+\.(?:png|jpg|jpeg|webp|gif|svg))[\'"]', html)
assert len(img_srcs) >= 9, f'Expected at least 9 images in index.html, found {len(img_srcs)}'
for src in img_srcs:
    assert os.path.exists(src), f'Referenced image does not exist: {src}'
    print(f'PASS: Verified image file exists: {src}')

print('\n=== 6. CHECKING CLASS PRESENTATION CONCEPTS IN HTML ===')
core_concepts = [
    ('Meritocracy', 'Disregards systemic advantages / The Scholarship'),
    ('Access', 'Fair and equitable opportunity / barriers'),
    ('Three Dimensions of Diversity', 'Demographic, experiential, cognitive'),
    ('Mirrors vs. Windows', 'Cultural reflection and perspective'),
    ('Positionality', 'Centering voices vs consulting voices'),
    ('Cycle of Oppression', 'Stereotypes, prejudice, discrimination, oppression, internalization'),
    ('Maslow', 'Hierarchy of needs / basic attachment / psychological needs'),
    ('Nurture', 'Learned behaviour passed down'),
    ('Ethnicity vs. National Origin', 'Cultural roots vs political borders'),
    ('Intersectionality', 'Overlap of identifying traits / Crenshaw framework')
]

for concept, desc in core_concepts:
    found = concept.lower() in html.lower()
    assert found, f'Missing core class concept: {concept}'
    print(f'PASS: Verified "{concept}" ({desc})')

print('\n=== 7. CHECKING INTERSECTIONALITY MATRIX IN APP.JS ===')
assert 'INTERSECTION_DATA' in js, 'Missing INTERSECTION_DATA in app.js'
all_15_pairs = [
    'ses-age', 'ses-ability', 'ses-language', 'ses-religion', 'ses-gender',
    'religion-age', 'religion-language', 'religion-ability', 'religion-gender',
    'language-ability', 'language-age', 'language-gender',
    'ability-age', 'ability-gender',
    'gender-age'
]
for pair in all_15_pairs:
    assert f"'{pair}'" in js or f'"{pair}"' in js, f'Missing pair in INTERSECTION_DATA: {pair}'
print(f'PASS: All 15 intersection matrix pairings present in app.js.')

print('\n=== 8. CHECKING DOM IDS ACCESSED IN APP.JS ===')
get_ids = re.findall(r"document\.getElementById\(['\"]([^'\"]+)['\"]\)", js)
for el_id in sorted(set(get_ids)):
    assert f'id="{el_id}"' in html or f"id='{el_id}'" in html, f'ID "{el_id}" accessed in app.js is missing from index.html!'
print(f'PASS: All {len(set(get_ids))} DOM IDs accessed in app.js exist in index.html.')

print('\n=== 9. CHECKING PROVENANCE ARCHIVE RECORDS IN APP.JS ===')
html_records = re.findall(r'data-record=["\']([^"\']+)["\']', html)
distinct_records = sorted(set(html_records))
assert len(distinct_records) == 12, f'Expected 12 distinct data-records in index.html, found {len(distinct_records)}'
for rec in distinct_records:
    assert f"'{rec}':" in js or f'"{rec}":' in js, f'Record "{rec}" is missing from PROVENANCE_ARCHIVE in app.js!'
    print(f'PASS: Verified provenance record "{rec}" exists in app.js.')

print('\n=== 10. CHECKING IMAGE INTEGRITY VIA PIL ===')
from PIL import Image
for src in sorted(set(img_srcs)):
    with Image.open(src) as im:
        assert im.size[0] > 0 and im.size[1] > 0, f'Invalid dimensions for {src}'
        print(f'PASS: {src} is valid {im.format} ({im.size[0]}x{im.size[1]}, mode={im.mode})')

print('\n=== 11. CHECKING FOR UNICODE REPLACEMENT CHARACTERS ===')
for name, content in files_to_check:
    assert '\ufffd' not in content, f'{name} contains corrupted Unicode replacement character (\\ufffd)!'
print('PASS: Zero corrupted Unicode characters found across all key files.')

print('\n=== 12. CHECKING IN-CLASS PREP GUIDE IN README.MD ===')
assert 'In-Class Final Reflection Prep Guide' in readme, 'Missing Prep Guide in README.md'
for topic_num in range(1, 7):
    assert f'### Topic {topic_num}:' in readme, f'Missing Topic {topic_num} in README.md'
assert 'Quick Reference Matrix' in readme, 'Missing Quick Reference Matrix in README.md'
print('PASS: Verified all 6 topics, artifacts, and slide matrix in README.md prep guide.')

print('\nALL VERIFICATION CHECKS PASSED!')

