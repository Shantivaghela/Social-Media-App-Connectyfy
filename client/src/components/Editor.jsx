import React, { useRef } from "react";
// import ImageEditor from "@toast-ui/react-image-editor";
// import "tui-image-editor/dist/tui-image-editor.css";
// import "tui-color-picker/dist/tui-color-picker.css";

// Custom theme (Optional)
const myTheme = {
  "common.backgroundColor": "#f5f5f5",
  "header.backgroundColor": "#4a5568",
  "header.border": "1px solid #ccc",
};

const ImageEditorComponent = ({image,onSave,onClose}) => {
  const editorRef = useRef(null);

  // Function to handle downloading the edited image
  const handleDownload = () => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      const editedImage = editorInstance.toDataURL();
      const link = document.createElement("a");
      link.href = editedImage;
      link.download = "edited-image.png";
      link.click();
    }
  };

  return (
    <div>
      <h2 className="text-center text-xl font-bold mb-4">Image Editor</h2>
      <ImageEditor
        ref={editorRef}
        includeUI={{
          loadImage: {
            path: {image}, // Default Image
            name: "SampleImage",
          },
          theme: myTheme,
          menu: ["crop", "flip", "rotate", "draw", "shape", "icon", "text", "filter"],
          initMenu: "filter",
          uiSize: { width: "100%", height: "600px" },
          menuBarPosition: "bottom",
        }}
        cssMaxWidth={700}
        cssMaxHeight={500}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70,
        }}
      />
      <div className="text-center mt-4">
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Download Edited Image
        </button>
      </div>
    </div>
  );
};

export default ImageEditorComponent;
