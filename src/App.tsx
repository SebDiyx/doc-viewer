import DocViewer, {
    DocViewerRenderers,
    IDocument,
} from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";
import "./App.css";

function App() {
    const docs: IDocument[] = [
        {
            uri: "", // Add the URL of the document here
            fileType: "docx",
        },
    ];

    return (
        <>
            <h1>Document Viewer</h1>
            <DocViewer
                documents={docs}
                pluginRenderers={DocViewerRenderers}
                style={{ height: "700px", width: "700px" }}
            />
        </>
    );
}

export default App;
