/**
 * 该脚本的主要作用，将 source 目录下的所有文件，包括子文件，文件内容中包含 "android-transfer.techidaily.com"字符串 替换为 "world"， 然后重新保存
 * 
 * 
 */

const fs = require("node:fs")
const path = require("node:path")
const util = require("node:util");
const { execSync  } = require("node:child_process");
const uuidv4 = require("./uuidv4.min.js")

// 生成符合 IndexNow 的Key
const generateIndexNowKey = () => {
  const uuid = uuidv4.call().split('-').join('');
  return uuid;
}

// ------------------------------------------------------------------------------------------- 以下内容需要自己替换
const indexNowKey = generateIndexNowKey(); // 替换为你的API密钥

// 子域名，克隆后，可以修改为自己的子域名. 根据目录自动处理了。
const subDomainName = path.basename(__dirname).replace('site-', ''); 
const subSiteTitle = subDomainName.replaceAll('-', ' ').replace(/\b\w/g, (char) => {return char.toUpperCase()}); // 网站标题, 每个字母第一个字符都要大写

const authorList = [
  'James',   'John',        'Robert',
  'Michael', 'William',     'David',
  'Richard', 'Charles',     'Joseph',
  'Thomas',  'Christopher', 'Daniel',
  'Paul',    'Mark',        'Donald',
  'George',  'Kenneth',     'Steven',
  'Edward',  'Brian',       'Ronald',
  'Anthony', 'Kevin',       'Jason',
  'Matthew', 'Gary',        'Timothy',
  'Joseph',  'Larry',       'Jeffrey',
  'Frank',   'Scott',       'Eric',
  'Stephen', 'Andrew'
];

const subSiteAuthor = authorList[Math.floor(Math.random() * authorList.length)];
const subSiteKeywords = ''; // 关键字，多个关键字用逗号分隔

//----------------------------------------------------------------------------------------------
function exec(cmd, options = {}) {
  const maxBuffer = 100 * 1024 * 1024;
  console.log(`执行: ${cmd}`);
  execSync(cmd, { maxBuffer, ...options });
}

function tryExec(cmd, options = {}) {
  try {
    exec(cmd, options);
  } catch(e) {console.error(e)}
}

function replaceFileContent(filePath) {
  const ext = path.extname(filePath);
  const excludeList = ['.jpg', '.jpeg', '.png'];
  if (excludeList.includes(ext)) {
    return;
  }


  const content = fs.readFileSync(filePath, 'utf-8');
  let newContent = content.replaceAll(`android-transfer.techidaily.com`, `${subDomainName}.techidaily.com`);
  newContent = newContent.replaceAll(`site-android-transfer.git`, `site-${subDomainName}.git`);
  newContent = newContent.replaceAll(`hexo-site-android-transfer`, `hexo-site-${subDomainName}`);

  // 标题替换
  newContent = newContent.replaceAll(`title: TechiDaily`, `title: ${subSiteTitle}`);
  newContent = newContent.replaceAll(`description: 'TechiDaily is`, `description: '${subSiteTitle} is`);
  newContent = newContent.replaceAll(`# TechiDaily`, `# ${subSiteTitle} Site`);

  // 作者替换
  newContent = newContent.replaceAll(`author: Nova`, `author: ${subSiteAuthor}`);

  // 关键字替换
  newContent = newContent.replaceAll(`keywords: 'Tools, `, `keywords: '${subSiteKeywords} Tools, `);

  // IndexNow API Key 替换
  newContent = newContent.replaceAll(`const indexNowKey = 'ec9c9516ea82433086d979e16e1960e0';`, `const indexNowKey = '${indexNowKey}';`);

  fs.writeFileSync(filePath, newContent);
}

function replaceFile(filePath) {
  const stat = fs.statSync(filePath)
  if (stat.isDirectory()) {
    const files = fs.readdirSync(filePath);
    files.forEach(file => {
      replaceFile(path.join(filePath, file));
    });
  } else {
    replaceFileContent(filePath);
  }
}

// replace some files
replaceFile(path.join(__dirname, 'source'));
replaceFile(path.join(__dirname, '_config.yml'));
replaceFile(path.join(__dirname, '_config.redefine.yml'));

replaceFile(path.join(__dirname, 'package.json'));
replaceFile(path.join(__dirname, 'submit.bing.js'));
replaceFile(path.join(__dirname, 'readme.md'));

try {
  const newApiKeyFile = path.join(__dirname, 'source', `${indexNowKey}.txt`);
  // 将API Key 内容写入到 source/your-api-key.txt 文件中
  fs.writeFileSync(newApiKeyFile, indexNowKey);
} catch (e){
  console.error(e);
}

// 创建已经初始化过的文件
tryExec(`echo "" > .initialized.flag`, { cwd: __dirname });


