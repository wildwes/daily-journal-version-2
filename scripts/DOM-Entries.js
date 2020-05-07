const entryLog = document.querySelector(".entryLog");
const renderJournalEntries = (journalEntries) => {
    for (let i = 0; i < journalEntries.length; i++) {
        const allEntries = journalEntries[i];
        entryLog.innerHTML += makeJournalEntryComponent(allEntries);
    }
};

export default { entryLog }