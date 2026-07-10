export function parseFrontmatter(markdownContent) {
  const frontmatterRegex = /^---\s*[\r\n]+([\s\S]*?)[\r\n]+---\s*[\r\n]+([\s\S]*)$/;
  const match = frontmatterRegex.exec(markdownContent);
  if (match) {
    const yamlString = match[1];
    const content = match[2].trim();
    const data = {};
    yamlString.split('\n').forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > -1) {
        const key = line.slice(0, colonIndex).trim();
        const value = line.slice(colonIndex + 1).trim();
        data[key] = value;
      }
    });
    return { data, content };
  }
  return { data: {}, content: markdownContent };
}

const mdModules = import.meta.glob('../data/**/*.md', { query: '?raw', import: 'default', eager: true });

export function getAppStructure() {
  const structure = {};
  
  for (const path in mdModules) {
    const pathParts = path.replace('../data/', '').split('/');
    if (pathParts.length >= 3) {
      const topic = pathParts[0];
      const subtopic = pathParts[1];
      const filename = pathParts[2];
      
      const rawContent = mdModules[path];
      const { data, content } = parseFrontmatter(rawContent);
      
      if (!structure[topic]) structure[topic] = {};
      if (!structure[topic][subtopic]) structure[topic][subtopic] = [];
      
      structure[topic][subtopic].push({
        id: path,
        filename,
        title: data.title || filename.replace('.md', ''),
        shortAnswer: data.shortAnswer || '',
        content
      });
    }
  }
  
  return structure;
}
