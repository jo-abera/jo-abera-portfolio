import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// import myResume from "../../asset/cv/myresume.pdf";

// import myresume from "../../asset/cv/myresume.pdf";


function ResumePage() {

    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    function onDocumentLoadSuccess({ numPages }) {
        setLoading(false);
    }
    
    function onDocumentLoadError(e){
        console.log(e);
        setLoading(false);
        setHasError(true);
    }


    if(!loading && hasError){
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-2xl font-roboto font-thin text-red-500">
                    Error while loading my resume!
                </div>
            </div>
        );
    }

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return (
        <div>
            <Document file="../../asset/cv/myresume.pdf"
            loading = {() => {
               return (<div className="flex min-h-screen items-center justify-center">
                    <div class="rounded-md p-4 max-w-sm w-full mx-auto flex flex-col gap-4 items-center">
                        <div className="text-2xl font-roboto font-thin">
                            Opening My CV
                        </div>
                        <div class="animate-pulse flex space-x-4">
                            <div class="rounded-full bg-slate-300 h-14 w-14"></div>
                            <div class="flex-1 space-y-6 py-1">
                            <div class="h-4 w-20 bg-slate-300 rounded-full"></div>
                            <div class="h-2 w-10 bg-slate-300 rounded-full"></div>
                            <div class="space-y-3">
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="h-2 bg-slate-300 rounded col-span-2"></div>
                                    <div class="h-2 bg-slate-300 rounded col-span-1"></div>
                                </div>
                                <div class="h-2 w-24 bg-slate-300 rounded"></div>
                                <div class="h-2 w-24 bg-slate-300 rounded"></div>
                                <div class="h-2 w-16 bg-slate-300 rounded"></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }} onLoadSuccess={onDocumentLoadSuccess} onLoadError={onDocumentLoadError}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
}

export default ResumePage;