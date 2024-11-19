$(document).ready(function() {
    displayProgrammingLanguages();
});

function displayProgrammingLanguages() {
    const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
    <ProgrammingLanguages>
        <Language>
            <Name>C++</Name>
            <Creator>Bjarne Stroustrup</Creator>
            <YearPublished>1985</YearPublished>
        </Language>
        <Language>
            <Name>C</Name>
            <Creator>Dennis Ritchie</Creator>
            <YearPublished>1972</YearPublished>
        </Language>
        <Language>
            <Name>C#</Name>
            <Creator>Anders Hejlsberg</Creator>
            <YearPublished>2000</YearPublished>
        </Language>
    </ProgrammingLanguages>`;

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, "application/xml");

    const languages = xmlDoc.querySelectorAll("Language");
    let content = "";

    languages.forEach(language => {
        const name = language.querySelector("Name").textContent.trim();
        const creator = language.querySelector("Creator").textContent.trim();
        const year = language.querySelector("YearPublished").textContent.trim();

        content += `
            <div class="language">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Creator:</strong> ${creator}</p>
                <p><strong>Year Published:</strong> ${year}</p>
            </div>
        `;
    });

    document.getElementById("languages-content").innerHTML = content;
}
