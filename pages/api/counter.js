const filters = require('../../comment_filters');

export default async (req, res) => {
  let lines = req.body.split('\n');
  for(let i=0; i<lines.length;i++) {
    lines[i] = lines[i].replace("\r","");
  }
  // const fileType = lines[1].substring(lines[1].lastIndexOf('.') + 1).replace('"', '');
  const fileType = lines[lines.length-3].replace('"', '');
  lines.splice(0, 4);
  lines.splice(lines.length-6);

  // count total number of lines
  let total_lines = lines.length;

  // remove blank lines
  let non_blank_lines = lines.filter(line => line.trim() != '');
  let blank_lines_count = total_lines - non_blank_lines.length;

  // loop over comment filters
  lines = non_blank_lines.slice();
  for(let i=0; i < filters[fileType].length; i++) {
    lines = lines.filter(line => !line.trimStart().startsWith(filters[fileType][i]));
  }
  let code_lines_count = lines.length;
  let comment_lines_count = non_blank_lines.length - code_lines_count;

  res.status(200).json({total_lines, blank_lines_count, code_lines_count, comment_lines_count})
}

