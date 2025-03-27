const markdownEditorEl = document.getElementById("markdown-editor");
const previewScreenEl = document.getElementById("preview-screen");
const resetMarkdownBtn = document.getElementById("reset-markdown");

// Adding Line Breaks in text
const parsedMarkdown = (markdownText) => {
  return markdownText
    .split("\n")
    .map((el) => {
      if (el === "") {
        return "<br>\n";
      }

      return el;
    })
    .join("\n");
};

const previewMarkdown = (e) => {
  const markdownText = e.target.value;

  const parsedMarkedDown = parsedMarkdown(markdownText);

  const html = marked.parse(parsedMarkedDown);

  previewScreenEl.innerHTML = DOMPurify.sanitize(html);
};

const resetMarkdown = () => {
  markdownEditorEl.value = "";
  previewScreenEl.innerHTML = "";
};

markdownEditorEl.addEventListener("input", previewMarkdown);
resetMarkdownBtn.addEventListener("click", resetMarkdown);
