import os
from PyPDF2 import PdfReader

pdf_dir = r"public\pdfs"
out_dir = "pdf_texts"

if not os.path.exists(out_dir):
    os.makedirs(out_dir)

for file in os.listdir(pdf_dir):
    if file.endswith(".pdf"):
        reader = PdfReader(os.path.join(pdf_dir, file))
        text = ""
        for page in reader.pages:
            t = page.extract_text()
            if t:
                text += t + "\n"
        with open(os.path.join(out_dir, file.replace(".pdf", ".txt")), "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Extracted {file}")
