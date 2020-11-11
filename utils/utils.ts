/*
[
    {id: string, meta: { description, title, tags }},
    {id: string, meta: { description, title, tags }},
]
*/

const getAllNotesData = () => {
    const allNotes = require.context("../pages/notes/", true, /\.mdx$/)
    return allNotes.keys().map(fileName => ({
        id: fileName.substr(1).replace(/\/index\.mdx$/, ""),
        meta: allNotes(fileName).meta,
    }))
}

export { getAllNotesData }
