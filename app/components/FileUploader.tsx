import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

interface FileUploaderProps {
    onFileSelect?: (file: File) => void;
}

const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0] || null;
        onFileSelect?.(file);
    }, [onFileSelect])
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop, multiple: false, accept: { 'application/pdf': ['.pdf'] }, maxSize: 20 * 1024 * 1024 })
    const file = acceptedFiles[0] || null;

    return (
        <div className="w-full gradient-border">
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className='space-y-4 cursor-pointer'>

                    {file ? (
                        <div className='uploader-selected-file' onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center space-x-3">
                                <img src="/images/pdf.png" alt="file" className='size-10' />
                                <div>
                                    <p className="text-sm font-medium text-gry-700 truncate max-w-xs">{file.name}</p>
                                    <p className="text-sm text-gray-500">{formatSize(file.size)}</p>
                                </div>
                            </div>
                            <button className='p-2 cursor-pointer' onClick={(e) => onFileSelect?.(null)}>
                                <img src="/icons/cross.svg" alt="remove" className='w-4 h-4' />
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div className='max-auto h-16 flex items-center justify-center'>
                                <img src="/icons/info.svg" alt="upload" className='size-20' />
                            </div>
                            <p className='text-lg text-gray-500 mt-2'>
                                <span className='font-semibold mr-1'>
                                    Click to upload
                                </span>
                                or drag and drop
                            </p>
                            <p className='text-sm text-gray-500 mt-2'>
                                PDF(max 20 MB)
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FileUploader