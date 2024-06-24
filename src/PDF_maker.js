import React from 'react'
import { Image, Page, Text, Document, StyleSheet, View, Font } from '@react-pdf/renderer'


function PDF_maker() {

    const style1 = StyleSheet.create({
        page: {
            border: "1px solid red"
        },
        section: {
            margin: 10,
            padding: 10,
            
        },
        text: {
            margin: 10,
            padding: 10,
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            flexGrow: 1,
            border: "1px solid red"
        }
    });


    return (
        <>
            <Document pageLayout='singlePage'>
                <Page style={style1.page}>
                    <View style={style1.section}>
                        <Text style={style1.text}>THIS IS A CREATED PDF</Text>
                        <Text>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.</Text>
                        {/* <Image source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhNhTcdpoN6c-rzLj336_o2WpgLgeqirPchSSBerB&s"}></Image> */}
                    </View>
                    <View style={style1.section}>
                        <Text>THIS IS SECOND SECTION</Text>
                    </View>
                </Page>
            </Document>
        </>
    )
}

export default PDF_maker