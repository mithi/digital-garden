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

const getAllTags = () => {
    const allNotes = getAllNotesData()
    const allTagsDuplicated = allNotes.map(note => note.meta.tags).flat()
    const tags = Array.from(new Set(allTagsDuplicated))
    return tags
}

export { getAllNotesData, getAllTags }
