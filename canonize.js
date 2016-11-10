export default function canonize(url) {
  const re = new RegExp('@?(https?:)?(\/\/)?((www\.)?([a-zA-Z0-9-\._])[^\/]*\/)?(@)?([a-zA-Z0-9_]*[\.]*[a-zA-Z0-9_]*)');
  const username = url.match(re);
  return username[7];
}
