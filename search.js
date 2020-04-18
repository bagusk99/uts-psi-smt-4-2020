function search() {
  let content = document.getElementById('content').innerHTML;
  let search_text = document.getElementById('search-input').value;
  let search = (content.match(new RegExp(search_text, "g")) || []).length;

  alert('Hasil pencarian kata "'+search_text+'" = '+search);
}