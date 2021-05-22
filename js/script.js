function render(
    fullName,
    phone,
    hobbies,
    email,
    websiteLink,
    websiteTitle
) {
    updateField('fullname', fullName);
    updateField('phone', phone);
    updateField('hobbies', hobbies);
    updateField('email', email);

    if (websiteLink && websiteTitle) {
        const website = document.getElementById('website');
        website.textContent = '';
        const link = document.createElement('a');
        link.setAttribute('class', 'btn btn-primary');
        link.setAttribute('href', websiteLink);
        link.textContent = websiteTitle;
        website.appendChild(link);
    }

}

function updateField(id, variable) {
    if (id && variable.length) {
        document.getElementById(id).textContent = variable;
    } else if (variable === false) {
        document.getElementById(id).textContent = 'Data is not provided';
    }
}
