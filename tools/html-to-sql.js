/***********************************************************
 NOTE: If Git reports a fatal error saying either "LF will be
 replaced by CRLF" or "CRLF would be replaced by LF", then
 the line endings in the specified file (such as
 "data/book.html") don't match your local Git repository.
 You'll need to change the line endings in the specified file
 to CRLF (carriage-return \r, line feed \n) or LF (line feed,
 \n) in your text editor and resave the file.

 This happens because Windows uses CRLF and macOS/Linux use
 LF to indicate the end of the file, and Git doesn't want to
 accidentally corrupt a binary file mislabelled as a text
 file.
 ***********************************************************/

// Dependencies ////////////////////////////////////////////
import { strict as assert } from 'node:assert'
import { closeSync, openSync, readFileSync, writeFileSync }
  from 'node:fs'
import { parse } from 'node-html-parser'

// Configuration ///////////////////////////////////////////
const srcPath = 'C:\\Users\\Admin\\Desktop\\CVTC\\SQC\\sqc-project-tawnashampo\\data\\book.html'
const dstPath = 'C:\\Users\\Admin\\Desktop\\CVTC\\SQC\\sqc-project-tawnashampo\\docs\\generated-schema.sql'
const chapterIds = [
  'CHAPTER1',
  'CHAPTER2',
  'CHAPTER3',
  'CHAPTER4',
  'CHAPTER5',
  'CHAPTER6',
  'CHAPTER7',
  'CHAPTER8',
  'CHAPTER9',
  'CHAPTER10',
  'CHAPTER11',
  'CHAPTER12',
  'CHAPTER13',
  'CHAPTER14',
  'CHAPTER15',
  'CHAPTER16',
  'CHAPTER17',
  'CHAPTER18',
  'CHAPTER19',
  'CHAPTER20',
  'CHAPTER21',
  'CHAPTER22',
  'CHAPTER23',
  'CHAPTER24',
  'CHAPTER25',
  'CHAPTER26',
  'CHAPTER27',
  'CHAPTER28',
  'CHAPTER29',
  'CHAPTER30',
  'CHAPTER31',
  'CHAPTER32',
]

const illustrationIds = [
  'L31',
  'L3772',
  'L3442',
  'L3433',
  'L3446',
  'L3450',
  'L3461',
  'L3465',
  'L3471',
  'L3475',
  'L3479',
  'L3483',
  'L7923',
  'L3491',
  'L3495',
  'L3499',
]


const sqlHeader = `DROP TABLE IF EXISTS chapters;
DROP TABLE IF EXISTS illustrations;

CREATE TABLE chapters (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);

CREATE TABLE illustrations (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL
);

INSERT INTO chapters (title) VALUES
`

// Utility functions ///////////////////////////////////////
const extractTitle = function (root, id) {
  const selector = `a[href="#${id}"]`;
  const element = root.querySelector(selector);
  if (element) {
    return element.text.trim();
  } else {
    return 'no element';
  }
}

const extractDescription = function (root, id) {
  const selector = `a[href="#${id}"]`;
  const element = root.querySelector(selector);
  if (element) {
    return element.text.trim();
  } else {
    return 'no element';
  }
}

// Conversion //////////////////////////////////////////////
const src = readFileSync(srcPath, 'utf-8')
const domRoot = parse(src)

const chapters = [];
const illustrations = [];

chapterIds.forEach((id) => {
  const title = extractTitle(domRoot, id);
  chapters.push({
    title
  });
});

illustrationIds.forEach((id) => {
  const description = extractDescription(domRoot, id);
  illustrations.push({
    description
  });
});

const fd = openSync(dstPath, 'w');
writeFileSync(fd, sqlHeader);

writeFileSync(fd, `('${chapters[0].title}')`);

chapters.slice(1).forEach((data) => {
  const value = `,\n('${data.title}')`;
  writeFileSync(fd, value);
});

writeFileSync(fd, ';\n\n');

writeFileSync(fd, 'INSERT INTO illustrations (description) VALUES\n');

writeFileSync(fd, `('${illustrations[0].description.replace(/'/g, "''")}')`);

illustrations.slice(1).forEach((data) => {
  const value = `,\n('${data.description.replace(/'/g, "''")}')`;
  writeFileSync(fd, value);
});

writeFileSync(fd, ';\n\n');
