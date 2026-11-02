from flask import Flask, request, send_file
from flask_cors import CORS
import docx
import openpyxl
import io

app = Flask(__name__)
CORS(app) # Allows your local HTML file to communicate with this server

@app.route('/export', methods=['POST'])
def export_pm_doc():
    data = request.json
    doc_type = data.get('type')
    doc_format = data.get('format')
    tree_data = data.get('treeData', {})
    
    project_title = tree_data.get('title', 'Sylva Project')
    nodes = tree_data.get('nodes', [])

    if doc_format in ['xlsx', 'numbers']:
        wb = openpyxl.Workbook()
        ws = wb.active
        ws.title = doc_type.upper()
        
        # Example WBS Generator Logic
        if doc_type == 'wbs':
            ws.append(['WBS Level', 'Task Name', 'Node Type', 'Status', 'Description'])
            
            # Simple hierarchical numbering based on array index for the prototype
            for idx, node in enumerate(nodes, start=1):
                title = node.get('title', 'Untitled')
                n_type = node.get('type', 'Node')
                status = "Complete" if node.get('harvested') else "Pending"
                desc = node.get('desc', '')
                ws.append([f"1.{idx}", title, n_type.capitalize(), status, desc])

        out = io.BytesIO()
        wb.save(out)
        out.seek(0)
        return send_file(out, download_name=f"{project_title.replace(' ', '_')}_{doc_type.upper()}.xlsx", as_attachment=True)
    
    elif doc_format in ['docx', 'pages']:
        doc = docx.Document()
        doc.add_heading(f'{project_title} - {doc_type.capitalize()}', 0)
        
        # Example Project Charter Logic
        if doc_type == 'charter':
            doc.add_heading('1. Project Scope', level=1)
            doc.add_paragraph('Scope details derived from tree configuration will go here.')
            
            doc.add_heading('2. Deliverables (Fruit Nodes)', level=1)
            for node in [n for n in nodes if n.get('type') == 'fruit']:
                doc.add_paragraph(f"- {node.get('title')}", style='List Bullet')
                
        out = io.BytesIO()
        doc.save(out)
        out.seek(0)
        return send_file(out, download_name=f"{project_title.replace(' ', '_')}_{doc_type.upper()}.docx", as_attachment=True)

if __name__ == '__main__':
    print("Sylva PM Bridge running on http://localhost:5000")
    app.run(port=5000)