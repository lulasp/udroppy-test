import React from 'react'
import { useDropzone } from 'react-dropzone'
import { FaCloudUploadAlt } from 'react-icons/fa'

function FileUpload() {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));
    return (
        <section className="container fileUpload">
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <i className="uploadIcon"><FaCloudUploadAlt size={42} /></i>
                <p>Drag and drop a file here or click</p>
            </div>
            <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
            </aside>
        </section>
    )
}

export default FileUpload
