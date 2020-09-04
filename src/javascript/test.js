let pdf = new jsPDF()

pdf.text(jsonfile, 10, 10)
pdf.save("a4.pdf")