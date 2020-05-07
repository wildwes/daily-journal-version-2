const API = {
    getJournalEntries() {
        return fetch("http://localhost:5000/journalEntries")
            .then((response) => response.json())
            .then((myEntries) => {
                console.log("My Entries: ", myEntries);
                renderJournalEntries(myEntries);
            });
    },
};

export default { API }