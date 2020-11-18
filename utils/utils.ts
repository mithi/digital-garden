/*
[
    {id: string, meta: { description, title, tags }},
    {id: string, meta: { description, title, tags }},
]
*/

const getAllNotesData = () => {
    const allPages = require.context("../pages/", true, /\.mdx$/)
    // return only .mdx files on "./pages" that exports meta data
    return allPages
        .keys()
        .map(fileName => {
            const id = fileName.substr(1).replace(/\/index\.mdx$/, "")
            return {
                id,
                meta: allPages(fileName).meta,
            }
        })
        .filter(data => data.meta)
}

const getAllTags = () => {
    const allNotes = getAllNotesData()
    const allTagsDuplicated = allNotes.map(note => note.meta.tags).flat()
    const tags = Array.from(new Set(allTagsDuplicated))
    return tags
}

export { getAllNotesData, getAllTags }
